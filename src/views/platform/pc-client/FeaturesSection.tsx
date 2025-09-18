'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const FeaturesSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const features = [
    {
      label: t('platformPage.formDesigner'),
      descriptions: [t('platformPage.screenDevelopmentProgramDescription')],
    },
    {
      label: t('platformPage.versionManager'),
      descriptions: [t('platformPage.versionAdministratorDescription')],
    },
    {
      label: t('platformPage.channelManager'),
      descriptions: [t('platformPage.channelAdministratorDescription')],
    },
    {
      label: t('platformPage.exclusiveApiPcClient'),
      descriptions: [t('platformPage.automaticChangeDescription')],
    },
  ];

  return (
    <section id="features" className="summary-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('platformPage.features'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1  lg:!grid-cols-3 xs:gap-6 lg:!gap-8 mt-12 items-center">
          <div className="flex  flex-col gap-[1.5rem] xs:items-start lg:!items-end xs:justify-start lg:!justify-end">
            {features.map(
              (summary, index) =>
                index <= 1 && (
                  <div key={index} className="flex xs:flex-row-reverse lg:!flex-row gap-4">
                    <div className="flex flex-col gap-2 xs:text-left lg:!text-right">
                      <h6 className="text-grey-900 text-[1.25rem] font-medium leading-[1.75rem] ">
                        {summary?.label}
                      </h6>
                      <div className="space-y-2 xs:text-left lg:!text-right">
                        {summary.descriptions.map((description, descIndex) => (
                          <p
                            key={descIndex}
                            className="text-grey-600 text-[1rem] leading-[1.5rem] font-normal "
                          >
                            {description}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <HeroIcons.Checked size={16} />
                    </div>
                  </div>
                ),
            )}
          </div>
          <div className="xs:min-w-full">
            <img
              className="w-full h-auto mx-auto"
              src="/images/pages/platform/en/platform-summary-img-1.png"
            />
          </div>
          <div className="flex flex-col gap-[1.5rem] items-start justify-start">
            {features.map(
              (summary, index) =>
                index > 1 && (
                  <div key={index} className="flex flex-row items-start gap-4">
                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <HeroIcons.Checked size={16} />
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                      <h6 className="text-grey-900 text-[1.25rem] font-medium leading-[1.75rem] flex flex-row gap-4">
                        {summary?.label}
                      </h6>
                      <div className="space-y-2 text-left">
                        {summary.descriptions.map((description, descIndex) => (
                          <p
                            key={descIndex}
                            className="text-grey-600 text-[1rem] leading-[1.5rem] font-normal "
                          >
                            {description}
                          </p>
                        ))}
                      </div>
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
