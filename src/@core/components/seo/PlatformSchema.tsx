import { SoftwareApplication, WithContext } from 'schema-dts';

interface PlatformSchemaProps {
  name: string;
  description: string;
  category: string;
  url: string;
  features?: string[];
  applicationSubCategory?: string;
}

export function PlatformSchema({
  name,
  description,
  category,
  url,
  features = [],
  applicationSubCategory,
}: PlatformSchemaProps) {
  const platformSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: category,
    applicationSubCategory,
    operatingSystem: ['Web-based', 'Windows', 'iOS', 'Android'],
    softwareVersion: '2024.1',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    provider: {
      '@type': 'Organization',
      name: 'Winways Inc.',
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    creator: {
      '@type': 'Organization',
      name: 'Winways Inc.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Winways Inc.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://winway-system.com/logos/logo.svg',
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Winways Inc.',
      },
      businessFunction: 'https://schema.org/Sell' as any,
    },
    featureList: features,
    screenshot: {
      '@type': 'ImageObject',
      url: `${url}/screenshot.png`,
      caption: `${name} Interface Screenshot`,
    },
    softwareHelp: {
      '@type': 'CreativeWork',
      url: `${url}/help`,
    },
    downloadUrl: url,
    installUrl: url,
    supportingData: {
      '@type': 'DataDownload',
      name: `${name} Documentation`,
      description: `Technical documentation for ${name}`,
    } as any,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(platformSchema),
      }}
    />
  );
}
