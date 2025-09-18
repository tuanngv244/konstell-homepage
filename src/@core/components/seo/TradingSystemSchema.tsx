import { Product, WithContext } from 'schema-dts';

interface TradingSystemSchemaProps {
  name: string;
  description: string;
  url: string;
  features: string[];
  markets?: string[];
  instruments?: string[];
}

export function TradingSystemSchema({
  name,
  description,
  url,
  features,
  markets = [],
  instruments = [],
}: TradingSystemSchemaProps) {
  const tradingSystemSchema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    category: 'Financial Trading System',
    brand: {
      '@type': 'Brand',
      name: 'Winways Inc.',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Winways Inc.',
      url: process.env.NEXT_PUBLIC_SITE_URL,
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
    additionalProperty: [
      //   {
      //     '@type': 'PropertyValue',
      //     name: 'Features',
      //     value: features.join(', '),
      //   },
      //   ...(markets.length > 0
      //     ? [
      //         {
      //           '@type': 'PropertyValue',
      //           name: 'Supported Markets',
      //           value: markets.join(', '),
      //         },
      //       ]
      //     : []),
      //   ...(instruments.length > 0
      //     ? [
      //         {
      //           '@type': 'PropertyValue',
      //           name: 'Trading Instruments',
      //           value: instruments.join(', '),
      //         },
      //       ]
      //     : []),
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Financial Institutions',
    },
    potentialAction: {
      '@type': 'ViewAction',
      target: url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(tradingSystemSchema),
      }}
    />
  );
}
