import { generateMetadata } from '@/app/shared-metadata';
import MobilePlatformPage from '@/views/platform/mobile';
import { Metadata } from 'next';
import { BreadcrumbSchema, WebPageSchema, PlatformSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const platformData = schemaData.platforms['mobile-platform'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/mobile-platform`;

export const metadata: Metadata = generateMetadata({
  title: `${platformData.name} | Winways Inc. `,
  description: platformData.description,
  keywords: ['mobile platform', 'trading solution', 'financial software', 'high-speed trading'],
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

export default async function MobilePlatform() {
  const breadcrumbs = schemaData.getBreadcrumbs('/platforms/mobile-platform');

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
        url={pageUrl}
        category={platformData.category}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Page Content */}
      <MobilePlatformPage />
    </>
  );
}
