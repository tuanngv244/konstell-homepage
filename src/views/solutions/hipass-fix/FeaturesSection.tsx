'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { UltraHighDefinition } from 'mdi-material-ui';
import { useTranslation } from 'next-i18next';

type Props = {};

const FeaturesSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const features = [
    {
      label: t('solutionsPage.highPerformanceSessionManagement'),
      descriptions: [
        t('solutionsPage.nonBlockingInOutMessageProcessing'),
        t('solutionsPage.stableSessionConnections'),
        t('solutionsPage.supportsMultiSessionAndMultiVersion'),
      ],
    },
    {
      label: t('solutionsPage.flexibleInterface'),
      descriptions: [
        t('solutionsPage.builtInILink3FixConverter'),
        t('solutionsPage.enablesHeterogeneousSystemConnectivity'),
      ],
    },
    {
      label: t('solutionsPage.realTimeMonitoringAndControl'),
      descriptions: [
        t('solutionsPage.webBasedDashboardForIntuitive'),
        t('solutionsPage.realTimeServerStatusVisualization'),
      ],
    },
    {
      label: t('solutionsPage.transactionAndSequenceRecovery'),
      descriptions: [
        t('solutionsPage.monitorsProcessHealthAndAutomatically'),
        t('solutionsPage.autoResendRequestForRecovery'),
        t('solutionsPage.storedQueueSqForMessage'),
      ],
    },
    {
      label: t('solutionsPage.highSpeedDataProcessing'),
      descriptions: [
        t('solutionsPage.optimizedIpcMiddlewareWithMessaging'),
        t('solutionsPage.multiThreadedProcessingWithSeparation'),
        t('solutionsPage.transactionProcessingTpEngineFor'),
      ],
    },
  ];

  return (
    <section id="features" className="features-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('platformPage.features'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-3 xs:gap-6 sm:!gap-8 lg:gap-12 xs:mt-[2rem] sm:!mt-12 items-center">
          <div className="flex  flex-col gap-[1.5rem] xs:items-start lg:!items-end xs:justify-start lg:!justify-end">
            {features.map(
              (feature, index) =>
                index <= 2 && (
                  <div key={index} className="flex xs:flex-row-reverse lg:!flex-row gap-4">
                    <div className="flex flex-col gap-2 xs:text-left lg:!text-right">
                      <h6 className="text-grey-900 text-[1.25rem] font-medium leading-[1.75rem] ">
                        {feature?.label}
                      </h6>
                      <ul className="space-y-2 flex flex-col xs:text-center sm:!text-right xs:items-center sm:!items-end list-disc ">
                        {feature.descriptions.map((description, descIndex) => (
                          <li key={descIndex} className="w-fit">
                            <div className="xs:text-center sm:!text-right">
                              <p className="text-grey-600 text-[1rem]  leading-[1.5rem] font-normal ">
                                {description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <HeroIcons.Checked size={16} />
                    </div>
                  </div>
                ),
            )}
          </div>
          <div className="">
            <img
              className="w-full h-auo mx-auto"
              src="/images/pages/solutions/en/solutions-f1win-features-img-1.png"
            />
          </div>
          <div className="flex flex-col gap-[1.5rem] items-start justify-start">
            {features.map(
              (feature, index) =>
                index > 2 && (
                  <div key={index} className="flex flex-row items-start gap-4">
                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <HeroIcons.Checked size={16} />
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                      <h6 className="text-grey-900 text-[1.25rem] font-medium leading-[1.75rem] flex flex-row gap-4">
                        {feature?.label}
                      </h6>
                      <ul className="space-y-2 flex flex-col xs:text-center sm:!text-right xs:items-center sm:!items-start list-disc ">
                        {feature.descriptions.map((description, descIndex) => (
                          <li key={descIndex} className="w-fit">
                            <div className="xs:text-center sm:!text-left">
                              <p className="text-grey-600 text-[1rem]  leading-[1.5rem] font-normal ">
                                {description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default FeaturesSection;
