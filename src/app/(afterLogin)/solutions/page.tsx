import { generateMetadata } from '@/app/shared-metadata';
import SolutionsPage from '@/views/solutions';
import { Metadata } from 'next';
import { BreadcrumbSchema, WebPageSchema, SolutionsSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const solutionData = schemaData.solutions;
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/solutions`;

export const metadata: Metadata = generateMetadata({
  title: `${solutionData.name} | Winways Inc.`,
  description: solutionData.description,
  keywords: ['fx trading system', 'trading solution', 'financial software', 'high-speed trading'],
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

export default async function Solutions() {
  const breadcrumbs = schemaData.getBreadcrumbs('/platform');

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
      <SolutionsPage />
    </>
  );
}
