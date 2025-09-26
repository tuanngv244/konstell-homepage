'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useState } from 'react';
import gsap from 'gsap';
import ButtonLink from '@/@core/components/button-link';
import Card from './Card';
import { useGSAP } from '@gsap/react';
import { useDevice } from '@/@core/hooks/useDevice';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const CaseStudiesSection: React.FC<Props> = ({}) => {
  const device = useDevice();
  const [activeFilter, setActiveFilter] = useState<string[]>([]);

  const services = [
    'QA & SOFTWARE TESTING',
    'WEB & MOBILE DEVELOPMENT',
    'CUSTOM SOFTWARE',
    'PRODUCT DESIGN',
    'UX/UI DESIGN',
    'WEB DEVELOPMENT',
    'MOBILE APP',
  ];

  const caseStudies = [
    {
      industry: 'LOGISTICS (TRANSPORTATION), MANUFACTURING',
      name: 'Interpipe: International tender platform',
      desc: 'We created a reliable platform for transportation online tenders.',
      link: '/case-studies/interpipe',
      image: '/images/pages/home/case-studies/case-img-1.jpg',
      types: ['UX/UI DESIGN', 'CUSTOM SOFTWARE'],
    },
    {
      industry: 'LOGISTICS (TRANSPORTATION), MANUFACTURING',
      name: 'Interpipe: International tender platform',
      desc: 'We created a reliable platform for transportation online tenders.',
      link: '/case-studies/interpipe',
      image: '/images/pages/home/case-studies/case-img-1.jpg',
      types: ['UX/UI DESIGN', 'CUSTOM SOFTWARE'],
    },
    {
      industry: 'LOGISTICS (TRANSPORTATION), MANUFACTURING',
      name: 'Interpipe: International tender platform',
      desc: 'We created a reliable platform for transportation online tenders.',
      link: '/case-studies/interpipe',
      image: '/images/pages/home/case-studies/case-img-1.jpg',
      types: ['UX/UI DESIGN', 'CUSTOM SOFTWARE'],
    },
    {
      industry: 'LOGISTICS (TRANSPORTATION), MANUFACTURING',
      name: 'Interpipe: International tender platform',
      desc: 'We created a reliable platform for transportation online tenders.',
      link: '/case-studies/interpipe',
      image: '/images/pages/home/case-studies/case-img-1.jpg',
      types: ['UX/UI DESIGN', 'CUSTOM SOFTWARE'],
    },
  ];

  useGSAP(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card: HTMLDivElement, idx: number) => {
      const index = idx;
      const defaultTop = 650;
      const genTop = idx === 0 ? 0 : defaultTop * idx + 60;
      const scale = 1 + 0.1 * idx;
      const toTop = window.innerHeight / 2 - defaultTop / 2;

      gsap.fromTo(
        card,
        {
          opacity: 1,
          scale,
          top: `${genTop}px`,
          ease: 'power1.out',
        },
        {
          opacity: 1,
          scale: 1,
          top: `${toTop}px`,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: card,
            start: `top top+=${defaultTop / 2}px`,
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="case-studies-section bg-black rounded-3xl  text-white xs:py-[3rem] sm:py-[5rem] xl:!py-[10rem]">
      <MainWrapper>
        <div className="flex xs:flex-col sm:!flex-row items-start justify-between xs:mb-4 sm:!mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="section-subtitle tracking-wider before:!bg-white !text-white">
                CASE STUDIES
              </h3>
            </div>
            <h2 className="section-title">Case Studies</h2>
          </div>
          <div className="xs:mt-6 sm:!mt-0 flex-1 flex flex-col items-start xs:gap-3 sm:!gap-6">
            <div className="flex flex-wrap gap-3 justify-start">
              {services.map((category, index) => (
                <button
                  key={index}
                  className={clsx(
                    'px-4 py-2  xs:text-[0.75rem] sm:!text-[0.875rem] font-medium leading-[1rem] tracking-wider rounded-full border transition-all duration-300',
                    {
                      'bg-white text-black border-white': activeFilter.includes(category),
                      'bg-transparent text-white border-gray-800 hover:border-white':
                        !activeFilter.includes(category),
                    },
                  )}
                  onClick={() => {
                    activeFilter.includes(category)
                      ? setActiveFilter(activeFilter.filter((item) => item !== category))
                      : setActiveFilter([...activeFilter, category]);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="xs:mt-2 sm:!mt-4">
              <ButtonLink
                cls="inline-flex items-center gap-2  xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all  duration-300"
                name="ALL CASES"
                link="/case-studies"
                color="#ffffff"
                size={20}
              />
            </div>
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="cards h-[350vh] relative will-change-transform">
          <div className="cards__wrap sticky top-0 left-0 w-full h-screen ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full will-change-transform">
              <div className="relative w-full h-full grid xs:gap-8 md:!gap-12">
                {caseStudies.map((caseStudy, index) => (
                  <Card key={index} data={caseStudy} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default CaseStudiesSection;
