'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const FeaturesSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const cardClss =
    'rounded-xl xs:py-4 sm:!py-[1.75rem] xs:px-4 sm:!px-[1.5rem] bg-grey-200 border border-solid border-grey-100';

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
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 gap-[1rem] xs:mt-[2rem] sm:!mt-12 items-stretch">
          <div className={`xs:col-span-1 sm:!col-span-2 ${cardClss} `}>
            <h6 className="xs:text-[1rem] sm:!text-[1.125rem] xs:leading-[1.125rem] sm:!leading-[1.75rem] font-medium text-nd-600 xs:mb-4 sm:!mb-[1.25rem]">
              {t('solutionsPage.multiStrategyExecutionEngine')}
            </h6>
            <div className="flex flex-col xs:gap-4 sm:!gap-[2rem]">
              <div className="grid xs:grid-cols-1 sm:!grid-cols-2 xs:gap-3 sm:!gap-[1.25rem]">
                <div className="flex flex-col">
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.vwapVolumeWeightedAveragePrice')}
                  </p>
                  <p className="xs:text-[0.75rem] sm:!text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-normal text-grey-600">
                    {t('solutionsPage.executionOrdersUsingMethodInTimeSlices')}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.twapTimeWeightedAveragePrice')}
                  </p>
                  <p className="xs:text-[0.75rem] sm:!text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-normal text-grey-600">
                    {t('solutionsPage.spreadLargeOrdersEvenlyAcrossTime')}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.icebergOrders')}
                  </p>
                  <p className="xs:text-[0.75rem] sm:!text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-normal text-grey-600">
                    {t('solutionsPage.hideTrueOrderSizeByRevealingOnly')}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.adaptiveAndCustomAlgos')}
                  </p>
                  <p className="xs:text-[0.75rem] sm:!text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-normal text-grey-600">
                    {t('solutionsPage.supportForInTouchedParticipationRate')}
                  </p>
                </div>
              </div>
              <div>
                <img
                  className=" max-w-[550px] xs:w-full sm:!w-auto mx-auto xs:h-auto sm:!h-full"
                  src="/images/pages/solutions/en/solutions-forte-features-img-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={`xs:col-span-1 sm:!col-span-1 ${cardClss} `}>
            <h6 className="xs:text-[1rem] sm:!text-[1.125rem] xs:leading-[1.125rem] sm:!leading-[1.75rem] font-medium text-nd-600 xs:mb-4 sm:!mb-[1.25rem]">
              {t('solutionsPage.lowLatencyHighPrecisionExecution')}
            </h6>
            <div className="flex flex-col xs:gap-4 sm:!gap-[2rem]">
              <ul className="ml-2 pl-3 flex flex-col xs:gap-3 sm:!gap-[1.25rem] list-disc">
                <li>
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.builtOnAHighPerformanceMultiThreaded')}
                  </p>
                </li>
                <li>
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.optimizedForCoLocationEnvironments')}
                  </p>
                </li>
                <li>
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.microsecondLevelDecisioningAndResponse')}
                  </p>
                </li>
              </ul>
              <div>
                <img
                  className=" w-full mx-auto h-auto"
                  src="/images/pages/solutions/en/solutions-forte-features-img-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={`xs:col-span-1 sm:!col-span-1 ${cardClss} `}>
            <h6 className="xs:text-[1rem] sm:!text-[1.125rem] xs:leading-[1.125rem] sm:!leading-[1.75rem] font-medium text-nd-600 xs:mb-4 sm:!mb-[1.25rem]">
              {t('solutionsPage.modularAndExtensible')}
            </h6>
            <div className="flex flex-col xs:gap-4 sm:!gap-[2rem]">
              <ul className="ml-2 pl-3 flex flex-col xs:gap-3 sm:!gap-[1.25rem] list-disc">
                <li>
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.restAndFixApisForEasyIntegration')}
                  </p>
                </li>
                <li>
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.strategyCustomizationWithUserDefined')}
                  </p>
                </li>
                <li>
                  <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1rem] sm:!leading-[1.25rem] font-medium text-grey-900">
                    {t('solutionsPage.realTimeAnalyticsAndExecution')}
                  </p>
                </li>
              </ul>
              <div>
                <img
                  className=" w-full mx-auto h-auto"
                  src="/images/pages/solutions/en/solutions-forte-features-img-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default FeaturesSection;
