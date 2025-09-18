'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const ExchCoverageSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      id: 1,
      icon: '/images/pages/solutions/en/exch-coverage-logo/ASE.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 2,
      icon: '/images/pages/solutions/en/exch-coverage-logo/BMD.png',
      code: 'BMD',
      name: t('solutionsPage.bursaMalaysia'),
    },
    {
      id: 3,
      icon: '/images/pages/solutions/en/exch-coverage-logo/CDC.png',
      code: 'CDC',
      name: t('solutionsPage.canadianDerivatives'),
    },
    {
      id: 4,
      icon: '/images/pages/solutions/en/exch-coverage-logo/CFE.png',
      code: 'CFE',
      name: t('solutionsPage.chicagoBoardOptionsExchange'),
    },
    {
      id: 5,
      icon: '/images/pages/solutions/en/exch-coverage-logo/CME.png',
      code: 'CME',
      name: t('solutionsPage.chicagoMercantileExchange'),
    },
    {
      id: 6,
      icon: '/images/pages/solutions/en/exch-coverage-logo/EUREX.png',
      code: 'EUREX',
      name: t('solutionsPage.eurexExchange'),
    },
    {
      id: 7,
      icon: '/images/pages/solutions/en/exch-coverage-logo/HKEX.png',
      code: 'HKEX',
      name: t('solutionsPage.hongkongExchange'),
    },
    {
      id: 8,
      icon: '/images/pages/solutions/en/exch-coverage-logo/ice.png',
      code: 'ICE',
      name: t('solutionsPage.intercontinentalExchange'),
    },
    {
      id: 9,
      icon: '/images/pages/solutions/en/exch-coverage-logo/JCCH.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 10,
      icon: '/images/pages/solutions/en/exch-coverage-logo/JSC.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 11,
      icon: '/images/pages/solutions/en/exch-coverage-logo/KEL.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 12,
      icon: '/images/pages/solutions/en/exch-coverage-logo/ice.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 13,
      icon: '/images/pages/solutions/en/exch-coverage-logo/ice.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 14,
      icon: '/images/pages/solutions/en/exch-coverage-logo/ice.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 15,
      icon: '/images/pages/solutions/en/exch-coverage-logo/Euronext.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 16,
      icon: '/images/pages/solutions/en/exch-coverage-logo/MATIF.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 17,
      icon: '/images/pages/solutions/en/exch-coverage-logo/MGE.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 18,
      icon: '/images/pages/solutions/en/exch-coverage-logo/NFX.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 19,
      icon: '/images/pages/solutions/en/exch-coverage-logo/ice.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 20,
      icon: '/images/pages/solutions/en/exch-coverage-logo/NZX.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 21,
      icon: '/images/pages/solutions/en/exch-coverage-logo/OCX.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 22,
      icon: '/images/pages/solutions/en/exch-coverage-logo/SGX.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 23,
      icon: '/images/pages/solutions/en/exch-coverage-logo/TAIFEX@2x.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 24,
      icon: '/images/pages/solutions/en/exch-coverage-logo/TIF.png',
      code: 'ASXCLF',
      name: t('solutionsPage.australianSecuritiesExchange'),
    },
    {
      id: 25,
      icon: '/images/pages/solutions/en/exch-coverage-logo/XIM.png',
      code: 'MGEX',
      name: t('solutionsPage.mgex'),
    },
  ];

  return (
    <section
      id="exchangeCoverage"
      className="exchangeCoverage-section bg-white sm:!py-[60px]  xs:py-[30px] "
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto xs:mb-6 sm:!mb-[3.5rem]">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('solutionsPage.exchangeCoverage'),
            }}
          />
        </div>
        <div className="xs:mt-[1.5rem] sm:!mt-[2rem] lg:!mt-[3.5rem] grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-5 xs:gap-4 sm:!gap-[1.5rem]">
          {data.map((exchange) => (
            <div
              key={exchange.id}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex-shrink-0">
                <img src={exchange.icon} alt={exchange.code} className="w-12 h-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-sm">{exchange.code}</span>
                <span className="text-xs text-gray-600 leading-tight">{exchange.name}</span>
              </div>
            </div>
          ))}
        </div>
      </MainWrapper>
    </section>
  );
};

export default ExchCoverageSection;
