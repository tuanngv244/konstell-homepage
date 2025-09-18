'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';
import ImgCard from '../contents/ImgCard';

type Props = {};

const DemoSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      label: t('tradingSysPage.comprehensiveOrderBook'),
      img: '/images/pages/trading-sys/en/trading-sys-fx-trade-sys-demo-img-1.png',
    },
    {
      label: t('tradingSysPage.globalCurrencyTableOrder'),
      img: '/images/pages/trading-sys/en/trading-sys-fx-trade-sys-demo-img-2.png',
    },
    {
      label: t('tradingSysPage.hedgeManager'),
      img: '/images/pages/trading-sys/en/trading-sys-fx-trade-sys-demo-img-3.png',
    },
    {
      label: t('tradingSysPage.globalCurrencyBoardOrder'),
      img: '/images/pages/trading-sys/en/trading-sys-fx-trade-sys-demo-img-4.png',
    },
    {
      label: t('tradingSysPage.miniOrderBook'),
      img: '/images/pages/trading-sys/en/trading-sys-fx-trade-sys-demo-img-5.png',
    },
  ];

  return (
    <section id="demo" className="demo-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('tradingSysPage.demo'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3  xs:gap-6 sm:!gap-8 lg:gap-[3rem] xs:mt-[1.5rem] sm:!mt-[3.5rem] items-stretch">
          {data.map(
            (feature, index) =>
              index <= 2 && (
                <ImgCard
                  title={feature.label}
                  img={feature.img}
                  key={index}
                  wrapCls="sm:!px-[3rem]"
                />
              ),
          )}
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2  xs:gap-6 sm:!gap-8 lg:gap-[3rem] xs:mt-6 sm:!mt-8 items-stretch  xs:max-w-full sm:!max-w-full lg:!max-w-[calc(100%_-_35%)]  mx-auto ">
          {data.map(
            (feature, index) =>
              index > 2 && (
                <ImgCard
                  title={feature.label}
                  img={feature.img}
                  key={index}
                  wrapCls="sm:!px-[3rem]"
                />
              ),
          )}
        </div>
      </MainWrapper>
    </section>
  );
};

export default DemoSection;
