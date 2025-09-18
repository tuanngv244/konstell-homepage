import { Organization, WithContext } from 'schema-dts';

export function OrganizationSchema() {
  const organizationSchema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Winways Inc.',
    alternateName: 'winways Inc.',
    description:
      'Great idea & Creative Technology - Advanced Financial Trading Systems and Technology Solutions',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: 'https://winway-system.com/logos/logo.svg',
      width: '512',
      height: '512',
    },
    image: 'https://winway-system.com/favicon-512x512.png',
    foundingDate: '2024',
    slogan: 'Great idea & Creative Technology',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Korean', 'Vietnamese'],
      url: 'https://winway-system.com/company',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressLocality: 'Seoul',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'South Korea',
      },
      {
        '@type': 'Country',
        name: 'Vietnam',
      },
      {
        '@type': 'Place',
        name: 'Global',
      },
    ],
    knowsAbout: [
      'Financial Technology',
      'Trading Systems',
      'FX Trading',
      'Equity Trading',
      'Derivatives Trading',
      'Bond Trading',
      'Financial Software Platform',
      'Communication Middleware',
      'Mobile Trading Platform',
      'PC Client Platform',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Financial Technology Solutions',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Trading Systems',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'FX Trading System',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'Global Derivatives Trading',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'Global Equity Trading',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'KRX Bond Trading',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Platform Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'Server Platform',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'Communication Middleware',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'Mobile Platform',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'SoftwareApplication',
                name: 'PC Client Platform',
              },
            },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}
