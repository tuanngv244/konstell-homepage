import { Service, WithContext } from 'schema-dts';

interface SolutionsSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  category?: string;
  additionalType?: string;
}

export function SolutionsSchema({
  name,
  description,
  serviceType,
  url,
  category,
  additionalType,
}: SolutionsSchemaProps) {
  const solutionsSchema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url,
    category,
    additionalType,
    provider: {
      '@type': 'Organization',
      name: 'Winways Inc.',
      url: 'https://winway-system.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://winway-system.com/logos/logo.svg',
      },
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
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url,
      serviceSmsNumber: '+82-XXX-XXXX-XXXX', // Replace with actual number
      servicePhone: '+82-XXX-XXXX-XXXX', // Replace with actual number
    } as any,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: name,
            description: description,
          },
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    brand: {
      '@type': 'Brand',
      name: 'Winways Inc.',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Financial Institutions',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(solutionsSchema),
      }}
    />
  );
}
