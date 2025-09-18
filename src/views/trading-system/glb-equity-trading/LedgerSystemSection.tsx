'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const LedgerSystemSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      label: t('tradingSysPage.orderPayment'),
      children: [
        {
          title: t('tradingSysPage.orderAndTradingFunctions'),
          descriptions: [
            t('tradingSysPage.liveOnlineOrderEmergencyOrder'),
            t('tradingSysPage.fractionalShareTrading'),
            t('tradingSysPage.consolidatedMarginWonAndDouble'),
            t('tradingSysPage.realTimeOrderContractTransaction'),
            t('tradingSysPage.balanceEvaluation'),
            t('tradingSysPage.tradingErrorCorrection'),
            t('tradingSysPage.tradeReportAndOtherInternal'),
          ],
        },
        {
          title: t('tradingSysPage.paymentAndSettlementManagement'),
          descriptions: [
            t('tradingSysPage.commissionAndTaxManagement'),
            t('tradingSysPage.globalBrokerManagement'),
            t('tradingSysPage.capitalGainsTaxCalculation'),
            t('tradingSysPage.paymentProcessing'),
            t('tradingSysPage.paymentInformationReceptionReconciliation'),
            t('tradingSysPage.depositoryPaymentInformationTransmission'),
            t('tradingSysPage.transactionDataTransmission'),
          ],
        },
      ],
    },

    //
    {
      label: t('tradingSysPage.proprietaryTrading'),
      descriptions: [
        t('tradingSysPage.orderProductPaymentCloseSettlement'),
        t('tradingSysPage.incomingAndOutgoingProcessingBook'),
        t('tradingSysPage.transactionLimitAndProfitLoss'),
      ],
    },
    {
      label: t('tradingSysPage.stockCommonFunctions'),
      descriptions: [
        t('tradingSysPage.stockGeneralInformationManagement'),
        t('tradingSysPage.holidayAndMarketOperationInformation'),
        t('tradingSysPage.exchangeServiceFeeManagement'),
        t('tradingSysPage.fractionalShareManagement'),
      ],
    },
    {
      label: t('tradingSysPage.shareholderRights'),
      descriptions: [
        t('tradingSysPage.shareholderRightsInformationManagement'),
        t('tradingSysPage.shareholderRightsProcessDateAssignment'),
        t('tradingSysPage.shareholderRightsRegistrationRightIssue'),
        t('tradingSysPage.shareholderRightsReport'),
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
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 xs:gap-3 sm:!gap-6  xs:mt-[1.5rem] sm:!mt-[3.5rem] items-stretch xs:p-4 sm:!p-[2rem] bg-grey-200 border border-solid border-grey-100 rounded-lg">
          <div className="xs:p-4 sm:!p-5 flex flex-col gap-2">
            <h6 className="xs:text-[1rem] sm:!text-[1.125rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-nd-600 font-medium">
              01. {data[0].label}
            </h6>
            <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.125rem] sm:!leading-[1.5rem] text-grey-900 font-medium">
              {data[0].children[0].title}
            </p>
            <ul className="list-disc pl-5 flex flex-col">
              {data[0].children[0].descriptions.map((desc, descIndex) => (
                <li
                  className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.125rem] sm:!leading-[1.5rem] text-grey-600 font-normal"
                  key={descIndex}
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="xs:p-4 sm:!p-5 flex flex-col gap-2">
            <h6 className="xs:text-[1rem] sm:!text-[1.125rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-nd-600 font-medium opacity-0 xs:hidden sm:!block">
              aa
            </h6>
            <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.125rem] sm:!leading-[1.5rem] text-grey-900 font-medium">
              {data[0].children[1].title}
            </p>
            <ul className="list-disc pl-5 flex flex-col">
              {data[0].children[1].descriptions.map((desc, descIndex) => (
                <li
                  className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.125rem] sm:!leading-[1.5rem] text-grey-600 font-normal"
                  key={descIndex}
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden w-auto h-full flex items-center justify-center ">
            <img
              className="w-full mx-auto h-auto object-cover"
              src="/images/pages/trading-sys/en/trading-sys-glb-eqp-trade-led-sys-img-1.png"
              alt="Ledger System"
            />
          </div>
          {data.map(
            (item, itemindex) =>
              itemindex > 0 && (
                <div
                  className="xs:p-4 sm:!p-5 rounded-xl bg-white shadow-[0_2px_30px_rgba(50,50,50,0.08)] flex flex-col gap-2"
                  key={itemindex}
                >
                  <div className="flex flex-row gap-3">
                    <h6 className="xs:text-[1rem] sm:!text-[1.125rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-nd-600 font-medium">
                      0{itemindex + 1}. {item.label}
                    </h6>
                  </div>
                  <ul className="list-disc pl-5 flex flex-col">
                    {item.descriptions.map((desc, descIndex) => (
                      <li
                        className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.125rem] sm:!leading-[1.5rem] text-grey-900 font-normal"
                        key={descIndex}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
          )}
        </div>
      </MainWrapper>
    </section>
  );
};

export default LedgerSystemSection;
