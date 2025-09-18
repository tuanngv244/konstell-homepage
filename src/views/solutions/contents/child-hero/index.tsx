'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useResources } from '../useResources';
import { usePathname } from 'next/navigation';
import { HeroIcons } from '@/@core/components/icons/heroIcons';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const ChildHeroSection = ({}: Props) => {
  const bannerRef = useRef<HTMLImageElement | null>(null);
  const { solutions } = useResources();
  const pathname = usePathname();

  const currSolution = solutions.find((solution) => solution.path === pathname);

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
    <section className="hero-section relative w-screen xs:h-[850px] sm:!h-[1000px] overflow-hidden sm:w-screen transition-all duration-500 ease-in-out">
      <div className="hero-bg absolute top-0 left-0 w-full h-full  animate-translateY bg-no-repeat">
        <img
          src="/images/pages/solutions/en/solutions-bg-1.jpg"
          alt="Company Background"
          className="w-full h-full object-cover"
          ref={bannerRef}
        />
      </div>

      <div className="hero-intro z-[3] relative xs:mt-8 top-[50%] translate-y-[-50%]">
        <MainWrapper>
          <div className="flex flex-col justify-between xs:gap-[1rem] sm:!gap-[3.5rem]">
            <div className="flex-1 flex xs:flex-col">
              <p className="text-nd-600 text-[1.125rem] leading-[1.75rem] font-normal xs:mb-0  sm:!mb-[0.625rem]">
                {currSolution?.num + ' - ' + currSolution?.label}
              </p>
              <h1
                className="xs:text-[2.5rem] sm:!text-[4.5rem] max-w-[650px] font-medium text-white md:text-[4rem] sm:!leading-[5rem]  xs:leading-[3.5rem]"
                dangerouslySetInnerHTML={{
                  __html: currSolution?.title || '',
                }}
              />
            </div>
            <div className="flex xs:flex-col sm:!flex-row items-center gap-4 xs:p-6 sm:!p-[4rem] sm:!pb-0 bg-[rgba(36,34,62,0.30)] backdrop-blur-[50px] rounded-xl">
              <ul className="flex flex-col xs:gap-3 sm:!gap-[2.5rem]">
                {currSolution?.description?.map((desc, index) => (
                  <li
                    key={index}
                    className="text-white xs:text-[1rem] sm:!text-[1.25rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] font-normal flex-row items-start gap-4 truncate-text  !flex"
                  >
                    <div className="mt-[0.125rem] w-[1.5rem] min-w-[1.5rem] h-[1.5rem] rounded-full bg-nd-600 flex items-center justify-center">
                      <HeroIcons.Checked size={16} />
                    </div>
                    {desc}
                  </li>
                ))}
              </ul>
              <img
                className="xs:max-w-full sm:!max-w-[300px] lg:!max-w-[600px]  xs:w-full  sm:!w-auto xs:h-auto sm:!h-full rounded-2xl"
                src="/images/pages/solutions/en/solutions-bg-item-1.png"
              />
            </div>
          </div>
        </MainWrapper>
      </div>
    </section>
  );
};

export default ChildHeroSection;
