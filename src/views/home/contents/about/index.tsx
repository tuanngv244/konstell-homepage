'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {};

const AboutSection = ({ }: Props) => {
  const { t } = useTranslation('common');

  return (
    <section id="about" className="about-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[1128px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('homePage.winwaySystemCoACapitalMarketSoftwareCompany'),
            }}
          />

          <p className="section-desc mt-[0.5rem]">
            {t('homePage.winwayAsASoftwareDevelopmentCompany')}
          </p>
          <Link href="/company">
            <Button
              className="rounded-tr-md shadow-none !mt-[2rem] w-fit-content mx-auto text-[1rem]"
              variant="contained"
            >
              {t('button.aboutCompany')}
            </Button></Link>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:grid-rows-2 xs:rounded-none  sm:!rounded-2xl overflow-hidden xs:mt-[2rem] md:!mt-[5rem] bg-gray-50 md:gap-0">
          <div className="overflow-hidden w-auto h-full ">
            <img
              className="w-full h-full object-cover"
              src="/images/pages/home/about-section-img-1.jpg"
              alt="Financial Solutions"
            />
          </div>
          <div className="flex flex-col items-start justify-end sm:p-[1rem] md:p-[2.5rem]">
            <h6 className="text-nd-600 xs:text-[1.125rem] sm:!text-[2rem] xs:leading-[1.75rem] sm:!leading-[2.5rem] font-medium xs:mb-0 sm:!xs:mb-0 sm:!mb-4  sm:!mt-0 xs:mt-4 ">
              {t('homePage.dataService')}
            </h6>
            <p className="text-gray-800 xs:text-[1rem] sm:!text-[1.125rem] leading-[1.75rem] font-normal">
              {t('homePage.weProvideEndToEndTradingAndFinancialITSolutions')}
            </p>
          </div>
          <div className="overflow-hidden w-auto h-full ">
            <img
              className="w-full h-full object-cover"
              src="/images/pages/home/about-section-img-3.png"
              alt="Financial Solutions"
            />
          </div>
          <div className="flex flex-col items-end justify-end xs:p-[1rem] sm:p-[1rem] md:p-[2.5rem]">
            <h6 className="text-nd-600 xs:text-[1.125rem] sm:!text-[2rem] xs:leading-[1.75rem] sm:!leading-[2.5rem] font-medium xs:mb-0 sm:!xs:mb-0 sm:!mb-4 xs:mt-4 sm:!mt-0">
              {t('homePage.financialSolutionsAndSystemIntegration')}
            </h6>
            <p className="text-gray-800 xs:text-[1rem] sm:!text-[1.125rem] leading-[1.75rem] font-normal">
              {t('homePage.weProvideEndToEndTradingAndFinancialITSolutions')}
            </p>
          </div>
          <div className="overflow-hidden w-auto h-full ">
            <img
              className="w-full h-full object-cover"
              src="/images/pages/home/about-section-img-2.png"
              alt="Financial Solutions"
            />
          </div>
          <div className="flex flex-col items-end justify-end xs:p-[1rem] sm:p-[1rem] md:p-[2.5rem]">
            <h6 className="text-nd-600 xs:text-[1.125rem] sm:!text-[2rem] xs:leading-[1.75rem] sm:!leading-[2.5rem] font-medium xs:mb-0 sm:!xs:mb-0 sm:!mb-4  xs:mt-4 sm:!mt-0">
              {t('homePage.financialSolutionsAndSystemIntegration')}
            </h6>
            <p className="text-gray-800 xs:text-[1rem] sm:!text-[1.125rem] leading-[1.75rem] font-normal">
              {t('homePage.weProvideEndToEndTradingAndFinancialITSolutions')}
            </p>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default AboutSection;
