import { generateMetadata } from '@/app/shared-metadata';
import CompanyPage from '@/views/company';
import { Metadata } from 'next';
import { schemaData } from '@/@core/components/seo/schema-data';
import {
  OrganizationSchema,
  BreadcrumbSchema,
  WebPageSchema,
  FAQSchema,
} from '@/@core/components/seo';

const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/company`;

export const metadata: Metadata = generateMetadata({
  title: 'Company | Konstell Inc. ',
  description:
    'Learn about Konstell Inc., a leading financial technology company providing innovative trading systems and solutions for global markets.',
  keywords: ['about winways', 'fintech company', 'financial technology', 'trading systems company'],
  openGraph: {
    title: 'Company | Konstell Inc. ',
    description:
      'Learn about Konstell Inc., a leading financial technology company providing innovative trading systems and solutions.',
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
        name="Company | Konstell Inc."
        description="Learn about Konstell Inc., a leading financial technology company"
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
