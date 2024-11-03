const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add source-map for better debugging
      webpackConfig.devtool = 'source-map';

      // Only add these optimizations in production
      if (env === 'production') {
        // Enable gzip compression
        webpackConfig.plugins.push(
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 8192,
            minRatio: 0.8,
          })
        );

        // Add bundle analyzer (disabled by default, enable with ANALYZE=true)
        if (process.env.ANALYZE) {
          webpackConfig.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              reportFilename: 'bundle-report.html',
            })
          );
        }

        // Optimize splitChunks configuration
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          moduleIds: 'deterministic',
          runtimeChunk: 'single',
          minimize: true,
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: 20,
            maxAsyncRequests: 20,
            minSize: 20000,
            maxSize: 244000,
            cacheGroups: {
              framework: {
                test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
                name: 'framework',
                priority: 40,
                enforce: true,
              },
              framerMotion: {
                test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
                name: 'framer-motion',
                priority: 30,
                enforce: true,
              },
              reactIcons: {
                test: /[\\/]node_modules[\\/]react-icons[\\/]/,
                name: 'react-icons',
                priority: 20,
                enforce: true,
              },
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: 10,
                enforce: true,
                reuseExistingChunk: true,
              },
              common: {
                minChunks: 2,
                priority: 5,
                reuseExistingChunk: true,
              },
              styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
              },
            },
          },
        };

        // Enable module concatenation
        webpackConfig.optimization.concatenateModules = true;

        // Add cache configuration
        webpackConfig.cache = {
          type: 'filesystem',
          version: '1.0',
          compression: 'gzip',
          store: 'pack',
          buildDependencies: {
            config: [__filename],
          },
        };

        // Optimize module resolution
        webpackConfig.resolve = {
          ...webpackConfig.resolve,
          modules: [paths.appNodeModules, 'node_modules'],
          extensions: ['.js', '.jsx', '.json'],
          alias: {
            ...webpackConfig.resolve.alias,
            '@components': path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@data': path.resolve(__dirname, 'src/data'),
          },
          symlinks: false,
          cacheWithContext: false,
        };

        // Add performance hints
        webpackConfig.performance = {
          hints: 'warning',
          maxEntrypointSize: 512000,
          maxAssetSize: 512000,
        };

        // Optimize image loading
        webpackConfig.module.rules.push({
          test: /\.(png|jpe?g|gif|webp)$/i,
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        });
      }

      return webpackConfig;
    },
  },
  // Add babel configuration for better optimization
  babel: {
    presets: [],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ],
    loaderOptions: (babelLoaderOptions) => {
      return {
        ...babelLoaderOptions,
        cacheDirectory: true,
        cacheCompression: false,
      };
    },
  },
};
