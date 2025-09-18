'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
          src="/images/pages/platform/en/platform-bg-1.jpg"
          alt="Trading System Background"
          className="w-full h-full object-cover"
          ref={bannerRef}
        />
      </div>

      <div className="xs:min-w-[280px] sm:!min-w-auto hero-intro z-[3] absolute left-[50%] translate-x-[-50%] xs:bottom-[50%] xs:translate-y-[50%] sm:!translate-y-0 sm:!bottom-[120px] text-center">
        <MainWrapper>
          <h1
            className="xs:text-[2.5rem] sm:!text-[4rem]  uppercase leading-[6rem] font-medium text-white md:text-[4rem] sm:!leading-[5rem]  xs:leading-[3.5rem] [320px_to_375px]:text-[2rem] [320px_to_375px]:leading-[3.25rem] mb-2"
            dangerouslySetInnerHTML={{
              __html: t('tradingSysPage.tradingSystem'),
            }}
          />
          <p className="text-grey-200 text-[1.5rem] leading-[2rem] font-normal">
            {t('tradingSysPage.completePackagesFromFrontendTools')}
          </p>
        </MainWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
