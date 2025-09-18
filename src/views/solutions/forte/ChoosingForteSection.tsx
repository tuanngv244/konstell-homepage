'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const ChoosingForteSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      label: t('solutionsPage.speedPlusIntelligence'),
      descriptions: [t('solutionsPage.advancedAlgosBackedByMillisecond')],
    },
    {
      label: t('solutionsPage.discretionPlusControl'),
      descriptions: [t('solutionsPage.minimizeMarketImpactWhileStaying')],
    },
    {
      label: t('solutionsPage.scalability'),
      descriptions: [t('solutionsPage.builtForInstitutionalWorkloadsAcross')],
    },
    {
      label: t('solutionsPage.customization'),
      descriptions: [t('solutionsPage.deployTailoredStrategiesThatAlign')],
    },
  ];

  return (
    <section
      id="choosingForte"
      className="choosingForte-section bg-white sm:!py-[60px]  xs:py-[30px] "
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('solutionsPage.choosingForte'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 xs:gap-[1.5rem] sm:gap-[3rem] lg:!gap-[6rem] mt-12 items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full h-auo mx-auto rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              src="/images/pages/solutions/en/solutions-prima-choosing-f1win-img.jpg"
            />
          </div>
          <div className="flex flex-col gap-[1.5rem] items-start justify-start">
            {data.map((feature, index) => (
              <div key={index} className="flex flex-row items-start gap-4">
                <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                  <HeroIcons.Checked size={16} />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <h6 className="text-grey-900 text-[1.25rem] font-medium leading-[1.75rem] flex flex-row gap-4">
                    {feature?.label}
                  </h6>
                  <div className="space-y-2 text-left">
                    {feature.descriptions.map((description, descIndex) => (
                      <p
                        key={descIndex}
                        className="text-grey-600 text-[1rem] leading-[1.5rem] font-normal "
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default ChoosingForteSection;
