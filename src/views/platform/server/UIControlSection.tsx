'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const UIControlSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const activityReports = [
    {
      label: t('platformPage.onlineSupportAvailable'),
      icon: HeroIcons.Phone,
    },
    {
      label: t('platformPage.settingsAndSystemConfiguration'),
      icon: HeroIcons.Fax,
    },
    {
      label: t('platformPage.programmingApiCallSubroutines'),
      icon: HeroIcons.EmailBox,
    },
    {
      label: t('platformPage.commandLanguage'),
      icon: HeroIcons.Location,
    },
  ];

  return (
    <section id="ui-control" className="summary-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('platformPage.uiControl'),
            }}
          />
        </div>
        <div className="flex xs:flex-col sm:!flex-row  items-center justify-between xs:gap-0 sm:!gap-6 xs:mt-6 sm:!mt-[3.5rem]">
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full h-auo mx-auto rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              src="/images/pages/platform/en/platform-ui-control-img-1.jpg"
            />
          </div>
          <div className="flex-1 flex xs:p-6 xs:pl-0 sm:!p-[100px] xs:!pr-[0] flex-col">
            <h6 className="text-grey-900 text-[1.25rem] font-medium leading-[1.75rem] xs:mb-4 sm:!mb-8">
              {t('platformPage.activityReport')}
            </h6>
            <ul className="flex flex-col">
              {activityReports.map((item, itemIndex) => {
                return (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-[1.25rem] xs:py-[0.5rem] sm:!py-[0.75rem]  border-b border-b-grey-100 border-solid"
                  >
                    <item.icon />
                    <div className="flex flex-col">
                      <p className="xs:text-[0.875rem] sm:!text-[1rem] leading-[1.5rem] font-normal text-grey-900">
                        {item.label}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex xs:flex-col-reverse sm:!flex-row  items-center justify-between xs:gap-0 sm:!gap-6">
          <div className="flex-1 flex xs:p-6 sm:!p-[100px] xs:!pl-[0] flex-col">
            <h6 className="text-grey-900 text-[1.25rem] font-medium leading-[1.75rem] xs:mb-4 sm:!mb-8">
              {t('platformPage.manual')}
            </h6>
            <ul className="flex flex-col">
              {activityReports.map((item, itemIndex) => {
                return (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-[1.25rem] xs:py-[0.5rem] sm:!py-[0.75rem]  border-b border-b-grey-100 border-solid"
                  >
                    <item.icon />
                    <div className="flex flex-col">
                      <p className="xs:text-[0.875rem] sm:!text-[1rem] leading-[1.5rem] font-normal text-grey-900">
                        {item.label}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full h-auo mx-auto rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              src="/images/pages/platform/en/platform-ui-control-img-2.jpg"
            />
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default UIControlSection;
