'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

type Props = {
  references: { logo: string }[];
  layoutClss?: string;
};

const ReferencesSection = ({ references, layoutClss }: Props) => {
  const { t } = useTranslation('common');

  return (
    <section id="references" className="features-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
            <h3
              className="section-title"
              dangerouslySetInnerHTML={{
                __html: t('solutionsPage.references'),
              }}
            />
          </div>
          <div
            className={clsx(
              `xs:px-8 sm:!px-0 xs:w-full sm:!w-fit grid xs:grid-cols-1 sm:!grid-cols-2 xs:gap-6 sm:!gap-8 lg:gap-12 mt-12 items-center lg:!grid-cols-[repeat(5,200px)]`,
              layoutClss,
            )}
          >
            {references.map((reference, index) => (
              <div
                key={index}
                className={
                  'flex items-center justify-center xs:p-6 sm:!py-[1.5rem]  h-[80px] rounded-[0.5rem]  shadow-[0_2px_30px_0_rgba(50,50,50,0.08)]'
                }
              >
                <img
                  src={reference.logo}
                  alt={`Reference logo ${index + 1}`}
                  className="max-w-full w-auto h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default ReferencesSection;
