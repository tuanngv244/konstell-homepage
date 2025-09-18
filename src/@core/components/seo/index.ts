// Export all SEO JSON-LD Schema components
export { OrganizationSchema } from './OrganizationSchema';
export { WebsiteSchema } from './WebsiteSchema';
export { PlatformSchema } from './PlatformSchema';
export { SolutionsSchema } from './SolutionsSchema';
export { BreadcrumbSchema } from './BreadcrumbSchema';
export { WebPageSchema } from './WebPageSchema';
export { TradingSystemSchema } from './TradingSystemSchema';
export { FAQSchema } from './FAQSchema';

// Export utilities
export { generateProductSchemas, generateProductMetadata } from './schema-generator';
export { schemaData } from './schema-data';

// Type exports for easier usage
export type {
  Organization,
  WebSite,
  SoftwareApplication,
  Service,
  BreadcrumbList,
  WebPage,
  Product,
  FAQPage,
  WithContext,
} from 'schema-dts';
