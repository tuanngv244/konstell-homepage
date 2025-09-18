'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const SysSpecificationsSection = ({}: Props) => {
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
      id="systemSpecifications"
      className="systemSpecifications-section bg-white sm:!py-[60px]  xs:py-[30px] "
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('solutionsPage.systemSpecifications'),
            }}
          />
        </div>
        <div className="table w-full">
          <div className="overflow-x-auto xs:w-[calc(100vw_-_2rem)] sm:!w-full bg-grey-200 p-[0.625rem] rounded-xl backdrop-blur-[50px] xs:mt-[1.5rem] sm:!mt-[3.5rem]">
            <table className="xs:w-[600px] sm:!w-full xs:pr-8 sm:!pr-0 border-collapse rounded-xl overflow-hidden bg-white">
              {/* Header */}
              <thead>
                <tr className="bg-[#7C6EF7] text-white">
                  <th className=" px-4 py-2 text-center text-[1rem] leading-[1.5rem] font-medium text-white w-[calc(100%_/_3)]">
                    {t('solutionsPage.category')}
                  </th>
                  <th className=" px-4 py-2  text-left text-[1rem] leading-[1.5rem] font-medium text-white w-[calc(100%_/_3)]">
                    {t('solutionsPage.specifications')}
                  </th>
                  <th className=" px-4 py-2  text-left text-[1rem] leading-[1.5rem] font-medium text-white  w-[calc(100%_/_3)]">
                    {t('solutionsPage.note')}
                  </th>
                </tr>
              </thead>
              {/* Body */}
              <tbody className="text-[1rem] leading-[1.5rem] font-normal text-grey-900">
                <tr className="bg-white border-b border-gray-200 border-solid">
                  <td className=" px-4 py-2">{t('solutionsPage.serverManagementSystem')}</td>
                  <td className=" px-4 py-2 flex items-center gap-2">
                    <img
                      src="/images/pages/solutions/en/sys-logo/linux.png"
                      className="w-[2rem] h-[2rem] rounded-full object-cover"
                    />
                    {t('solutionsPage.linux')}
                  </td>
                  <td className=" px-4 py-2"></td>
                </tr>
                <tr className="bg-white border-b border-gray-200 border-solid">
                  <td className=" px-4 py-2">{t('solutionsPage.middleware')}</td>
                  <td className=" px-4 py-2 flex items-center gap-2">
                    <img
                      src="/images/pages/solutions/en/sys-logo/my-mq.png"
                      className="w-[2rem] h-[2rem] rounded-full object-cover"
                    />
                    {t('solutionsPage.myMq')}
                  </td>
                  <td className=" px-4 py-2">{t('solutionsPage.winwaySolution')}</td>
                </tr>
                <tr className="bg-white border-b border-gray-200 border-solid">
                  <td className=" px-4 py-2">{t('solutionsPage.database')}</td>
                  <td className=" px-4 py-2 flex items-center gap-2">
                    <img
                      src="/images/pages/solutions/en/sys-logo/my-sql.png"
                      className="w-[2rem] h-[2rem] rounded-full object-cover"
                    />
                    {t('solutionsPage.mySql')}
                  </td>
                  <td className=" px-4 py-2">{t('solutionsPage.version80')}</td>
                </tr>
                <tr className="bg-white border-b border-gray-200 border-solid">
                  <td className=" px-4 py-2">{t('solutionsPage.pcClientPlatform')}</td>
                  <td className=" px-4 py-2 flex items-center gap-2">
                    <img
                      src="/images/pages/solutions/en/sys-logo/presto.png"
                      className="w-[2rem] h-[2rem] rounded-full object-cover"
                    />
                    {t('solutionsPage.presto')}
                  </td>
                  <td className=" px-4 py-2">{t('solutionsPage.winwaySolution')}</td>
                </tr>
                <tr className="bg-white border-b border-gray-200 border-solid">
                  <td className=" px-4 py-2">{t('solutionsPage.pcClientManagementSystem')}</td>
                  <td className=" px-4 py-2 flex items-center gap-2">
                    <img
                      src="/images/pages/solutions/en/sys-logo/win-7.png"
                      className="w-[2rem] h-[2rem] rounded-full object-cover"
                    />
                    {t('solutionsPage.windowsGreaterThan7')}
                  </td>
                  <td className=" px-4 py-2"></td>
                </tr>
                <tr>
                  <td className=" px-4 py-2">{t('solutionsPage.pcClientResolution')}</td>
                  <td className=" px-4 py-2 flex items-center gap-2">
                    <img
                      src="/images/pages/solutions/sys-logo/1920-1080.png"
                      className="w-[2rem] h-[2rem] rounded-full object-cover"
                    />
                    {t('solutionsPage.resolution1920x1080')}
                  </td>
                  <td className=" px-4 py-2">{t('solutionsPage.recommendation')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default SysSpecificationsSection;
