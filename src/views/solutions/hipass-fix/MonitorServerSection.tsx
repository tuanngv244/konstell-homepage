'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const MonitorServerSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      label: t('solutionsPage.faultDetectionAndAlerts'),
      descriptions: [
        t('solutionsPage.detectsServerAndInterfaceIssues'),
        t('solutionsPage.autoRestartsTerminatedProcesses'),
      ],
    },
    {
      label: t('solutionsPage.realTimeAlarmMonitoring'),
      descriptions: [t('solutionsPage.continuouslyScansFailureTables')],
    },
    {
      label: t('solutionsPage.dailyTerminalAccessStatus'),
      descriptions: [t('solutionsPage.batchProcessingAndConnectionStatus')],
    },
    {
      label: t('solutionsPage.serverResourceMonitoring'),
      descriptions: [t('solutionsPage.realTimeUpdatesOfCpuMemoryDisk')],
    },
  ];

  return (
    <section
      id="monitoringServer"
      className="monitoringServer-section bg-white sm:!py-[60px]  xs:py-[30px] "
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('solutionsPage.monitoringServerCapabilities'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4 xs:gap-4 sm:!gap-6 xs:mt-6 sm:!mt-[3.5rem]">
          {data.map((summary, index) => (
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
          ))}
        </div>
      </MainWrapper>
    </section>
  );
};

export default MonitorServerSection;
