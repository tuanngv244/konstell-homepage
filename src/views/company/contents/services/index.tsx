'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useDevice } from '@/@core/hooks/useDevice';
import type SplideCore from '@splidejs/splide';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';

type Props = {};

const ServiceSection = ({}: Props) => {
  const { t } = useTranslation('common');
  const slideRef = useRef<SplideCore | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const device = useDevice();

  const services = [
    {
      label: t('companyPage.financialSolution'),
      description: t('companyPage.provideVariousSolutionsRelatedToHtsMts'),
      icon: HeroIcons.Chart,
    },
    {
      label: t('companyPage.financialSiAndEtc'),
      description: t('companyPage.supportsEstablishmentOfFinancialTransactionSystem'),
      icon: HeroIcons.ChartPie,
    },
    {
      label: t('companyPage.smsMessage'),
      description: t('companyPage.establishesStableQuickAndMassiveMessageDistributionSystem'),
      icon: HeroIcons.Message,
    },
    {
      label: t('companyPage.dataService'),
      description: t(
        'companyPage.providesEnglishVersionOfCorporationsInformationListedOnKoreanExchange',
      ),
      icon: HeroIcons.FileChart,
    },
  ];

  return (
    <section className="services-section bg-grey-200 sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-start justify-start max-w-[1128px] mx-auto xs:mb-[1.5rem] sm:!mb-[3.5rem]">
          <p className="text-primary-500 xs:text-[1.125rem] sm:!text-[1.5rem] leading-[2rem] font-normal mb-1">
            {t('companyPage.services')}
          </p>
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('companyPage.transformingYourFinancialLandscape'),
            }}
          />
        </div>
        <div className="flex xs:flex-col sm:!flex-row items-stretch border-t border-[#cbd5e1] border-solid">
          <div className="flex-1 xs:py-[1.5rem] sm:!py-[3rem] xs:px-[1.5rem] sm:!px-[2.5rem]  border-r border-[#cbd5e1] border-solid overflow-hidden ">
            <div className="overflow-hidden rounded-2xl">
              <img
                className="w-auto h-full hover:scale-110 transition-transform duration-300 ease-in-out"
                src="/images/pages/company/service-section-img-1.jpg"
              />
            </div>
          </div>
          <div className="flex-[2] xs:py-[1.5rem] sm:!py-[3rem] xs:px-[1.5rem] sm:!px-[2.5rem] grid xs:grid-cols-1 sm:!grid-cols-2 xs:gap-4 sm:!gap-[3rem]">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex flex-col items-start justify-start  ">
                  <Icon size={40} />
                  <h4 className="mt-[0.75rem] text-[1.25rem] leading-[1.75rem] font-medium text-grey-900">
                    {service.label}
                  </h4>
                  <p className="text-[1rem] leading-[1.5rem] text-grey-600 font-normal">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default ServiceSection;

//  <div className="flex-1 overflow-hidden rounded-xl">
//         <img
//           className="w-full h-auo mx-auto rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
//           src="/images/pages/platform/platform-ui-control-img-1.jpg"
//           alt="Platform UI Control"
//         />
//       </div>
