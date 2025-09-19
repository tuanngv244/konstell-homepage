import { WebSite, WithContext } from 'schema-dts';

export function WebsiteSchema() {
  const websiteSchema: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Konstell Inc.',
    description:
      'Great idea & Creative Technology - Advanced Financial Trading Systems and Technology Solutions',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    inLanguage: ['en', 'ko', 'vi'],
    publisher: {
      '@type': 'Organization',
      name: 'Konstell Inc.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://winway-system.com/logos/logo.svg',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
      },
      ...{
        'query-input': 'required name=search_term_string',
      },
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'Konstell Inc.',
      description: 'Financial Technology Company specializing in Trading Systems and Platforms',
    },
    about: {
      '@type': 'Thing',
      name: 'Financial Technology Solutions',
    },
    keywords: [
      'Financial Technology',
      'Trading Systems',
      'FX Trading',
      'Equity Trading',
      'Derivatives Trading',
      'Bond Trading',
      'Trading Platform',
      'Financial Software',
      'Korea Financial Technology',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema),
      }}
    />
  );
}
