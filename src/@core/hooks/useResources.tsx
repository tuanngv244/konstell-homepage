import { useTranslation } from 'react-i18next';
import { generateUniqId } from '../utils/general';
import { INavLink } from '../types/general';

export const useResources = () => {
  const { t } = useTranslation('common');

  const navLinks: INavLink[] = [
    {
      title: t('navLinks.tradingSystem'),
      path: '/trading-system',
      id: '1',
      subs: [
        {
          title: t('navLinks.globalDerivativesTrading'),
          path: '/trading-system/global-derivatives-trading',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.equityCfdTrading'),
          path: '/trading-system/equity-cfd-trading',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.propTrading'),
          path: '/trading-system/prop-trading',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.krxBondTrading'),
          path: '/trading-system/krx-bond-trading',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.globalEquityTrading'),
          path: '/trading-system/global-equity-trading',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.krxAndOtcGoldTrading'),
          path: '/trading-system/krx-and-otc-gold-trading',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.occEquityOptionsTrading'),
          path: '/trading-system/occ-equity-options-trading',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.arbitrageTradingSystem'),
          path: '/trading-system/arbitrage-trading-system',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.fxTradingSystem'),
          path: '/trading-system/fx-trading-system',
          id: generateUniqId(),
        },
      ],
    },
    {
      title: t('navLinks.platform'),
      path: '/platform',
      id: '2',
      subs: [
        {
          title: t('navLinks.winnetServerPlatform'),
          path: '/platform/server-platform',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.trustMessagingMiddleware'),
          path: '/platform/communication-middleware',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.vicvaceMobilePlatform'),
          path: '/platform/mobile-platform',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.prestoPcClientPlatform'),
          path: '/platform/pc-client-platform',
          id: generateUniqId(),
        },
      ],
    },
    {
      title: t('navLinks.solutions'),
      path: '/solutions',
      id: '3',
      subs: [
        {
          title: t('navLinks.f1win'),
          path: '/solutions/f1win',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.mds'),
          path: '/solutions/mds',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.prima'),
          path: '/solutions/prima',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.hipassFix'),
          path: '/solutions/hipass-fix',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.forte'),
          path: '/solutions/forte',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.chammae'),
          path: '/solutions/chammae',
          id: generateUniqId(),
        },
        {
          title: t('navLinks.hawkey'),
          path: '/solutions/hawkey',
          id: generateUniqId(),
        },
      ],
    },
    {
      title: t('navLinks.projects'),
      path: '/projects',
      id: '4',
    },
    {
      title: t('navLinks.company'),
      path: '/company',
      id: '5',
    },
  ];
  return { navLinks };
};
