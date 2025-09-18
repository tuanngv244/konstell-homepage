'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const FeaturesSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const features = [
    {
      label: t('solutionsPage.unixInstall'),
      descriptions: [t('solutionsPage.ableToCalculateTheRealTimeInter')],
      icon: HeroIcons.Install,
    },
    {
      label: t('solutionsPage.realTimeCalculation'),
      descriptions: [t('solutionsPage.totalRiskMarginCalculationToPrevent')],
      icon: HeroIcons.Calculation,
    },
    {
      label: t('solutionsPage.totalRiskMarginCalculation'),
      descriptions: [t('solutionsPage.toPreventTheRiskDueToExcessive')],
      icon: HeroIcons.GitCompare,
    },
    {
      label: t('solutionsPage.dynamicParamChange'),
      descriptions: [t('solutionsPage.responseToParameterFileChangeBy')],
      icon: HeroIcons.MonitorCheck,
    },
    {
      label: t('solutionsPage.oneCallPortfolio'),
      descriptions: [t('solutionsPage.marginCalculationByPortfolioInput')],
      icon: HeroIcons.PhoneOutGoing,
    },
    {
      label: t('solutionsPage.combinedCommodityCurrency'),
      descriptions: [t('solutionsPage.marginByEachCombinedCommodity')],
      icon: HeroIcons.BankNote,
    },
    {
      label: t('solutionsPage.addExchange'),
      descriptions: [t('solutionsPage.addNewExchangeBySetting')],
      icon: HeroIcons.Settings,
    },
    {
      label: t('solutionsPage.settlementPriceLedger'),
      descriptions: [t('solutionsPage.automaticReflectionToSettlement')],
      icon: HeroIcons.GitCompare,
    },
    {
      label: t('solutionsPage.marginLedger'),
      descriptions: [t('solutionsPage.automaticReflectionToFutureMargin')],
      icon: HeroIcons.GitCompare,
    },
  ];

  return (
    <section id="summary" className="summary-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('platformPage.summary'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-2 xs:gap-4 sm:!gap-6 xs:mt-6 sm:!mt-[3.5rem] xs:max-w-full sm:!max-w-full lg:!max-w-[calc(100%_-_50%)] mx-auto">
          {features.map(
            (feature, index) =>
              index <= 1 && (
                <div
                  className="flex flex-col py-5 px-4 bg-gray-100 border border-solid border-grey-100 rounded-lg"
                  key={index}
                >
                  <div className="flex flex-row gap-3">
                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <feature.icon size={16} />
                    </div>
                    <h6 className="text-grey-900 text-[1.125rem] leading-[1.75rem] font-medium">
                      {feature?.label}
                    </h6>
                  </div>
                  <ul className="flex flex-col list-disc pl-4 ml-2 mt-1">
                    {feature.descriptions.map((description, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-grey-600 text-[1rem] leading-[1.5rem] font-normal"
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
          )}
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 xs:gap-4 sm:!gap-6 xs:mt-4 sm:!mt-6  xs:max-w-full sm:!max-w-full lg:!max-w-[calc(100%_-_25%)] mx-auto">
          {features.map(
            (feature, index) =>
              index > 1 &&
              index <= 4 && (
                <div
                  className="flex flex-col py-5 px-4 bg-gray-100 border border-solid border-grey-100 rounded-lg"
                  key={index}
                >
                  <div className="flex flex-row gap-3">
                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <feature.icon size={16} />
                    </div>
                    <h6 className="text-grey-900 text-[1.125rem] leading-[1.75rem] font-medium">
                      {feature?.label}
                    </h6>
                  </div>
                  <ul className="flex flex-col list-disc pl-4 ml-2 mt-1">
                    {feature.descriptions.map((description, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-grey-600 text-[1rem] leading-[1.5rem] font-normal"
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
          )}
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 xs:gap-4 sm:!gap-6 xs:mt-4 sm:!mt-6 ">
          {features.map(
            (feature, index) =>
              index > 4 && (
                <div
                  className="flex flex-col py-5 px-4 bg-gray-100 border border-solid border-grey-100 rounded-lg"
                  key={index}
                >
                  <div className="flex flex-row gap-3">
                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <feature.icon size={16} />
                    </div>
                    <h6 className="text-grey-900 text-[1.125rem] leading-[1.75rem] font-medium">
                      {feature?.label}
                    </h6>
                  </div>
                  <ul className="flex flex-col list-disc pl-4 ml-2 mt-1">
                    {feature.descriptions.map((description, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-grey-600 text-[1rem] leading-[1.5rem] font-normal"
                      >
                        {description}
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

export default FeaturesSection;
