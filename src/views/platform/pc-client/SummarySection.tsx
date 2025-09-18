'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const SummarySection = ({}: Props) => {
  const { t } = useTranslation('common');

  const summaries = [
    {
      label: t('platformPage.totalUiSolution'),
      descriptions: [t('platformPage.cSConvinientUserFeature')],
    },
    {
      label: t('platformPage.gplGeneralPublicLicenseFree'),
      descriptions: [t('platformPage.noPublicSWUsage')],
    },
    {
      label: t('platformPage.noInstallationRequired'),
      descriptions: [t('platformPage.simpleCopyWithoutInstall')],
    },
    {
      label: t('platformPage.openArchitecture'),
      descriptions: [t('platformPage.connectionAvailableToThirdParty')],
    },
    {
      label: t('platformPage.noActiveXTechnology'),
      descriptions: [
        t('platformPage.decreasingUserDueToActiveX'),
        t('platformPage.ifNecessaryActiveXControl'),
      ],
    },
    {
      label: t('platformPage.noRegistry'),
      descriptions: [
        t('platformPage.limitingUsageWithHigherWindow'),
        t('platformPage.accessEspeciallyDeniable'),
      ],
    },
    {
      label: t('platformPage.noAdministrationRight'),
      descriptions: [t('platformPage.ableToRunWithoutAdministrator')],
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
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 xs:gap-4 sm:!gap-6 xs:mt-6 sm:!mt-[3.5rem]">
          {summaries.map(
            (summary, index) =>
              index <= 3 && (
                <div
                  className="flex flex-col py-5 px-4 bg-gray-100 border border-solid border-grey-100 rounded-lg"
                  key={index}
                >
                  <div className="flex flex-row gap-3">
                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <HeroIcons.GitCompare size={16} />
                    </div>
                    <h6 className="text-grey-900 text-[1.125rem] leading-[1.75rem] font-medium">
                      {summary?.label}
                    </h6>
                  </div>
                  <ul className="flex flex-col list-disc pl-4 ml-2 mt-1">
                    {summary.descriptions.map((description, descIndex) => (
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
          {summaries.map(
            (summary, index) =>
              index > 3 && (
                <div
                  className="flex flex-col py-5 px-4 bg-gray-100 border border-solid border-grey-100 rounded-lg"
                  key={index}
                >
                  <div className="flex flex-row gap-3">
                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <HeroIcons.GitCompare size={16} />
                    </div>
                    <h6 className="text-grey-900 text-[1.125rem] leading-[1.75rem] font-medium">
                      {summary?.label}
                    </h6>
                  </div>
                  <ul className="flex flex-col list-disc pl-4 ml-2 mt-1">
                    {summary.descriptions.map((description, descIndex) => (
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

export default SummarySection;
