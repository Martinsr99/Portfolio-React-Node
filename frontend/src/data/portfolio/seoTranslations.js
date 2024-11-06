export const seoTranslations = {
  es: {
    title: 'SEO y Metadatos',
    description: 'Optimizado para motores de búsqueda:',
    points: [
      {
        text: 'Meta tags y configuración PWA',
        code: `// Configuración de meta tags en index.html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Martin Siles - Software Engineer Portfolio" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <title>Martin Siles - Software Engineer</title>
</head>

// Configuración PWA en manifest.json
{
  "short_name": "Martin Siles",
  "name": "Martin Siles - Software Engineer",
  "icons": [
    {
      "src": "logo.jpg",
      "sizes": "512x512",
      "type": "image/jpeg",
      "purpose": "any maskable"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff",
  "categories": ["portfolio", "web development"]
}`
      },
      {
        text: 'Optimización de caché y compresión',
        code: `# Configuración de caché en .htaccess
# Habilitar compresión
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>

# Configuración de caché del navegador
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>`
      },
      {
        text: 'Configuración de robots y redirecciones',
        code: `# Configuración de robots.txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

# Configuración de redirecciones en .htaccess
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]

# Habilitar CORS
Header set Access-Control-Allow-Origin "*"`
      }
    ]
  },
  en: {
    title: 'SEO & Metadata',
    description: 'Optimized for search engines:',
    points: [
      {
        text: 'Meta tags and PWA configuration',
        code: `// Meta tags configuration in index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Martin Siles - Software Engineer Portfolio" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <title>Martin Siles - Software Engineer</title>
</head>

// PWA configuration in manifest.json
{
  "short_name": "Martin Siles",
  "name": "Martin Siles - Software Engineer",
  "icons": [
    {
      "src": "logo.jpg",
      "sizes": "512x512",
      "type": "image/jpeg",
      "purpose": "any maskable"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff",
  "categories": ["portfolio", "web development"]
}`
      },
      {
        text: 'Cache and compression optimization',
        code: `# Cache configuration in .htaccess
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>

# Browser caching configuration
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>`
      },
      {
        text: 'Robots and redirects configuration',
        code: `# Robots.txt configuration
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

# Redirects configuration in .htaccess
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]

# Enable CORS
Header set Access-Control-Allow-Origin "*"`
      }
    ]
  }
};
