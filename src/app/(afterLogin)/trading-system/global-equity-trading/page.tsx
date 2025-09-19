import { generateMetadata } from '@/app/shared-metadata';
import GlobalEquityTradingPage from '@/views/trading-system/glb-equity-trading';
import { Metadata } from 'next';
import {
  BreadcrumbSchema,
  WebPageSchema,
  PlatformSchema,
  TradingSystemSchema,
} from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const tradingSystemsData = schemaData.tradingSystems['global-equity-trading'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/global-equity-trading`;

export const metadata: Metadata = generateMetadata({
  title: `${tradingSystemsData.name} | Konstell Inc. `,
  description: tradingSystemsData.description,
  keywords: [
    'global equity trading',
    'trading solution',
    'financial software',
    'high-speed trading',
  ],
  openGraph: {
    title: `${tradingSystemsData.name} | Konstell Inc.`,
    description: tradingSystemsData.description,
    url: pageUrl,
    type: 'website',
  },
  alternates: {
    canonical: pageUrl,
  },
});

export const revalidate = 60;

export default async function GlobalEquityTrading() {
  const breadcrumbs = schemaData.getBreadcrumbs('/trading-system/global-equity-trading');

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
      <GlobalEquityTradingPage />
    </>
  );
}
