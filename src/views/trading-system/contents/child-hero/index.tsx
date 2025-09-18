'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useResources } from '../useResources';
import { usePathname } from 'next/navigation';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const ChildHeroSection = ({}: Props) => {
  const bannerRef = useRef<HTMLImageElement | null>(null);
  const { tradingSyss } = useResources();
  const pathname = usePathname();

  const currSys = tradingSyss.find((sys) => sys.path === pathname);

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
    <section className="hero-section relative w-screen xs:h-[850px] sm:!h-[800px] overflow-hidden sm:w-screen transition-all duration-500 ease-in-out">
      <div className="hero-bg absolute top-0 left-0 w-full h-full  animate-translateY bg-no-repeat">
        <img
          src="/images/pages/trading-sys/en/trading-sys-bg-1.jpg"
          alt="Trading System Background"
          className="w-full h-full object-cover"
          ref={bannerRef}
        />
      </div>

      <div className="hero-intro z-[3] relative top-[50%] translate-y-[-50%]">
        <MainWrapper>
          <div className="flex xs:flex-col items-center sm:!flex-row justify-between gap-6">
            <div className="flex-1 flex xs:flex-col">
              <p className="text-nd-600 text-[1.125rem] leading-[1.75rem] font-normal  mb-[0.625rem]">
                {currSys?.num + ' - ' + currSys?.label}
              </p>
              <h1
                className="xs:text-[2.5rem] sm:!text-[4.5rem] max-w-[650px] font-medium text-white md:text-[4rem] sm:!leading-[5rem]  xs:leading-[3.5rem]  mt-3 xs:mb-[1rem] sm:!mb-[3rem]"
                dangerouslySetInnerHTML={{
                  __html: currSys?.title || '',
                }}
              />
              {!!currSys?.description?.length && (
                <>
                  {currSys.description.map((desc, index) => (
                    <p
                      key={index}
                      className="text-white text-[1.125rem] leading-[1.75rem] font-normal xs:mb-2 sm:!mb-4"
                    >
                      {desc}
                    </p>
                  ))}
                </>
              )}
            </div>
            <div className="flex-1">
              <img
                className="w-full h-auto rounded-2xl"
                src="/images/pages/trading-sys/en/trading-sys-bg-item-1.jpg"
              />
            </div>
          </div>
        </MainWrapper>
      </div>
    </section>
  );
};

export default ChildHeroSection;
