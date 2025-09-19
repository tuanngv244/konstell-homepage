// Example implementation for homepage (src/app/page.tsx)
import { WebsiteSchema, OrganizationSchema, FAQSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';
import HomePage from '@/views/home';
import { Metadata } from 'next';
import { generateMetadata } from '@/app/shared-metadata';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Home | Konstell Inc.',
  description:
    'Konstell Inc. provides advanced financial trading systems, platforms, and technology solutions for global markets. Specializing in FX, equity, derivatives, and bond trading systems.',
  keywords: [
    'financial technology',
    'trading systems',
    'fintech',
    'forex trading',
    'equity trading',
    'derivatives',
    'bond trading',
  ],
  openGraph: {
    ...generateMetadata().openGraph,
    title: 'Konstell Inc.',
    description: 'Advanced financial trading systems and technology solutions for global markets',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    type: 'website',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    languages: {
      en: process.env.NEXT_PUBLIC_SITE_URL,
      ko: 'https://winway-system.com/kr',
      vi: 'https://winway-system.com/vi',
    },
  },
};

export const revalidate = 60;

export default async function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <WebsiteSchema />
      <OrganizationSchema />
      <FAQSchema faqs={schemaData.companyFAQs} />

      {/* Page Content */}
      <HomePage />
    </>
  );
}
