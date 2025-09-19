// Schema data for all pages based on sitemap structure
export const schemaData = {
  // Trading Systems
  tradingSystems: {
    name: 'Trading Systems',
    description:
      'Comprehensive trading systems for global markets including forex, equities, derivatives, and bonds.',
    features: [],
    markets: [],
    instruments: [],
    'fx-trading-system': {
      name: 'FX Trading System',
      description:
        'Advanced foreign exchange trading platform with real-time market data, automated execution, and risk management capabilities for professional forex trading.',
      features: [
        'Real-time FX market data',
        'Automated trading execution',
        'Advanced charting tools',
        'Risk management system',
        'Multi-currency support',
        'API integration',
        'Mobile compatibility',
      ],
      markets: ['Forex', 'Currency Exchange', 'International Markets'],
      instruments: ['Major Currency Pairs', 'Minor Pairs', 'Exotic Pairs', 'Forwards', 'Options'],
    },
    'global-derivatives-trading': {
      name: 'Global Derivatives Trading',
      description:
        'Comprehensive derivatives trading platform supporting futures, options, and complex derivative instruments across global markets.',
      features: [
        'Multi-asset derivatives trading',
        'Options pricing models',
        'Futures contract management',
        'Portfolio hedging tools',
        'Real-time risk analytics',
        'Cross-market arbitrage',
        'Regulatory compliance',
      ],
      markets: ['CME', 'EUREX', 'ICE', 'KRX', 'Global Exchanges'],
      instruments: ['Futures', 'Options', 'Swaps', 'Forwards', 'Structured Products'],
    },
    'global-equity-trading': {
      name: 'Global Equity Trading',
      description:
        'Professional equity trading platform with advanced order management, real-time market data, and institutional-grade execution capabilities.',
      features: [
        'Multi-market equity trading',
        'Advanced order types',
        'Real-time market data',
        'Portfolio management',
        'Algorithmic trading',
        'Dark pool access',
        'Settlement management',
      ],
      markets: ['NYSE', 'NASDAQ', 'LSE', 'KRX', 'Global Stock Exchanges'],
      instruments: ['Stocks', 'ETFs', 'REITs', 'ADRs', 'Preferred Shares'],
    },
    'krx-bond-trading': {
      name: 'KRX Bond Trading',
      description:
        'Specialized bond trading platform for Korea Exchange (KRX) with government and corporate bond trading capabilities.',
      features: [
        'KRX bond market integration',
        'Government bond trading',
        'Corporate bond trading',
        'Yield curve analysis',
        'Credit risk assessment',
        'Settlement automation',
        'Regulatory reporting',
      ],
      markets: ['Korea Exchange (KRX)', 'Korean Bond Market'],
      instruments: ['Government Bonds', 'Corporate Bonds', 'Municipal Bonds', 'Treasury Bills'],
    },
  },

  // Platform Solutions
  platforms: {
    name: 'Platform',
    description:
      'Comprehensive platform solutions for financial institutions including server platforms, communication middleware, and client applications.',
    features: [],
    markets: [],
    instruments: [],
    'server-platform': {
      name: 'WINNET Server Platform',
      description:
        'High-performance server infrastructure platform designed for financial institutions with scalable architecture and enterprise-grade security.',
      category: 'FinanceApplication',
      features: [
        'High-frequency trading support',
        'Low-latency architecture',
        'Scalable infrastructure',
        'Enterprise security',
        'Load balancing',
        'Disaster recovery',
        'Real-time monitoring',
      ],
    },
    'communication-middleware': {
      name: 'Communication Middleware',
      description:
        'Advanced middleware solution for seamless communication between trading systems, market data providers, and financial institutions.',
      category: 'FinanceApplication',
      features: [
        'Message queue management',
        'Protocol translation',
        'Data transformation',
        'API gateway',
        'Event streaming',
        'Service mesh',
        'Fault tolerance',
      ],
    },
    'mobile-platform': {
      name: 'VIVACE Mobile Platform',
      description:
        'Feature-rich mobile application for professional trading with real-time data, order management, and portfolio tracking.',
      category: 'MobileApplication',
      features: [
        'Mobile trading interface',
        'Real-time quotes',
        'Order management',
        'Portfolio tracking',
        'Push notifications',
        'Biometric authentication',
        'Offline capabilities',
      ],
    },
    'pc-client-platform': {
      name: 'PRESTO PC Client Platform',
      description:
        'Professional desktop trading platform with advanced charting, technical analysis, and multi-monitor support for serious traders.',
      category: 'DesktopApplication',
      features: [
        'Advanced charting',
        'Technical indicators',
        'Multi-monitor support',
        'Customizable workspace',
        'Algorithmic trading',
        'Market scanning',
        'Risk management tools',
      ],
    },
  },

  // Solutions
  solutions: {
    name: 'Solutions',
    description:
      'Comprehensive financial solutions including trading systems, risk management, market data services, and specialized software for institutional investors.',
    features: [],
    markets: [],
    instruments: [],
    serviceType: '',
    category: '',
    f1win: {
      name: 'F1WIN',
      description:
        'Advanced trading solution with high-speed execution and comprehensive market access for professional traders.',
      serviceType: 'Financial Trading Solution',
      category: 'Financial Software',
    },
    prima: {
      name: 'PRIMA',
      description:
        'Professional risk management and portfolio optimization solution for institutional investors.',
      serviceType: 'Risk Management Solution',
      category: 'Financial Software',
    },
    forte: {
      name: 'FORTE',
      description:
        'Comprehensive market data and analytics platform providing real-time insights for informed trading decisions.',
      serviceType: 'Market Data Solution',
      category: 'Financial Software',
    },
    hawkey: {
      name: 'HAWKEY',
      description:
        'Advanced surveillance and compliance monitoring system for financial markets and trading activities.',
      serviceType: 'Compliance Solution',
      category: 'Financial Software',
    },
    mds: {
      name: 'MDS (Market Data Service)',
      description:
        'Real-time market data distribution system providing low-latency financial data feeds to trading systems.',
      serviceType: 'Market Data Service',
      category: 'Financial Software',
    },
    'hipass-fix': {
      name: 'HIPASS FIX',
      description:
        'FIX protocol connectivity solution enabling seamless integration with financial exchanges and counterparties.',
      serviceType: 'Connectivity Solution',
      category: 'Financial Software',
    },
    chammae: {
      name: 'CHAMMAE',
      description:
        'Korean market specialized trading system with local regulatory compliance and market-specific features.',
      serviceType: 'Regional Trading Solution',
      category: 'Financial Software',
    },
  },

  // Company FAQs
  companyFAQs: [
    {
      question: 'What services does Konstell Inc. provide?',
      answer:
        'Konstell Inc. provides comprehensive financial technology solutions including trading systems, platform solutions, market data services, and specialized software for financial institutions.',
    },
    {
      question: 'Which markets do Winways trading systems support?',
      answer:
        'Our trading systems support global markets including forex, equities, derivatives, and bonds across major exchanges like NYSE, NASDAQ, KRX, CME, EUREX, and more.',
    },
    {
      question: 'Is Winways software suitable for institutional use?',
      answer:
        'Yes, all Winways solutions are designed for institutional use with enterprise-grade security, scalability, and regulatory compliance features.',
    },
    {
      question: 'What programming languages and technologies does Winways use?',
      answer:
        'Winways utilizes modern technologies including Next.js, React, TypeScript, and various financial protocols to deliver high-performance trading solutions.',
    },
    {
      question: 'Does Winways provide mobile trading solutions?',
      answer:
        'Yes, we offer comprehensive mobile trading platforms with real-time data, order management, and portfolio tracking capabilities for iOS and Android.',
    },
  ],

  // Breadcrumbs helper
  getBreadcrumbs: (path: string) => {
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs = [{ name: 'Home', url: process.env.NEXT_PUBLIC_SITE_URL }];

    let currentPath = process.env.NEXT_PUBLIC_SITE_URL;

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Convert kebab-case to Title Case
      const name = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        name,
        url: currentPath,
      });
    });

    return breadcrumbs;
  },
};
