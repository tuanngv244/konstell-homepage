import { schemaData } from '@/@core/components/seo/schema-data';
import { generateMetadata } from '@/app/shared-metadata';
import FortePage from '@/views/solutions/forte';
import { Metadata } from 'next';
import { SolutionsSchema, BreadcrumbSchema, WebPageSchema } from '@/@core/components/seo';

const solutionData = schemaData.solutions['forte'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/forte`;

export const metadata: Metadata = generateMetadata({
  title: `${solutionData.name} | Konstell Inc. `,
  description: solutionData.description,
  keywords: ['forte', 'trading solution', 'financial software', 'high-speed trading'],
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

export default async function Forte() {
  const breadcrumbs = schemaData.getBreadcrumbs('/solutions/forte');

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
      <FortePage />
    </>
  );
}
