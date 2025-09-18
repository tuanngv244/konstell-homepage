import { generateMetadata } from '@/app/shared-metadata';
import FxTradingSystemPage from '@/views/trading-system/fx-trading-system';
import { Metadata } from 'next';
import {
  BreadcrumbSchema,
  WebPageSchema,
  PlatformSchema,
  TradingSystemSchema,
} from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const tradingSystemsData = schemaData.tradingSystems['fx-trading-system'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/fx-trading-system`;

export const metadata: Metadata = generateMetadata({
  title: `${tradingSystemsData.name} | Winways Inc. `,
  description: tradingSystemsData.description,
  keywords: ['fx trading system', 'trading solution', 'financial software', 'high-speed trading'],
  openGraph: {
    title: `${tradingSystemsData.name} | Winways Inc.`,
    description: tradingSystemsData.description,
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
        name={tradingSystemsData.name}
        description={tradingSystemsData.description}
        url={pageUrl}
        type="WebPage"
        breadcrumbs={breadcrumbs}
      />
      <PlatformSchema
        name={tradingSystemsData.name}
        description={tradingSystemsData.description}
        category="FinanceApplication"
        url={pageUrl}
        features={tradingSystemsData.features}
        applicationSubCategory="Trading System"
      />
      <TradingSystemSchema
        name={tradingSystemsData.name}
        description={tradingSystemsData.description}
        url={pageUrl}
        features={tradingSystemsData.features}
        markets={tradingSystemsData.markets}
        instruments={tradingSystemsData.instruments}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Page Content */}
      <FxTradingSystemPage />
    </>
  );
}
