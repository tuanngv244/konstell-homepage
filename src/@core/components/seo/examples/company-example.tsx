// Example implementation for company page
import {
  OrganizationSchema,
  BreadcrumbSchema,
  WebPageSchema,
  FAQSchema,
} from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';
import { generateMetadata } from '@/app/shared-metadata';
import CompanyPage from '@/views/company';
import { Metadata } from 'next';

const pageUrl = 'https://winway-system.com/company';

export const metadata: Metadata = generateMetadata({
  title: 'About Company | Winways Inc. - Financial Technology Leaders',
  description:
    'Learn about Winways Inc., a leading financial technology company providing innovative trading systems and solutions for global markets.',
  keywords: ['about winways', 'fintech company', 'financial technology', 'trading systems company'],
  openGraph: {
    title: 'About Winways Inc. - Financial Technology Leaders',
    description:
      'Learn about Winways Inc., a leading financial technology company providing innovative trading systems and solutions.',
    url: pageUrl,
    type: 'website',
  },
  alternates: {
    canonical: pageUrl,
  },
});

export const revalidate = 60;

export default async function Company() {
  const breadcrumbs = schemaData.getBreadcrumbs('/company');

  return (
    <>
      {/* JSON-LD Schemas */}
      <WebPageSchema
        name="About Winways Inc."
        description="Learn about Winways Inc., a leading financial technology company"
        url={pageUrl}
        type="AboutPage"
        breadcrumbs={breadcrumbs}
      />
      <OrganizationSchema />
      <FAQSchema faqs={schemaData.companyFAQs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Page Content */}
      <CompanyPage />
    </>
  );
}
