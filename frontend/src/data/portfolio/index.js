import { architectureTranslations } from './architectureTranslations';
import { performanceTranslations } from './performanceTranslations';
import { accessibilityTranslations } from './accessibilityTranslations';
import { seoTranslations } from './seoTranslations';
import { featuresTranslations } from './featuresTranslations';
import { techStackTranslations } from './techStackTranslations';

const metricsUrl = "https://www.projectwallace.com/css-code-quality?url=martinsiles.es&prettify=1";

export const portfolioTranslations = {
  es: {
    title: 'Creación del Portfolio',
    cssMetricsTitle: 'Análisis de Calidad CSS',
    cssMetricsDescription: `Este portfolio ha sido desarrollado siguiendo las mejores prácticas de CSS. Utilizando <a href="${metricsUrl}" target="_blank" rel="noopener noreferrer" class="metrics-link">Project Wallace</a>, una herramienta especializada en análisis de código CSS, podemos evaluar métricas clave como la especificidad, reutilización y mantenibilidad del código.`,
    showCodeButton: 'Ver código',
    hideCodeButton: 'Ocultar código',
    architectureTitle: architectureTranslations.es.title,
    architectureDescription: architectureTranslations.es.description,
    architecturePoints: architectureTranslations.es.points,
    performanceTitle: performanceTranslations.es.title,
    performanceDescription: performanceTranslations.es.description,
    performancePoints: performanceTranslations.es.points,
    accessibilityTitle: accessibilityTranslations.es.title,
    accessibilityDescription: accessibilityTranslations.es.description,
    accessibilityPoints: accessibilityTranslations.es.points,
    seoTitle: seoTranslations.es.title,
    seoDescription: seoTranslations.es.description,
    seoPoints: seoTranslations.es.points,
    featuresTitle: featuresTranslations.es.title,
    featuresDescription: featuresTranslations.es.description,
    featuresPoints: featuresTranslations.es.points,
    techStackTitle: 'Stack Tecnológico',
    techStackPoints: techStackTranslations.es
  },
  en: {
    title: 'Portfolio Creation',
    cssMetricsTitle: 'CSS Quality Analysis',
    cssMetricsDescription: `This portfolio has been developed following CSS best practices. Using <a href="${metricsUrl}" target="_blank" rel="noopener noreferrer" class="metrics-link">Project Wallace</a>, a specialized CSS code analysis tool, we can evaluate key metrics such as specificity, reusability, and code maintainability.`,
    showCodeButton: 'Show code',
    hideCodeButton: 'Hide code',
    architectureTitle: architectureTranslations.en.title,
    architectureDescription: architectureTranslations.en.description,
    architecturePoints: architectureTranslations.en.points,
    performanceTitle: performanceTranslations.en.title,
    performanceDescription: performanceTranslations.en.description,
    performancePoints: performanceTranslations.en.points,
    accessibilityTitle: accessibilityTranslations.en.title,
    accessibilityDescription: accessibilityTranslations.en.description,
    accessibilityPoints: accessibilityTranslations.en.points,
    seoTitle: seoTranslations.en.title,
    seoDescription: seoTranslations.en.description,
    seoPoints: seoTranslations.en.points,
    featuresTitle: featuresTranslations.en.title,
    featuresDescription: featuresTranslations.en.description,
    featuresPoints: featuresTranslations.en.points,
    techStackTitle: 'Tech Stack',
    techStackPoints: techStackTranslations.en
  }
};
