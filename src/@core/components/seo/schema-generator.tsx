import { schemaData } from './schema-data';
import {
  TradingSystemSchema,
  SolutionsSchema,
  BreadcrumbSchema,
  WebPageSchema,
  PlatformSchema,
} from './index';

interface SchemaGeneratorProps {
  type: 'trading-system' | 'platform' | 'solution';
  slug: string;
  url: string;
}

/**
 * Dynamic schema generator based on product type and slug
 */
export function generateProductSchemas({ type, slug, url }: SchemaGeneratorProps) {
  const breadcrumbs = schemaData.getBreadcrumbs(url.replace(process.env.NEXT_PUBLIC_SITE_URL, ''));

  switch (type) {
    case 'trading-system': {
      const data = schemaData.tradingSystems[slug as keyof typeof schemaData.tradingSystems];
      if (!data) return null;

      return (
        <>
          <WebPageSchema
            name={data.name}
            description={data.description}
            url={url}
            breadcrumbs={breadcrumbs}
          />
          <PlatformSchema
            name={data.name}
            description={data.description}
            category="FinanceApplication"
            url={url}
            features={data.features}
            applicationSubCategory="Trading System"
          />
          <TradingSystemSchema
            name={data.name}
            description={data.description}
            url={url}
            features={data.features}
            markets={data.markets}
            instruments={data.instruments}
          />
          <BreadcrumbSchema items={breadcrumbs} />
        </>
      );
    }

    case 'platform': {
      const data = schemaData.platforms[slug as keyof typeof schemaData.platforms];
      if (!data) return null;

      return (
        <>
          <WebPageSchema
            name={data.name}
            description={data.description}
            url={url}
            breadcrumbs={breadcrumbs}
          />
          <PlatformSchema
            name={data.name}
            description={data.description}
            category={data.category}
            url={url}
            features={data.features}
            applicationSubCategory="Platform Solution"
          />
          <BreadcrumbSchema items={breadcrumbs} />
        </>
      );
    }

    case 'solution': {
      const data = schemaData.solutions[slug as keyof typeof schemaData.solutions];
      if (!data) return null;

      return (
        <>
          <WebPageSchema
            name={data.name}
            description={data.description}
            url={url}
            breadcrumbs={breadcrumbs}
          />
          <SolutionsSchema
            name={data.name}
            description={data.description}
            serviceType={data.serviceType}
            url={url}
            category={data.category}
          />
          <BreadcrumbSchema items={breadcrumbs} />
        </>
      );
    }

    default:
      return null;
  }
}

/**
 * Generate metadata based on product type and slug
 */
export function generateProductMetadata({ type, slug, url }: SchemaGeneratorProps) {
  let data;
  let titleSuffix = '';

  switch (type) {
    case 'trading-system':
      data = schemaData.tradingSystems[slug as keyof typeof schemaData.tradingSystems];
      titleSuffix = '| Trading System | Konstell Inc.';
      break;
    case 'platform':
      data = schemaData.platforms[slug as keyof typeof schemaData.platforms];
      titleSuffix = '| Platform | Konstell Inc.';
      break;
    case 'solution':
      data = schemaData.solutions[slug as keyof typeof schemaData.solutions];
      titleSuffix = '| Solution | Konstell Inc.';
      break;
    default:
      return {};
  }

  if (!data) return {};

  return {
    title: `${data.name} ${titleSuffix}`,
    description: data.description,
    keywords: generateKeywords(data, type),
    openGraph: {
      title: `${data.name} | Konstell Inc.`,
      description: data.description,
      url,
      type: 'website' as const,
    },
    alternates: {
      canonical: url,
    },
  };
}

function generateKeywords(data: any, type: string): string[] {
  const baseKeywords = ['fintech', 'financial technology', 'winways'];

  switch (type) {
    case 'trading-system':
      return [
        ...baseKeywords,
        'trading system',
        'financial trading',
        ...(data.markets?.map((m: string) => m.toLowerCase()) || []),
        ...(data.instruments?.map((i: string) => i.toLowerCase()) || []),
      ];
    case 'platform':
      return [
        ...baseKeywords,
        'platform',
        'financial platform',
        ...(data.category ? [data.category.toLowerCase()] : []),
      ];
    case 'solution':
      return [
        ...baseKeywords,
        'solution',
        'financial solution',
        data.serviceType?.toLowerCase() || '',
      ];
    default:
      return baseKeywords;
  }
}
