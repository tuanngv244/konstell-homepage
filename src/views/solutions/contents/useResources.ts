import { useTranslation } from 'react-i18next';

export const useResources = () => {
  const { t } = useTranslation('common');

  const solutions = [
    {
      label: t('solutionsPage.omsForLowLatencyTrading'),
      title: t('solutionsPage.f1Win'),
      path: '/solutions/f1win',
      memo: t('solutionsPage.itProvidesAHighQualityDevelopment'),
      description: [
        t('solutionsPage.globalFutureOptionPortfolioMargin'),
        t('solutionsPage.calculationOfPortfolioFutureOption'),
        t('solutionsPage.eurexPrismaMarginCalculation'),
      ],
      img: '/images/pages/solutions/en/solution-list-img-2.png',
      num: '01',
      sections: [
        {
          label: t('platformPage.features'),
          id: 'features',
        },
        {
          label: t('solutionsPage.choosingF1Win'),
          id: 'choosingF1Win',
        },
      ],
    },
    {
      label: t('solutionsPage.globalDerivativesMarginCalculator'),
      title: t('solutionsPage.prima'),
      path: '/solutions/prima',
      memo: t('solutionsPage.mobilePlatformSupportsOneSourceMultiDevice'),
      description: [
        t('solutionsPage.globalFutureOptionPortfolioMargin'),
        t('solutionsPage.calculationOfPortfolioFutureOption'),
        t('solutionsPage.eurexPrismaMarginCalculation'),
      ],
      img: '/images/pages/solutions/en/solution-list-img-2.png',
      num: '02',
      sections: [
        {
          label: t('solutionsPage.marginComponent'),
          id: 'marginComponent',
        },
        {
          label: t('solutionsPage.exchangeCoverage'),
          id: 'exchangeCoverage',
        },
        {
          label: t('platformPage.features'),
          id: 'features',
        },
        {
          label: t('solutionsPage.synchronization'),
          id: 'synchronization',
        },
        {
          label: t('platformPage.architectures'),
          id: 'architectures',
        },
        {
          label: t('solutionsPage.references'),
          id: 'references',
        },
      ],
    },
    {
      label: t('solutionsPage.executionAlgorithms'),
      title: t('solutionsPage.forte'),
      path: '/solutions/forte',
      memo: t('solutionsPage.aGuiToolForManagingClientServerEnvironment'),
      description: [
        t('solutionsPage.isAnAdvancedAlgorithmic'),
        t('solutionsPage.deliversIntelligentExecutionStrategies'),
        t('solutionsPage.simplifiesComplexExecution'),
        t('solutionsPage.ensuresTimelyExecution'),
      ],
      img: '/images/pages/solutions/en/solution-list-img-3.png',
      num: '03',
      sections: [
        {
          label: t('platformPage.features'),
          id: 'features',
        },
        {
          label: t('solutionsPage.modernTrading'),
          id: 'modernTrading',
        },
        {
          label: t('solutionsPage.choosingForte'),
          id: 'choosingForte',
        },
        {
          label: t('solutionsPage.getAhead'),
          id: 'getAhead',
        },
      ],
    },
    {
      label: t('solutionsPage.pmMonitoringAndServerBased'),
      title: t('solutionsPage.hawkey'),
      path: '/solutions/hawkey',
      memo: t('solutionsPage.aServerBasedAutomatedOrderManagement'),
      description: [
        t('solutionsPage.dataLossPreventionFromInMemoryQueue'),
        t('solutionsPage.maximizeDataProcessingEfficiency'),
        t('solutionsPage.reliabilityAndFlexibilityWithInMemoryQueue'),
        t('solutionsPage.minimumCpuLoadByMarketData'),
      ],
      img: '/images/pages/solutions/en/solution-list-img-4.png',
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
        {
          label: t('solutionsPage.references'),
          id: 'references',
        },
      ],
    },
    {
      label: t('solutionsPage.marketDataProcessingSystem'),
      title: t('solutionsPage.mdps'),
      path: '/solutions/mds',
      memo: t('solutionsPage.globalMarketDataManagingSystem'),
      description: [
        t('solutionsPage.globalMarketDataManagingSystem'),
        t('solutionsPage.supportCommonApisDiverseDataTypes'),
      ],
      img: '/images/pages/solutions/en/solution-list-img-5.png',
      num: '05',
      sections: [
        {
          label: t('platformPage.features'),
          id: 'features',
        },
        {
          label: t('platformPage.architectures'),
          id: 'architectures',
        },
        {
          label: t('solutionsPage.references'),
          id: 'references',
        },
      ],
    },
    {
      label: t('solutionsPage.fixEngine'),
      title: t('solutionsPage.hipassFix'),
      path: '/solutions/hipass-fix',
      description: [
        t('solutionsPage.highReliabilityHighPerformance'),
        t('solutionsPage.itProvidesSeamlessIntegration'),
        t('solutionsPage.whetherYoureDealingWithMultiProtocolCommunication'),
      ],
      memo: t('solutionsPage.highReliabilityHighPerformance'),
      img: '/images/pages/solutions/en/solution-list-img-6.png',
      num: '06',
      sections: [
        {
          label: t('platformPage.features'),
          id: 'features',
        },
        {
          label: t('solutionsPage.cmeILink'),
          id: 'cmeILink',
        },
        {
          label: t('solutionsPage.monitoringServer'),
          id: 'monitoringServer',
        },
      ],
    },
    {
      label: t('solutionsPage.marketSurveillance'),
      title: t('solutionsPage.chammae'),
      path: '/solutions/chammae',
      memo: t('solutionsPage.globalDerivativeAndKospiNight'),
      description: [
        t('solutionsPage.globalDerivativeAndKospiNight'),
        t('solutionsPage.itProvidesSeamlessIntegration'),
        t('solutionsPage.whetherYoureDealingWithMultiProtocolCommunication'),
      ],
      img: '/images/pages/solutions/en/solution-list-img-7.png',
      num: '07',
      sections: [
        {
          label: t('solutionsPage.systemSpecifications'),
          id: 'systemSpecifications',
        },

        {
          label: t('solutionsPage.unfairTransaction'),
          id: 'unfairTransaction',
        },
        {
          label: t('platformPage.architectures'),
          id: 'architectures',
        },
        {
          label: t('solutionsPage.references'),
          id: 'references',
        },
      ],
    },
  ];

  return {
    solutions,
  };
};
