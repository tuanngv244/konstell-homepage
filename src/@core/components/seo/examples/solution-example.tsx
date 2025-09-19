// Example implementation for solutions page
import { ServiceSchema, BreadcrumbSchema, WebPageSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';
import { generateMetadata } from '@/app/shared-metadata';
import F1WinPage from '@/views/solutions/f1win';
import { Metadata } from 'next';

const solutionData = schemaData.solutions['f1win'];
const pageUrl = 'https://winway-system.com/solutions/f1win';

export const metadata: Metadata = generateMetadata({
  title: `${solutionData.name} | Konstell Inc. `,
  description: solutionData.description,
  keywords: ['f1win', 'trading solution', 'financial software', 'high-speed trading'],
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

export default async function F1Win() {
  const breadcrumbs = schemaData.getBreadcrumbs('/solutions/f1win');

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
      <ServiceSchema
        name={solutionData.name}
        description={solutionData.description}
        serviceType={solutionData.serviceType}
        url={pageUrl}
        category={solutionData.category}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Page Content */}
      <F1WinPage />
    </>
  );
}
