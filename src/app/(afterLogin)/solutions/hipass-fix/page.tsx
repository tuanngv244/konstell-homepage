import { generateMetadata } from '@/app/shared-metadata';
import HipassFixPage from '@/views/solutions/hipass-fix';
import { Metadata } from 'next';
import { SolutionsSchema, BreadcrumbSchema, WebPageSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

const solutionData = schemaData.solutions['hipass-fix'];
const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/hipass-fix`;

export const metadata: Metadata = generateMetadata({
  title: `${solutionData.name} | Winways Inc. `,
  description: solutionData.description,
  keywords: ['hipass-fix', 'trading solution', 'financial software', 'high-speed trading'],
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

export default async function HipassFix() {
  const breadcrumbs = schemaData.getBreadcrumbs('/solutions/hipass-fix');

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
      <HipassFixPage />
    </>
  );
}
