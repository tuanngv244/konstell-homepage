import { generateMetadata } from '@/app/shared-metadata';
import { Metadata } from 'next';
import PrimaPage from '@/views/solutions/prima';
import { SolutionsSchema, BreadcrumbSchema, WebPageSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const solutionData = schemaData.solutions['prima'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/prima`;

export const metadata: Metadata = generateMetadata({
  title: `${solutionData.name} | Winways Inc. `,
  description: solutionData.description,
  keywords: ['prima', 'trading solution', 'financial software', 'high-speed trading'],
  openGraph: {
    title: `${solutionData.name} | Winways Inc.`,
    description: solutionData.description,
    url: pageUrl,
    type: 'website',
  },
  alternates: {
    canonical: pageUrl,
  },
});
export const revalidate = 60;

export default async function Prima() {
  const breadcrumbs = schemaData.getBreadcrumbs('/solutions/prima');

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
      <PrimaPage />
    </>
  );
}
