import { useTranslation } from 'react-i18next';

export const useResources = () => {
  const { t } = useTranslation('common');
  const platforms = [
    {
      label: t('platformPage.messageDrivenMiddleware'),
      title: t('platformPage.winnetServerPlatform'),
      path: '/platform/server-platform',
      description: t('platformPage.itProvidesAHighQualityDevelopment'),
      img: '/images/pages/home/platform/platform-section-img-1.png',

      num: '01',
      sections: [
        {
          label: t('platformPage.summary'),
          id: 'summary',
        },
        {
          label: t('platformPage.functions'),
          id: 'functions',
        },
        {
          label: t('platformPage.uiControl'),
          id: 'ui-control',
        },
        {
          label: t('platformPage.architectures'),
          id: 'architectures',
        },
      ],
    },
    {
      label: t('platformPage.oneSourceAndMultiDevices'),
      title: t('platformPage.vivaceMobilePlatform'),
      description: t('platformPage.mobilePlatformSupportsOneSourceMultiDevice'),
      path: '/platform/mobile-platform',
      img: '/images/pages/home/platform/platform-section-img-2.png',
      num: '02',
      sections: [
        {
          label: t('platformPage.features'),
          id: 'features',
        },
        {
          label: t('platformPage.architectures'),
          id: 'architectures',
        },
      ],
    },
    {
      label: t('platformPage.clientServerEnvironmentGuiTool'),
      title: t('platformPage.prestoPcClientPlatform'),
      description: t('platformPage.aGuiToolForManagingClientServerEnvironment'),
      img: '/images/pages/home/platform/platform-section-img-3.png',

      path: '/platform/pc-client-platform',
      num: '03',
      sections: [
        {
          label: t('platformPage.summary'),
          id: 'summary',
        },
        {
          label: t('platformPage.functions'),
          id: 'functions',
        },
        {
          label: t('platformPage.features'),
          id: 'features',
        },
        {
          label: t('platformPage.architectures'),
          id: 'architectures',
        },
      ],
    },
    {
      label: t('platformPage.messagingGatewayPlatform'),
      title: t('platformPage.trustMessagingMiddleware'),
      description: t('platformPage.ensuresSecureRealTimeAndReliableMessageDelivery'),
      path: '/platform/communication-middleware',
      img: '/images/pages/home/platform/platform-section-img-4.png',
      num: '04',
      sections: [
        {
          label: t('platformPage.features'),
          id: 'features',
        },
        {
          label: t('platformPage.architectures'),
          id: 'architectures',
        },
      ],
    },
  ];

  return {
    platforms,
  };
};
