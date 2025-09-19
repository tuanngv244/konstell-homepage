import { generateMetadata } from '@/app/shared-metadata';
import CommunicationMiddlewarePage from '@/views/platform/communicate-middleware';
import { Metadata } from 'next';
import { BreadcrumbSchema, WebPageSchema, PlatformSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const platformData = schemaData.platforms['communication-middleware'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/communication-middleware`;

export const metadata: Metadata = generateMetadata({
  title: `${platformData.name} | Konstell Inc. `,
  description: platformData.description,
  keywords: [
    'communication middleware',
    'trading solution',
    'financial software',
    'high-speed trading',
  ],
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

export default async function CommunicationMiddleware() {
  const breadcrumbs = schemaData.getBreadcrumbs('/platforms/communication-middleware');

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
      <CommunicationMiddlewarePage />
    </>
  );
}
