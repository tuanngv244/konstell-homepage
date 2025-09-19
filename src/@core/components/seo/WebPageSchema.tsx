import { WebPage, WithContext } from 'schema-dts';

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  breadcrumbs?: Array<{ name: string; url: string }>;
  lastReviewed?: string;
  reviewedBy?: string;
}

export function WebPageSchema({
  name,
  description,
  url,
  type = 'WebPage',
  breadcrumbs = [],
  lastReviewed,
  reviewedBy,
}: WebPageSchemaProps) {
  const webPageSchema: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    inLanguage: ['en', 'ko', 'vi'],
    isPartOf: {
      '@type': 'WebSite',
      name: 'Konstell Inc.',
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    about: {
      '@type': 'Organization',
      name: 'Konstell Inc.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Konstell Inc.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://winway-system.com/logos/logo.svg',
      },
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    ...(lastReviewed && {
      lastReviewed,
      reviewedBy: {
        '@type': 'Person',
        name: reviewedBy || 'Winways Team',
      },
    }),
    ...(breadcrumbs.length > 0 && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
    mainEntity: {
      '@type': 'Organization',
      name: 'Konstell Inc.',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webPageSchema),
      }}
    />
  );
}
