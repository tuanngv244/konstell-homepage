import { generateMetadata } from '@/app/shared-metadata';
import ServerPlatformPage from '@/views/platform/server';
import { Metadata } from 'next';

import { BreadcrumbSchema, WebPageSchema, PlatformSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const platformData = schemaData.platforms['server-platform'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/server-platform`;

export const metadata: Metadata = generateMetadata({
  title: `${platformData.name} | Konstell Inc. `,
  description: platformData.description,
  keywords: ['server platform', 'trading solution', 'financial software', 'high-speed trading'],
  openGraph: {
    title: `${platformData.name} | Konstell Inc.`,
    description: platformData.description,
    url: pageUrl,
    type: 'website',
  },
  alternates: {
    canonical: pageUrl,
  },
});

export const revalidate = 60;

export default async function ServerPlatform() {
  const breadcrumbs = schemaData.getBreadcrumbs('/platforms/server-platform');

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
      <ServerPlatformPage />
    </>
  );
}
