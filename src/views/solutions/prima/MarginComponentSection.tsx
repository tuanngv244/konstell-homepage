'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const MarginComponentSection = ({}: Props) => {
  const { t } = useTranslation('common');

  return (
    <section
      id="marginComponent"
      className="marginComponent-section bg-white sm:!py-[60px]  xs:py-[30px] "
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto xs:mb-6 sm:!mb-[3.5rem]">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('solutionsPage.marginComponent'),
            }}
          />
        </div>
        <div>
          <img
            src={'/images/pages/solutions/en/solutions-prima-margin-component-img.jpg'}
            alt=""
            className="w-full h-auto max-w-full"
          />
        </div>
      </MainWrapper>
    </section>
  );
};

export default MarginComponentSection;
