'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useDevice } from '@/@core/hooks/useDevice';
import { styled } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import type SplideCore from '@splidejs/splide';
import clsx from 'clsx';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import Card from './Card';

type Props = {};

const PlatformSection = ({}: Props) => {
  const { t } = useTranslation('common');
  const slideRef = useRef<SplideCore | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const device = useDevice();

  const data = [
    {
      subTitle: t('platformPage.messageDrivenMiddleware'),
      title: t('platformPage.winnetServerPlatform'),
      desc: [t('platformPage.itProvidesAHighQualityDevelopment')],
      img: '/images/pages/home/platform/platform-section-img-1.png',
      id: '1',
      discoverLink: '/platform/server-platform',
    },
    {
      subTitle: t('platformPage.oneSourceAndMultiDevices'),
      title: t('platformPage.vivaceMobilePlatform'),
      desc: [t('platformPage.mobilePlatformSupportsOneSourceMultiDevice')],
      img: '/images/pages/home/platform/platform-section-img-2.png',
      id: '2',
      discoverLink: '/platform/mobile-platform',
    },
    {
      subTitle: t('platformPage.clientServerEnvironmentGuiTool'),
      title: t('platformPage.prestoPcClientPlatform'),
      desc: [t('platformPage.aGuiToolForManagingClientServerEnvironment')],
      img: '/images/pages/home/platform/platform-section-img-3.png',
      id: '3',
      discoverLink: '/platform/pc-client-platform',
    },
    {
      subTitle: t('platformPage.messagingGatewayPlatform'),
      title: t('platformPage.trustMessagingMiddleware'),
      desc: [t('platformPage.ensuresSecureRealTimeAndReliableMessageDelivery')],
      img: '/images/pages/home/platform/platform-section-img-4.png',
      id: '4',
      discoverLink: '/platform/communication-middleware',
    },
  ];

  const _onDrag = (ev) => {
    const listSlide = ev.Components.Slides;
    listSlide.forEach(({ slide }) => {
      if (slide.className.includes('is-active'))
        return gsap.to(slide, {
          opacity: 1,
          scale: 0.88,
        });
      gsap.to(slide, {
        opacity: 0.5,
        scale: 0.88,
      });
    });
  };
  const _onDragged = (ev) => {
    const listSlide = ev.Components.Slides;
    listSlide.forEach(({ slide }) => {
      gsap.to(slide, {
        opacity: 1,
        scale: 1,
      });
    });
  };
  const _onMoved = (splide: any) => {
    const end = splide.Components.Controller.getEnd() + 1 - 2;
    const rate = Math.min((splide.index + 1) / end, 1);

    if (rate < 0.2) {
      if (prevRef.current) {
        gsap.to(prevRef.current, {
          opacity: 0.4,
          scale: 0.85,
        });
      }
    } else {
      if (prevRef.current) {
        gsap.to(prevRef.current, {
          opacity: 1,
          scale: 1,
        });
      }
    }
    if (rate === 1) {
      if (nextRef.current) {
        gsap.to(nextRef.current, {
          opacity: 0.4,
          scale: 0.85,
        });
      }
    } else {
      if (nextRef.current) {
        gsap.to(nextRef.current, {
          opacity: 1,
          scale: 1,
        });
      }
    }
    if (progressFillRef.current) {
      progressFillRef.current.style.width = String(100 * rate) + '%';
    }
  };

  const _onNagiate = (type: 'prev' | 'next') => () => {
    if (slideRef.current) {
      slideRef.current.go(type === 'prev' ? '<' : '>');
    }
  };

  return (
    <section className="platform-section bg-white sm:!py-[60px]  xs:py-[30px] overflow-hidden">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[1128px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('homePage.platform'),
            }}
          />
          <p className="section-desc mt-[0.5rem]">
            {t('homePage.platformsOptimizedToRealtimeTrading')}
          </p>
        </div>

        <div className="xs:mt-[2rem] md:!mt-[5rem] ">
          <WrapSplider
            ref={slideRef}
            onDrag={_onDrag}
            onDragged={_onDragged}
            className="hero-slider"
            options={{
              type: 'loop',
              perPage: 1,
              padding: device.mobile ? '5%' : device.tablet ? '10%' : '15%',
              perMove: 1,
              arrows: false,
              pagination: false,
              lazyLoad: false,
              ...(device.mobile ? { gap: '1rem' } : { gap: '3rem' }),
            }}
            onReady={_onMoved}
            onMoved={_onMoved}
          >
            {data?.map((x, index) => (
              <SplideSlide className={clsx('slide', { first: index === 0 })} key={index}>
                <Card {...x} />
              </SplideSlide>
            ))}
          </WrapSplider>
          <div className="-translate-x-2/4 left-1/2 relative w-fit arrows xs:mt-[2rem] sm:!mt-[5rem] flex items-center gap-[1.5rem]">
            <div
              className={clsx(
                'w-[2.5rem] scale-[0.85] opacity-[0.4] cursor-pointer h-[2.5rem] rounded-full border border-gray-900 flex items-center justify-center  transition-all duration-100 ',
              )}
              onClick={_onNagiate('prev')}
              ref={prevRef}
            >
              <HeroIcons.ArrowRight
                size={16}
                style={{
                  transform: 'rotate(180deg)',
                }}
                pathProps={{
                  className: 'fill-gray-900',
                }}
              />
            </div>
            <div className="progress-bar w-[100px] h-[10px] bg-[#E4E4E5] rounded-2xl">
              <div
                ref={progressFillRef}
                className="progress-fill w-[10%] transition-all duration-100 bg-gray-900 h-full rounded-2xl"
              />
            </div>
            <div
              className=" w-[2.5rem] h-[2.5rem] cursor-pointer rounded-full border border-gray-900 flex items-center justify-center  transition-all duration-100 "
              onClick={_onNagiate('next')}
              ref={nextRef}
            >
              <HeroIcons.ArrowRight
                size={16}
                pathProps={{
                  className: 'fill-gray-900',
                }}
              />
            </div>
          </div>
        </div>

        {/* 
        <h6 className="text-nd-600 text-[2rem] leading-[2.5rem] font-medium mb-4">
              {t('homePage.financialSolutionsAndSystemIntegration')}
            </h6>
            <p className="text-gray-800 text-[1.125rem] leading-[1.75rem] font-normal">
              {t('homePage.weProvideEndToEndTradingAndFinancialITSolutions')}
            </p> */}
      </MainWrapper>
    </section>
  );
};

const WrapSplider = styled(Splide)(({ theme }) => ({
  '.splide__track': {
    overflow: 'initial !important',
  },

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

export default PlatformSection;
