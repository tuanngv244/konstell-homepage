'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
type Props = {};

const HeroSection = ({}: Props) => {
  const { t } = useTranslation('common');
  const bannerRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        {
          scale: 1,
          y: 0,
        },
        {
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'end end',
            end: 'bottom center',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    }
  }, [bannerRef.current]);

  return (
    <section className="hero-section relative w-screen xs:h-[750px] sm:!h-[800px] overflow-hidden sm:w-screen transition-all duration-500 ease-in-out">
      <div className="hero-bg absolute top-0 left-0 w-full h-full  animate-translateY bg-no-repeat">
        <img
          src="/images/pages/company/company-bg.jpg"
          alt="Company Background"
          className="w-full h-full object-cover"
          ref={bannerRef}
        />
      </div>

      <div className="hero-intro z-[3] relative top-[25%]">
        <MainWrapper>
          <p className="text-primary-500 text-[1.125rem] leading-[1.75rem] font-normal uppercase mb-[0.625rem]">
            {t('companyPage.winwaySystems')}
          </p>
          <h1
            className="xs:text-[2.5rem] sm:!text-[4rem] max-w-[700px] uppercase leading-[6rem] font-medium text-black md:text-[4rem] sm:!leading-[5rem]  xs:leading-[3.5rem] [320px_to_375px]:text-[2rem] [320px_to_375px]:leading-[3.25rem]"
            dangerouslySetInnerHTML={{
              __html: t('companyPage.capitalMarketSoftwareSolutionProvider'),
            }}
          />
        </MainWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
