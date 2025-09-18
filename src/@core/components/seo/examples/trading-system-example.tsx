// Example implementation for trading system page
import {
  SoftwareProductSchema,
  TradingSystemSchema,
  BreadcrumbSchema,
  WebPageSchema,
} from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';
import { generateMetadata } from '@/app/shared-metadata';
import FxTradingSystemPage from '@/views/trading-system/fx-trading-system';
import { Metadata } from 'next';

const productData = schemaData.tradingSystems['fx-trading-system'];
const pageUrl = 'https://winway-system.com/trading-system/fx-trading-system';

export const metadata: Metadata = generateMetadata({
  title: `${productData.name} | Winways Inc. - Professional FX Trading Platform`,
  description: productData.description,
  keywords: [
    'fx trading',
    'forex trading system',
    'currency trading',
    'foreign exchange',
    'professional trading platform',
  ],
  openGraph: {
    title: `${productData.name} | Winways Inc.`,
    description: productData.description,
    url: pageUrl,
    type: 'website',
  },
  alternates: {
    canonical: pageUrl,
  },
});

export const revalidate = 60;

export default async function FxTradingSystem() {
  const breadcrumbs = schemaData.getBreadcrumbs('/trading-system/fx-trading-system');

  return (
    <>
      {/* JSON-LD Schemas */}
      <WebPageSchema
        name={productData.name}
        description={productData.description}
        url={pageUrl}
        type="WebPage"
        breadcrumbs={breadcrumbs}
      />
      <SoftwareProductSchema
        name={productData.name}
        description={productData.description}
        category="FinanceApplication"
        url={pageUrl}
        features={productData.features}
        applicationSubCategory="Trading System"
      />
      <TradingSystemSchema
        name={productData.name}
        description={productData.description}
        url={pageUrl}
        features={productData.features}
        markets={productData.markets}
        instruments={productData.instruments}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Page Content */}
      <FxTradingSystemPage />
    </>
  );
}
