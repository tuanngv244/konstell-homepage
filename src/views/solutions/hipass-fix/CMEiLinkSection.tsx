'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const CMEiLinkSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      label: t('solutionsPage.fullSupportForSbeFormat'),
    },
    {
      label: t('solutionsPage.processesSimpleOpenFramingHeader'),
    },
    {
      label: t('solutionsPage.providesCompleteMessageEnumClass'),
    },
    {
      label: t('solutionsPage.supportsBinaryLevelEncodingAndDecoding'),
    },
  ];

  return (
    <section id="cmeILink" className="summary-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('solutionsPage.cmeILink3Support'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 xs:gap-[1.5rem] sm:gap-[3rem] lg:!gap-[6rem] mt-12 items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full h-auo mx-auto rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
              src="/images/pages/solutions/en/solutions-hipass-cme-ilink.jpg"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            {data.map((feature, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-start gap-4 py-3 border-b border-b-solid border-grey-400"
              >
                <HeroIcons.Checked size={16} pathProps={{ className: 'stroke-nd-600' }} />
                <p className="text-grey-900 text-[1.25rem] font-medium leading-[1.75rem] flex flex-row gap-4">
                  {feature?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default CMEiLinkSection;
