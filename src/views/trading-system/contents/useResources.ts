import { useTranslation } from 'react-i18next';

export const useResources = () => {
  const { t } = useTranslation('common');

  const tradingSyss = [
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.globalDerivativesTrading'),
      path: '/trading-system/global-derivatives-trading',
      memo: t('tradingSysPage.oneIntegratedFxTradingPlatform'),
      description: [t('tradingSysPage.organizedVariousSolutionsRequiredForGlobalFutures')],
      img: '/images/pages/home/trading-sys/trading-sys-img-1.png',
      num: '01',
      sections: [
        {
          label: t('tradingSysPage.hts'),
          id: 'hts',
        },
        {
          label: t('tradingSysPage.mts'),
          id: 'mts',
        },
        {
          label: t('tradingSysPage.marketDataSystem'),
          id: 'marketDataSystem',
        },
        {
          label: t('tradingSysPage.ledgerSystem'),
          id: 'ledgerSystem',
        },
      ],
    },
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.propTrading'),
      path: '/trading-system/prop-trading',
      memo: t('tradingSysPage.aGlobalFuturesOptionsTrading'),
      description: [t('tradingSysPage.organizedVariousSolutionsRequiredForGlobalEquity')],
      img: '/images/pages/home/trading-sys/trading-sys-img-2.png',
      num: '02',
      sections: [],
    },
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.globalEquityTrading'),
      path: '/trading-system/global-equity-trading',
      memo: t('tradingSysPage.krkFuturesOptionsTrading'),
      description: [t('tradingSysPage.organizedVariousSolutionsRequiredForGlobalEquity')],
      img: '/images/pages/home/trading-sys/trading-sys-img-3.png',
      num: '03',
      sections: [
        {
          label: t('tradingSysPage.hts'),
          id: 'hts',
        },
        {
          label: t('tradingSysPage.tradingDataInfo'),
          id: 'marketData',
        },
        {
          label: t('tradingSysPage.ledgerSystem'),
          id: 'ledgerSystem',
        },
        {
          label: t('tradingSysPage.fixGateway'),
          id: 'fixGateway',
        },
      ],
    },
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.oocEquityOptionsTrading'),
      path: '/trading-system/ooc-equity-options',
      memo: t('tradingSysPage.aComprehensiveGlobalEquity'),
      description: [t('tradingSysPage.aComprehensiveGlobalEquity')],
      img: '/images/pages/home/trading-sys/trading-sys-img-4.png',
      num: '04',
      sections: [],
    },
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.fxTrading'),
      path: '/trading-system/fx-trading-system',
      memo: t('tradingSysPage.aComprehensiveBondTrading'),
      description: [
        t('tradingSysPage.thePremiumFxTradingSystemBasedOnPcClient'),
        t('tradingSysPage.organizedVariousSolutionsRequiredForFxTrading'),
      ],
      img: '/images/pages/home/trading-sys/trading-sys-img-5.png',
      num: '05',
      sections: [
        {
          label: t('tradingSysPage.demo'),
          id: 'demo',
        },
        {
          label: t('tradingSysPage.features'),
          id: 'features',
        },
      ],
    },
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.equityCfdTrading'),
      path: '/trading-system/equity-cfd',
      memo: t('tradingSysPage.aComprehensiveEquityCfd'),
      description: [t('tradingSysPage.aComprehensiveEquityCfd')],
      img: '/images/pages/home/trading-sys/trading-sys-img-6.png',
      num: '06',
      sections: [],
    },
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.krxBondTrading'),
      path: '/trading-system/krx-bond-trading',
      memo: t('tradingSysPage.aComprehensiveBondTradingSystem'),
      description: [t('tradingSysPage.discoverTheKrxBondTradingPlatform')],
      img: '/images/pages/home/trading-sys/trading-sys-img-7.png',
      num: '07',
      sections: [],
    },
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.krxAndOtcGoldTrading'),
      path: '/trading-system/krx-otc-gold',
      memo: t('tradingSysPage.aComprehensiveGlobalEquityTradingSystem'),
      description: [t('tradingSysPage.aComprehensiveGlobalEquityTradingSystem')],
      img: '/images/pages/home/trading-sys/trading-sys-img-8.png',
      num: '08',
      sections: [],
    },
    {
      label: t('tradingSysPage.tradingSystem'),
      title: t('tradingSysPage.arbitrageTradingSystem'),
      path: '/trading-system/arbitrage',
      memo: t('tradingSysPage.aComprehensiveEquityCfdTradingSystem'),
      description: [t('tradingSysPage.aComprehensiveEquityCfdTradingSystem')],
      img: '/images/pages/home/trading-sys/trading-sys-img-9.png',
      num: '09',
      sections: [],
    },
  ];

  return {
    tradingSyss,
  };
};
