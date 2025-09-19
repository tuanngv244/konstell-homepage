import { generateMetadata } from '@/app/shared-metadata';
import { Metadata } from 'next';
import { schemaData } from '@/@core/components/seo/schema-data';
import {
    OrganizationSchema,
    BreadcrumbSchema,
    WebPageSchema,
    FAQSchema,
} from '@/@core/components/seo';
import ProjectPage from '@/views/project';

const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/project`;

export const metadata: Metadata = generateMetadata({
    title: 'Project | Konstell Inc. ',
    description:
        'Learn about Konstell Inc., a leading financial technology company providing innovative trading systems and solutions for global markets.',
    keywords: ['project winways', 'fintech company', 'financial technology', 'trading systems company'],
    openGraph: {
        title: 'Project | Konstell Inc. ',
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

export default async function Project() {
    const breadcrumbs = schemaData.getBreadcrumbs('/project');

    return (
        <>
            {/* JSON-LD Schemas */}
            <WebPageSchema
                name="Project | Konstell Inc."
                description="Learn about Konstell Inc., a leading financial technology company"
                url={pageUrl}
                type="AboutPage"
                breadcrumbs={breadcrumbs}
            />
            <OrganizationSchema />
            <FAQSchema faqs={schemaData.companyFAQs} />
            <BreadcrumbSchema items={breadcrumbs} />

            {/* Page Content */}
            <ProjectPage />
        </>
    );
}
