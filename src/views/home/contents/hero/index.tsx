'use client';
import ButtonLink from '@/@core/components/button-link';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { delayTime } from '@/@core/utils/general';
import { Button, Typography } from '@mui/material';
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
  const bannerRef = useRef<HTMLVideoElement | null>(null);
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
    <section className="hero-section relative w-screen xs:h-screen xsm:!h-screen sm:w-screen ">
      <div className="hero-bg absolute overflow-hidden top-0 left-0 w-full h-screen animate-translateY">
        <video
          src="/videos/video-bg.mp4"
          controls={false}
          autoPlay
          loop
          muted
          className='w-full h-full object-cover'
          ref={bannerRef}
        />
      </div>
      <div className="hero-overlay absolute top-0 bottom-0 w-full h-full via-transparent bg-[linear-gradient(0deg,rgba(0,0,0,0.81)_0%,rgba(255,255,255,0)_100%)]  z-[2]" />

      <div className="w-full absolute top-[100px] left-1/2 transform  -translate-x-1/2  z-[3] ">
        <MainWrapper isFullContainer nameClass='flex items-center justify-between'>
          <div className="flex items-center gap-3">
            <Button className='w-[2.5rem] h-[2.5rem]  hover:rotate-[135deg] hover:transition-transform transition-transform !bg-transparent !rounded-full !border !border-primary-400 !border-solid'>
              <HeroIcons.Play size={10} pathProps={{
                stroke: 'white'
              }} />
            </Button>
            <p className='text-[0.75rem] leading-[1.125rem] text-white font-medium uppercase'>Showreel</p>
          </div>
          <div className="flex flex-col gap-2 text-right items-end">
            <h6 className='flex items-center gap-2 text-primary-600 font-medium text-[2.25rem] leading-[3rem]'>250+
              <HeroIcons.ArrowRightUp size={18} pathProps={{
                className: 'stroke-primary-600'
              }} />
            </h6>
            <p className='text-[0.75rem] leading-[1.125rem] text-white font-[500]'>full-time professionals on staff</p>
          </div>
        </MainWrapper>
      </div>

      <div className="xs:w-full sm:!w-auto xs:max-w-full md:min-w-[800px] sm:!max-w-[800px] hero-intro absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] flex xs:flex-col sm:!flex-row xs:items-center sm:!items-end xs:justify-start sm:!justify-end px-4 xs:gap-8 sm:gap-0">
        <div>
          <h1
            // ref={titleRef}
            className=" hero-title xs:text-center sm:!text-left xs:text-[2.5rem] sm:!text-[4rem]   leading-[6rem] font-medium text-white md:text-[4rem] sm:!leading-[5rem]  xs:leading-[3.5rem] [320px_to_375px]:text-[2rem] [320px_to_375px]:leading-[3.25rem]"
          >
            Software Delivery
            Driving Business
            Growth
          </h1>
          <h6 className='mt-[0.875rem] font-normal md:text-[1.125rem] text-white sm:leading-[0.875rem] md:!leading-[1.75rem]'>Partner with dedicated IT experts who ‘get’ your business</h6>
        </div>

        {/* <HeroIcons.ArrowRightUp size={16} pathProps={{
            stroke: 'white'
          }} /> */}
        <ButtonLink cls='!rounded-full xs:min-w-[8rem] sm:!min-w-[10rem] xs:w-[8rem] sm:!w-[10rem] xs:h-[8rem] sm:!h-[10rem] flex  flex-col-reverse items-center justify-center xs:gap-1 sm:!gap-4  gradient-primary uppercase text-[0.875rem]' name={t('button.getStarted')} link="#" direction='LTR' size={18} color='#fff' />


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
