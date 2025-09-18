'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const FunctionsSectrion = ({}: Props) => {
  const { t } = useTranslation('common');

  const functions = [
    {
      label: t('platformPage.storedAndForwardingQueuing'),
      descriptions: [
        t('platformPage.interChannelInterface'),
        t('platformPage.storedAndForwardingMessageProcessing'),
      ],
    },
    {
      label: t('platformPage.realtimeMessageQueuing'),
      descriptions: [
        t('platformPage.realTimeProcessOfMultiMarketData'),
        t('platformPage.realTimeInterfaceOfDistributedData'),
        t('platformPage.keyManagementMoreThan100000'),
        t('platformPage.32EventsPerKey'),
        t('platformPage.eventDrivenPushAndFull'),
      ],
    },
    {
      label: t('platformPage.transactionMessageQueuing'),
      descriptions: [
        t('platformPage.transactionMessageRouting'),
        t('platformPage.clientServerComputing'),
        t('platformPage.clusteringForTheTransaction'),
        t('platformPage.sourceManagement'),
        t('platformPage.advancedProgramTransaction'),
        t('platformPage.messageExchangeMessageQueue'),
      ],
    },
  ];

  return (
    <section id="functions" className="summary-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('platformPage.functions'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-3 xs:gap-x-6 sm:!gap-x-8 lg:gap-x-12 mt-12 xs:py-[1.5rem] sm:!py-[3.5rem] xs:px-[1.5rem] sm:!px-[4.75rem] bg-grey-200 border border-solid border-grey-100 rounded-[0.5rem] xs:gap-y-6 sm:!gap-y-0">
          <div className="xs:col-span-1 sm:!col-span-3 flex xs:flex-col-reverse  sm:!flex-col xs:items-center sm:!items-center xs:justify-center sm:!justify-center">
            <ul className="flex flex-col text-center items-center">
              {functions[0].descriptions.map((func, index) => (
                <li className="w-fit" key={index}>
                  <div className="text-center">
                    <p className="text-grey-600 text-[1.125rem] leading-[1.75rem] font-normal ">
                      {func}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <h6 className="text-grey-900 text-[1.125rem] font-medium leading-[1.75rem] ">
              {functions[0]?.label}
            </h6>
          </div>

          <div className="flex  flex-col xs:items-center sm:!items-end xs:justify-center sm:!justify-end">
            <h6 className="text-grey-900 text-[1.125rem] font-medium leading-[1.75rem] ">
              {functions[1]?.label}
            </h6>
            <ul className="flex flex-col xs:text-center sm:!text-right xs:items-center sm:!items-end list-disc pl-6">
              {functions[1].descriptions.map((func, index) => (
                <li className="w-fit" key={index}>
                  <div className="xs:text-center sm:!text-right">
                    <p className="text-grey-600 text-[1.125rem] leading-[1.75rem] font-normal ">
                      {func}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <img
              className="w-auto h-full mx-auto"
              src="/images/pages/platform/en/platform-functions-img-1.png"
            />
          </div>

          <div className="flex flex-col xs:items-center sm:!items-start xs:justify-center sm:!justify-end">
            <h6 className="text-grey-900 text-[1.125rem] font-medium leading-[1.75rem] ">
              {functions[2]?.label}
            </h6>
            <ul className="flex flex-col xs:text-center sm:!text-left  xs:items-center sm:!items-start list-disc pl-6">
              {functions[2].descriptions.map((func, index) => (
                <li key={index} className="w-fit">
                  <div className="xs:text-center sm:!text-left">
                    <p className="text-grey-600 text-[1.125rem] leading-[1.75rem] font-normal ">
                      {func}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default FunctionsSectrion;
