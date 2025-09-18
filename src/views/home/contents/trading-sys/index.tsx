'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useDevice } from '@/@core/hooks/useDevice';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import type SplideCore from '@splidejs/splide';
import clsx from 'clsx';
import gsap from 'gsap';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import Card from './Card';
import { styled } from '@mui/material';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

type Props = {};

const TradingSysSection = ({ }: Props) => {
  const { t } = useTranslation('common');
  const slideRef = useRef<SplideCore | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const device = useDevice();

  const data = [
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.globalDerivativesTrading'),
      desc: t('homePage.engagesInWorldwideFutures'),
      img: '/images/pages/home/trading-sys/trading-sys-img-1.png',
      id: '1',
      discoverLink: '/trading-system/global-derivatives-trading',
    },
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.propTrading'),
      desc: t('homePage.tradesTheFirmOwnCapitalToGenerateProfits'),
      img: '/images/pages/home/trading-sys/trading-sys-img-2.png',
      id: '2',
      discoverLink: '/trading-system/prop-trading',
    },
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.globalEquityTrading'),
      desc: t('homePage.excutesBuyingAndSellingOfStocksWorldwide'),
      img: '/images/pages/home/trading-sys/trading-sys-img-3.png',
      id: '3',
      discoverLink: '/trading-system/global-equity-trading',
    },
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.oocEquityOptionsTrading'),
      desc: t('homePage.involesTradingUSEquityOptions'),
      img: '/images/pages/home/trading-sys/trading-sys-img-4.png',
      id: '4',
      discoverLink: '/trading-system/occ-equity-options-trading',
    },
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.fxTrading'),
      desc: t('homePage.oneIntergratedFXTradingPlatform'),
      img: '/images/pages/home/trading-sys/trading-sys-img-5.png',
      id: '5',
      discoverLink: '/trading-system/fx-trading-system',
    },
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.equityCfdTrading'),
      desc: t('homePage.aComprehensiveEquityCfd'),
      img: '/images/pages/home/trading-sys/trading-sys-img-6.png',
      id: '6',
      discoverLink: '/trading-system/equity-cfd-trading',
    },
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.krxBondTrading'),
      desc: t('homePage.facciliatesBuyingAndSelling'),
      img: '/images/pages/home/trading-sys/trading-sys-img-7.png',
      id: '7',
      discoverLink: '/trading-system/krx-bond-trading',
    },
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.krxAndOtcGoldTrading'),
      desc: t('homePage.conductsGoldTransactionsViaKoreanExchange'),
      img: '/images/pages/home/trading-sys/trading-sys-img-8.png',
      id: '8',
      discoverLink: '/trading-system/krx-and-otc-gold-trading',
    },
    {
      subTitle: t('homePage.tradingSystem'),
      title: t('tradingSysPage.arbitrageTradingSystem'),
      desc: t('homePage.automatedPlatformExploitingPriceDifferencesAcrossMarkets'),
      img: '/images/pages/home/trading-sys/trading-sys-img-9.png',
      id: '9',
      discoverLink: '/trading-system/arbitrage-trading-system',
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
    <section className="trading-system-section bg-gray-50 sm:!py-[60px]  xs:py-[30px] overflow-hidden">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[1128px] mx-auto">
          <h3
            ref={titleRef}
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('homePage.tradingSystems'),
            }}
          />
        </div>

        <div className="xs:mt-[2rem] md:!mt-[5rem] ">
          <WrapSplider
            ref={slideRef}
            onDrag={_onDrag}
            onDragged={_onDragged}
            className="hero-slider"
            options={{
              type: 'slide',
              perPage: device.mobile ? 1 : device.tablet ? 2 : 3,
              perMove: 1,
              focus: 0,
              arrows: false,
              pagination: false,
              lazyLoad: false,
              gap: '1.5rem',
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

export default TradingSysSection;
