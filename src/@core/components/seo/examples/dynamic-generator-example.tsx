// Example of using the dynamic schema generator
// This can be used in your actual page files for easier implementation

import { generateProductSchemas, generateProductMetadata } from '@/@core/components/seo';
import FxTradingSystemPage from '@/views/trading-system/fx-trading-system';
import { Metadata } from 'next';

const pageUrl = 'https://winway-system.com/trading-system/fx-trading-system';

export const metadata: Metadata = generateProductMetadata({
  type: 'trading-system',
  slug: 'fx-trading-system',
  url: pageUrl,
});

export const revalidate = 60;

export default async function FxTradingSystem() {
  const schemas = generateProductSchemas({
    type: 'trading-system',
    slug: 'fx-trading-system',
    url: pageUrl,
  });

  return (
    <>
      {schemas}
      <FxTradingSystemPage />
    </>
  );
}

// Usage for other pages:

// Platform page:
// generateProductSchemas({ type: 'platform', slug: 'server-platform', url: '...' })

// Solution page:
// generateProductSchemas({ type: 'solution', slug: 'f1win', url: '...' })
