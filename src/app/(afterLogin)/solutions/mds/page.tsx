import { generateMetadata } from '@/app/shared-metadata';
import MDSPage from '@/views/solutions/mds';
import { Metadata } from 'next';
import { SolutionsSchema, BreadcrumbSchema, WebPageSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const solutionData = schemaData.solutions['mds'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/mds`;

export const metadata: Metadata = generateMetadata({
  title: `${solutionData.name} | Konstell Inc. `,
  description: solutionData.description,
  keywords: ['mds', 'trading solution', 'financial software', 'high-speed trading'],
  openGraph: {
    title: `${solutionData.name} | Konstell Inc.`,
    description: solutionData.description,
    url: pageUrl,
    type: 'website',
  },
  alternates: {
    canonical: pageUrl,
  },
});
export const revalidate = 60;

export default async function MDS() {
  const breadcrumbs = schemaData.getBreadcrumbs('/solutions/mds');

  return (
    <>
      {/* JSON-LD Schemas */}
      <WebPageSchema
        name={solutionData.name}
        description={solutionData.description}
        url={pageUrl}
        type="WebPage"
        breadcrumbs={breadcrumbs}
      />
      <SolutionsSchema
        name={solutionData.name}
        description={solutionData.description}
        serviceType={solutionData.serviceType}
        url={pageUrl}
        category={solutionData.category}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Page Content */}
      <MDSPage />
    </>
  );
}
