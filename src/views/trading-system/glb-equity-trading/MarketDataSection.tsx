'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useGSAP } from '@gsap/react';
import { styled, Tab, Tabs } from '@mui/material';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useTranslation } from 'next-i18next';
import { act, useState } from 'react';

gsap.registerPlugin(Flip);

type Props = {};

const MarketDataSection = ({}: Props) => {
  const { t } = useTranslation('common');
  const [actTab, setActTab] = useState<string>('market-data');

  const _onChangeTab = (_: unknown, v: string) => {
    setActTab(v);
  };

  const fep = [
    {
      label: t('tradingSysPage.marketData'),
      descriptions: [
        t('tradingSysPage.marketDataReception'),
        t('tradingSysPage.delayedMarketDataProcess'),
        t('tradingSysPage.marketDataFiltering'),
        t('tradingSysPage.applyFilteringUsingEnvironmentFiles'),
        t('tradingSysPage.sendMarketDataToConnection'),
      ],
    },
    {
      label: t('tradingSysPage.tickData'),
      descriptions: [
        t('tradingSysPage.moreThanSixMonthsSamFile'),
        t('tradingSysPage.tickDataByPeriodBackup'),
        t('tradingSysPage.getTickDataByEachDayAndStock'),
        t('tradingSysPage.processStatusInquiry'),
      ],
    },
    {
      label: t('tradingSysPage.monitoringTickData'),
      descriptions: [
        t('tradingSysPage.sumAndInquiryDataInputOutput'),
        t('tradingSysPage.stockMasterClosePriceCurrent'),
        t('tradingSysPage.inquiryForMarketStatusByExchange'),
        t('tradingSysPage.sumAndInquiryMarketDataUsage'),
        t('tradingSysPage.sumAndInquiryQuantityDataByTime'),
        t('tradingSysPage.inquiryAndModificationMonitoringData'),
      ],
    },
  ];
  const accessServers = [
    {
      label: t('tradingSysPage.investmentInformation'),
      descriptions: [
        t('tradingSysPage.supportsRealTimeAndDelayedData'),
        t('tradingSysPage.separatesRealTimeDataAndInquiry'),
        t('tradingSysPage.providesChartDataTickMinute'),
        t('tradingSysPage.allowsSharedMemoryDataInquiry'),
        t('tradingSysPage.implementsExchangeSpecificBackup'),
      ],
    },
    {
      label: t('tradingSysPage.accessManagement'),
      descriptions: [
        t('tradingSysPage.sendMessagesToSpecificAllUser'),
        t('tradingSysPage.sendMessagesWhenEventOccurs'),
        t('tradingSysPage.inquiryUserInformationAndStatistic'),
        t('tradingSysPage.denyAccessOfSpecificAllUser'),
        t('tradingSysPage.accessEventLogSaveBackup'),
      ],
    },
    {
      label: t('tradingSysPage.data'),
      descriptions: [t('tradingSysPage.historicalDataSaveInquiryDbms')],
    },
  ];
  const externalSystems = [
    {
      label: t('tradingSysPage.mainComputation'),
      descriptions: [
        t('tradingSysPage.provideCurrentMarketDataByCertain'),
        t('tradingSysPage.provideClosedPriceDataAfterMarket'),
        t('tradingSysPage.communicationUsingTmaxClientLib'),
        t('tradingSysPage.inquiryLogInInformation'),
        t('tradingSysPage.inquiryOfExchangeAuthorityByUsers'),
        t('tradingSysPage.inquiryOfAccountInformation'),
      ],
    },
    {
      label: t('tradingSysPage.dataProvider'),
      descriptions: [
        t('tradingSysPage.dataProviderMarketDataFeed'),
        t('tradingSysPage.dateProviderForeignCorporation'),
      ],
    },
    {
      label: t('tradingSysPage.accessServer'),
      descriptions: [t('tradingSysPage.developmentOfTrProcessProgram')],
    },
  ];

  const genCards = (data: typeof fep) => {
    return (
      <div className="flex flex-col xs:gap-3 sm:!gap-6">
        <div className="tab-item grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 xs:gap-3 sm:!gap-6  items-stretch">
          {data.map((item, itemindex) => (
            <div
              className="xs:p-4 sm:!p-5  rounded-lg bg-grey-200 border border-solid border-grey-100 flex flex-col gap-2"
              key={itemindex}
            >
              <div className="flex flex-row gap-3">
                <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                  <HeroIcons.GitCompare size={16} />
                </div>
                <h6 className="xs:text-[1rem] sm:!text-[1.125rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-grey-900 font-medium">
                  {item.label}
                </h6>
              </div>
              <ul className="list-disc pl-5 flex flex-col">
                {item.descriptions.map((desc, descIndex) => (
                  <li
                    className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.125rem] sm:!leading-[1.5rem] text-grey-600 font-normal"
                    key={descIndex}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  useGSAP(() => {
    const tabItems = document.querySelectorAll('.tab-item');
    const img = document.querySelector('.img-wrap');
    gsap.fromTo(
      tabItems,
      { opacity: 0, scale: 0.6, duration: 0.2, ease: 'power1.inOut' },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power1.inOut', stagger: 0.15 },
    );
    gsap.fromTo(
      img,
      { opacity: 0, duration: 0.2, scale: 0.6, ease: 'power1.inOut' },
      {
        opacity: 1,
        duration: 0.2,
        scale: 1,
        ease: 'power1.inOut',
      },
    );
  }, [actTab]);

  return (
    <section id="marketData" className="marketData-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('tradingSysPage.marketDataAndInvestmentInformation'),
            }}
          />
        </div>
        <div className="flex xs:flex-col xs:mb-4 sm:!mb-[4rem] xs:mt-6 sm:!mt-[4.5rem]">
          <TabStyle value={actTab} onChange={_onChangeTab}>
            <Tab value="market-data" label={t('tradingSysPage.marketDataFlow')} />
            <Tab value="fep" label={t('tradingSysPage.fep')} />
            <Tab value="access-servers" label={t('tradingSysPage.accessDBServers')} />
            <Tab value="external-system" label={t('tradingSysPage.externalSystem')} />
          </TabStyle>
        </div>
        {actTab === 'market-data' && (
          <div className="w-full tab-item">
            <img
              className="w-full h-auto object-cover mx-auto"
              src="/images/pages/trading-sys/en/trading-sys-glb-eqp-trade-mkt-data-img.jpg"
            />
          </div>
        )}
        {actTab === 'fep' && genCards(fep)}
        {actTab === 'access-servers' && genCards(accessServers)}
        {actTab === 'external-system' && genCards(externalSystems)}
      </MainWrapper>
    </section>
  );
};

const TabStyle = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-scroller': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.MuiTabs-indicator': {
    display: 'none',
  },
  '.MuiTabs-flexContainer': {
    gap: '0 0.5rem',
    background: theme.palette.grey[50],
    padding: '0.25rem',
    borderRadius: '0.25rem',
    overflowX: 'auto',
  },
  button: {
    minWidth: '100px',
    borderRadius: '0.5rem',
    background: theme.palette.grey[50],
    color: theme.palette.grey[400],
    textTransform: 'initial',
    transition: 'all .25s',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
    minHeight: '2.25rem',
    height: '2.25rem',
    '&.Mui-selected': {
      color: theme.palette.grey[900],
      background: theme.palette.common.white,
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [`@media (min-width: 768px) and (max-width: 860px)`]: {
    marginTop: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    button: {
      minWidth: '100px',
    },
  },
  [`@media (min-width: 320px) and (max-width: 375px)`]: {
    button: {
      minWidth: '80px',
    },
  },
}));

export default MarketDataSection;
