'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { delayTime } from '@/@core/utils/general';
import { Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useTranslation } from 'next-i18next';
import { useEffect, useLayoutEffect, useRef } from 'react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

type Props = {};

const HeroSection = ({ }: Props) => {
  const { t, i18n } = useTranslation('common');
  const bannerRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const _onScrollNextSection = () => {
    const ele = document.getElementById('about')

    // Get element position
    const elementPosition = ele.getBoundingClientRect().top + window.pageYOffset;

    // Smooth scroll to position
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  };

  const animateBanner = () => {
    gsap.fromTo(
      bannerRef.current,
      {
        scale: 1,
        y: 0,
      },
      {
        scale: 1.2,
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

  const animateTitle = async () => {
    await delayTime(500)
    const ele = document.querySelector('.hero-title');
    SplitText.create(ele, {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1,
          y: 100,
          delay: 0.2,
          autoAlpha: 0,
          stagger: 0.05
        });
      }
    });
  }

  useEffect(() => {
    if (bannerRef.current) animateBanner();
    // if (titleRef.current) animateTitle();
  }, []);


  return (
    <section className="hero-section relative w-screen xs:h-[700px] sm:!h-screen sm:w-screen ">
      <div className="hero-bg absolute overflow-hidden top-0 left-0 w-full h-full animate-translateY">
        <img
          src="/images/pages/home/hero-bg.jpg"
          alt="Company Background"
          className="w-full h-full object-cover"
          ref={bannerRef}
        />
      </div>
      <div className="hero-overlay absolute top-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black z-[2]" />

      <div className="hero-intro absolute xs:bottom-32 sm:!bottom-24 left-0 z-[3]">
        <MainWrapper isFullContainer>
          <h1
            // ref={titleRef}
            className="hero-title xs:text-[2.25rem] sm:!text-[4rem] max-w-[700px] uppercase leading-[6rem] font-medium text-white md:text-[4rem] sm:!leading-[5rem]  xs:leading-[3.5rem] [320px_to_375px]:text-[2rem] [320px_to_375px]:leading-[3.25rem]"
          >
            {t('homePage.softwareSolutionBuiltForCapitalMarketProfessionals')}
          </h1>
        </MainWrapper>
      </div>
      <div
        className="absolute xs:bottom-4 xs:right-4  sm:!bottom-16 sm:!right-16 z-[3] inline-flex items-center gap-2 cursor-pointer md:bottom-8 md:right-8"
        onClick={_onScrollNextSection}
      >
        <Typography className="text-lg leading-7 font-medium !text-white" variant="body1">
          {t('common.scrollToViewMore')}
        </Typography>
        <div className="w-5 h-5 overflow-hidden [&_svg]:animate-bounce">
          <HeroIcons.ArrowDown />
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
