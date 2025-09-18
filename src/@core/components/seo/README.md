# JSON-LD SEO Schema Implementation for Winways Inc.

This documentation provides comprehensive JSON-LD schema implementation for your Next.js application to improve SEO and search engine understanding.

## 📦 Installation

The `schema-dts` package has been installed to provide TypeScript support for Schema.org types:

```bash
npm install schema-dts --legacy-peer-deps
```

## 🗂️ File Structure

```
src/@core/components/seo/
├── index.ts                    # Main exports
├── schema-data.ts             # Data for all schemas
├── OrganizationSchema.tsx     # Company schema
├── WebsiteSchema.tsx          # Website schema
├── SoftwareProductSchema.tsx  # Software products schema
├── ServiceSchema.tsx          # Services schema
├── BreadcrumbSchema.tsx       # Navigation breadcrumbs
├── WebPageSchema.tsx          # Individual page schema
├── TradingSystemSchema.tsx    # Trading system products
├── FAQSchema.tsx              # FAQ schema
└── examples/                  # Implementation examples
    ├── homepage-example.tsx
    ├── trading-system-example.tsx
    ├── solution-example.tsx
    └── company-example.tsx
```

## 🚀 Quick Implementation

### 1. Homepage Implementation

```tsx
// src/app/page.tsx
import { WebsiteSchema, FAQSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

export default function Home() {
  return (
    <>
      <WebsiteSchema />
      <FAQSchema faqs={schemaData.companyFAQs} />
      <HomePage />
    </>
  );
}
```

### 2. Trading System Pages

```tsx
// src/app/(afterLogin)/trading-system/fx-trading-system/page.tsx
import {
  SoftwareProductSchema,
  TradingSystemSchema,
  BreadcrumbSchema,
} from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

export default function FxTradingSystem() {
  const productData = schemaData.tradingSystems['fx-trading-system'];
  const breadcrumbs = schemaData.getBreadcrumbs('/trading-system/fx-trading-system');

  return (
    <>
      <SoftwareProductSchema
        name={productData.name}
        description={productData.description}
        category="FinanceApplication"
        url="https://winway-system.com/trading-system/fx-trading-system"
        features={productData.features}
      />
      <TradingSystemSchema
        name={productData.name}
        description={productData.description}
        url="https://winway-system.com/trading-system/fx-trading-system"
        features={productData.features}
        markets={productData.markets}
        instruments={productData.instruments}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FxTradingSystemPage />
    </>
  );
}
```

### 3. Solutions Pages

```tsx
// src/app/(afterLogin)/solutions/f1win/page.tsx
import { ServiceSchema, BreadcrumbSchema } from '@/@core/components/seo';
import { schemaData } from '@/@core/components/seo/schema-data';

export default function F1Win() {
  const solutionData = schemaData.solutions['f1win'];
  const breadcrumbs = schemaData.getBreadcrumbs('/solutions/f1win');

  return (
    <>
      <ServiceSchema
        name={solutionData.name}
        description={solutionData.description}
        serviceType={solutionData.serviceType}
        url="https://winway-system.com/solutions/f1win"
        category={solutionData.category}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <F1WinPage />
    </>
  );
}
```

## 📊 Available Schemas

### 1. OrganizationSchema

- **Usage**: Added globally in layout.tsx
- **Purpose**: Defines your company information
- **Includes**: Company details, contact info, services offered

### 2. WebsiteSchema

- **Usage**: Homepage only
- **Purpose**: Defines the entire website
- **Includes**: Site navigation, search functionality, multilingual support

### 3. SoftwareProductSchema

- **Usage**: Trading systems and platform pages
- **Purpose**: Describes software products
- **Includes**: Features, compatibility, pricing, screenshots

### 4. TradingSystemSchema

- **Usage**: Specialized for trading system products
- **Purpose**: Enhanced product schema for trading systems
- **Includes**: Supported markets, instruments, features

### 5. ServiceSchema

- **Usage**: Solutions pages
- **Purpose**: Describes services offered
- **Includes**: Service type, area served, pricing

### 6. BreadcrumbSchema

- **Usage**: All pages (except homepage)
- **Purpose**: Navigation breadcrumbs for SEO
- **Includes**: Hierarchical navigation structure

### 7. WebPageSchema

- **Usage**: Individual pages
- **Purpose**: Describes specific web pages
- **Includes**: Page type, content, relationships

### 8. FAQSchema

- **Usage**: Homepage and company pages
- **Purpose**: Structured FAQ data
- **Includes**: Common questions and answers

## 🎯 Product Coverage

### Trading Systems

- ✅ FX Trading System
- ✅ Global Derivatives Trading
- ✅ Global Equity Trading
- ✅ KRX Bond Trading

### Platforms

- ✅ Server Platform
- ✅ Communication Middleware
- ✅ Mobile Platform
- ✅ PC Client Platform

### Solutions

- ✅ F1WIN
- ✅ PRIMA
- ✅ FORTE
- ✅ HAWKEY
- ✅ MDS
- ✅ HIPASS FIX
- ✅ CHAMMAE

## 🔧 Customization

### Adding New Products

1. **Update schema-data.ts**:

```typescript
tradingSystems: {
  'new-system': {
    name: 'New Trading System',
    description: 'Description of the new system',
    features: ['Feature 1', 'Feature 2'],
    markets: ['Market 1'],
    instruments: ['Instrument 1']
  }
}
```

2. **Implement in page**:

```tsx
const productData = schemaData.tradingSystems['new-system'];
```

### Updating Company Information

Edit the `OrganizationSchema.tsx` file to update:

- Contact information
- Address details
- Social media links
- Company description

## 🌐 Multi-language Support

The schemas include support for your three languages:

- English (default)
- Korean (`/kr`)
- Vietnamese (`/vi`)

Update language-specific content in:

- `inLanguage` properties
- `availableLanguage` in contact points
- URL alternates in metadata

## 📈 SEO Benefits

1. **Rich Snippets**: Enhanced search results with company info, ratings, breadcrumbs
2. **Knowledge Graph**: Better understanding of your business by search engines
3. **Local SEO**: Improved local search rankings with address and contact info
4. **Product Search**: Better visibility for software products and services
5. **FAQ Display**: Direct answers in search results
6. **Breadcrumb Navigation**: Enhanced navigation in search results

## ✅ Testing Your Implementation

1. **Google's Rich Results Test**:
   - Go to: https://search.google.com/test/rich-results
   - Enter your page URLs to validate schema

2. **Schema.org Validator**:
   - Go to: https://validator.schema.org/
   - Validate your JSON-LD markup

3. **Google Search Console**:
   - Monitor rich results performance
   - Check for structured data errors

## 🚨 Important Notes

1. **Update Contact Information**: Replace placeholder contact details with actual information
2. **Verify URLs**: Ensure all URLs match your actual site structure
3. **Test Implementation**: Always test schemas before deploying to production
4. **Monitor Performance**: Check Google Search Console for structured data issues
5. **Keep Updated**: Update lastModified dates when content changes

## 📞 Support

For questions about implementing these schemas:

1. Check the example files in the `/examples` directory
2. Refer to Schema.org documentation
3. Use Google's structured data testing tools
4. Monitor Google Search Console for issues

---

**Last Updated**: August 2025  
**Version**: 1.0  
**Compatibility**: Next.js 15+, TypeScript 5+
