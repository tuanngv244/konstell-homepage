'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const FunctionsSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const functions = [
    {
      label: t('platformPage.convenientUserEnvironment'),
      icon: HeroIcons.User,
      descriptions: [
        t('platformPage.mdiEnvironmentDockingToolBar'),
        t('platformPage.hotKeyUsersMenu'),
        t('platformPage.usersConnectedScreenLayout'),
        t('platformPage.supportFloatingIndependentScreen'),
        t('platformPage.supportTheme'),
      ],
    },
    {
      label: t('platformPage.developmentConvenience'),
      icon: HeroIcons.MonitorCog,
      descriptions: [
        t('platformPage.screenDevelopmentBasedOnWYSIWYG'),
        t('platformPage.immediateTestAtDevelopmentScreen'),
        t('platformPage.variousControlContainerData'),
        t('platformPage.svnConnectionInDevelopmentEnvironment'),
        t('platformPage.supportVariousTemplate'),
      ],
    },
    {
      label: t('platformPage.variousDevelopmentTechnology'),
      icon: HeroIcons.ListChecks,
      descriptions: [
        t('platformPage.mdiEnvironmentDockingToolBarTech'),
        t('platformPage.hotKeyUsersMenuTech'),
        t('platformPage.usersConnectedScreenLayoutTech'),
        t('platformPage.supportFloatingIndependentScreenTech'),
        t('platformPage.supportThemeTech'),
      ],
    },
    {
      label: t('platformPage.fastDataProcessSpeed'),
      icon: HeroIcons.FastForward,
      descriptions: [
        t('platformPage.optimizingProcessSpeedFromArchitecture'),
        t('platformPage.massiveDataProcessingCapability'),
        t('platformPage.fastProcessingOfRealTimeData'),
        t('platformPage.massiveExcelExport'),
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
        <div className="flex xs:flex-col lg:!flex-row xs:gap-8 lg:!gap-16 items-center mt-12">
          <div className="flex-1 overflow-hidden rounded-xl">
            <img
              className="w-full h-auo mx-auto rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              src="/images/pages/platform/en/platform-ui-control-img-1.jpg"
              alt="Platform UI Control"
            />
          </div>

          <div className="flex-1">
            {functions.map((func, index) => (
              <div
                key={index}
                className="flex flex-col py-3 border-b last:border-b-0 border-solid border-b-gray-200"
              >
                <div className="flex items-center gap-3 mb-1">
                  <func.icon />
                  <h4 className="text-[1.25rem] leading-[1.75rem] font-medium text-grey-900">
                    {func.label}
                  </h4>
                </div>
                <ul className="flex flex-col  pl-6 ml-6 list-disc">
                  {func.descriptions.map((description, descIndex) => (
                    <li key={descIndex} className="text-gray-700 text-base leading-6 font-normal">
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default FunctionsSection;
