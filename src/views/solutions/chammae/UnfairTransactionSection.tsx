'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const UnfairTransactionSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      label: t('solutionsPage.oppositeQuote'),
    },
    {
      label: t('solutionsPage.lowContractRate'),
    },
    {
      label: t('solutionsPage.crossTrading'),
    },
    {
      label: t('solutionsPage.sizeRebalancing'),
    },
    {
      label: t('solutionsPage.matchedTrading'),
    },
    {
      label: t('solutionsPage.orderViolation'),
    },
    {
      label: t('solutionsPage.excessiveCorrectionCancellationOrder'),
    },
    {
      label: t('solutionsPage.suspicionOfMarketDataManipulation'),
    },
  ];

  return (
    <section
      id="unfairTransaction"
      className="unfairTransaction-section bg-white sm:!py-[60px]  xs:py-[30px] "
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('solutionsPage.unfairTransactionMonitoringTarget'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 xs:gap-[1.5rem] sm:gap-[3rem] lg:!gap-[6rem] mt-12 items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full h-auo mx-auto rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              src="/images/pages/solutions/en/solutions-chammae-unfair-transaction-img-1.jpg"
            />
          </div>
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 lg:!grid-cols-2 w-full xs:gap-4 sm:!gap-[1.5rem]">
            {data.map((feature, index) => (
              <div
                key={index}
                className={`w-full flex items-center justify-start gap-4 py-3 border-b border-b-solid border-grey-400 ${index <= 5 ? 'col-span-1' : 'xs:col-span-1 lg:!col-span-2'}`}
              >
                <HeroIcons.Checked size={16} pathProps={{ className: 'stroke-nd-600' }} />
                <p className="text-grey-900 xs:text-[1rem] sm:!text-[1.25rem] font-medium leading-[1.75rem] flex flex-row gap-4">
                  {feature?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default UnfairTransactionSection;
