import { generateMetadata } from '@/app/shared-metadata';
import PlatformPage from '@/views/platform';
import { Metadata } from 'next';
import { BreadcrumbSchema, WebPageSchema, PlatformSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const platformData = schemaData.platforms;
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/trading-system`;

export const metadata: Metadata = generateMetadata({
  title: `${platformData.name} | Winways Inc.`,
  description: platformData.description,
  keywords: ['fx trading system', 'trading solution', 'financial software', 'high-speed trading'],
  openGraph: {
    title: `${platformData.name} | Winways Inc.`,
    description: platformData.description,
    url: pageUrl,
    type: 'website',
  },
  alternates: {
    canonical: pageUrl,
  },
});
export const revalidate = 60;

export default async function Platform() {
  const breadcrumbs = schemaData.getBreadcrumbs('/platform');

  return (
    <>
      {/* JSON-LD Schemas */}
      <WebPageSchema
        name={platformData.name}
        description={platformData.description}
        url={pageUrl}
        type="WebPage"
        breadcrumbs={breadcrumbs}
      />
      <PlatformSchema
        name={platformData.name}
        description={platformData.description}
        category="FinanceApplication"
        url={pageUrl}
        features={platformData.features}
        applicationSubCategory="Trading System"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Page Content */}
      <PlatformPage />
    </>
  );
}
