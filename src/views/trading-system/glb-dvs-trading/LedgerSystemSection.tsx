'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';
import ImgCard from '../contents/ImgCard';
import { HeroIcons } from '@/@core/components/icons/heroIcons';

type Props = {};

const LedgerSystemSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      label: t('tradingSysPage.marginAndRiskManagement'),
      descriptions: [
        t('tradingSysPage.portfolioMarginTotalRiskMargin'),
        t('tradingSysPage.riskArrayFileReceptionAndMonitoring'),
        t('tradingSysPage.settlementPriceFutureMarginFnd'),
        t('tradingSysPage.variationalMarginRealtimeRiskAmount'),
        t('tradingSysPage.fifoNettingAccountHedgeAccount'),
        t('tradingSysPage.postMarginMarginCallRespiteAccount'),
      ],
    },
    {
      label: t('tradingSysPage.tradingAndOrderManagement'),
      descriptions: [
        t('tradingSysPage.cmeSeoulHubDmaIsv'),
        t('tradingSysPage.calendarSpreadOrders'),
        t('tradingSysPage.algorithmOrdersOcoIfdone'),
        t('tradingSysPage.preventMistakenOrders'),
        t('tradingSysPage.serverToServerApiClientApi'),
        t('tradingSysPage.accountManagementReportingAndTaxes'),
      ],
    },
    {
      label: t('tradingSysPage.accountManagementReportingTaxes'),
      descriptions: [
        t('tradingSysPage.realTimeMarketDataByUserIdAndExchange'),
        t('tradingSysPage.corporationCustomerSettlementReporting'),
        t('tradingSysPage.incomeStatementPerAccountRms'),
        t('tradingSysPage.multipleFcmByProductAccount'),
        t('tradingSysPage.automaticCurrencyExchange'),
        t('tradingSysPage.capitalGainsTaxCalculation'),
      ],
    },
    {
      label: t('tradingSysPage.optionsPhysicalDeliverySimulationSystem'),
      descriptions: [
        t('tradingSysPage.supportsPremiumAndFutureOptions'),
        t('tradingSysPage.handlesPhysicalDelivery'),
        t('tradingSysPage.includesSimulatedInvestmentSystem'),
      ],
    },
  ];

  return (
    <section
      id="ledgerSystem"
      className="ledgerSystem-section bg-white sm:!py-[60px]  xs:py-[30px] "
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('tradingSysPage.ledgerSystem'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 xs:gap-3 sm:!gap-6  xs:mt-[1.5rem] sm:!mt-[3.5rem] items-stretch">
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
      </MainWrapper>
    </section>
  );
};

export default LedgerSystemSection;
