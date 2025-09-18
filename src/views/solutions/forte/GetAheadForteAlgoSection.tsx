'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';

type Props = {};

const GetAheadForteAlgoSection = ({}: Props) => {
  const { t } = useTranslation('common');

  return (
    <section id="getAhead" className="getAhead-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('solutionsPage.getAheadWithForteAlgo'),
            }}
          />
        </div>
        <div className="xs:mt-5 sm:!mt-[3.5rem] rounded-lg bg-[#fffcf9] border border-solid border-grey-100 xs:py-[1rem] sm:!py-[1.75rem] xs:px-[1rem] sm:!px-[2.5rem] flex items-center xs:flex-col lg:!flex-row xs:gap-4 sm:!gap-[2rem]">
          <div className="flex-1 flex flex-col xs:gap-4 sm:!gap-[3.5rem]">
            <h6 className="xs:text-[1rem] sm:!text-[2rem] text-nd-600 xs:leading-[1.5rem] sm:!leading-[2.5rem] font-medium">
              {t('solutionsPage.requestADemoTodayAndExperienceTheForteOfAlgorithmicExecution')}
            </h6>
            <p className="xs:text-[0.875rem] sm:!text-[1.25rem] text-grey-700 xs:leading-[1.25rem] sm:!leading-[2rem] font-normal">
              {t('solutionsPage.whetherYouAreOptimizingExecutionCost')}
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/images/pages/solutions/en/solutions-forte-frame-img.png"
              alt=""
              className="xs:w-full sm:!w-full xs:max-w-[300px] sm:!max-w-[550px] h-auto mx-auto"
            />
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default GetAheadForteAlgoSection;
