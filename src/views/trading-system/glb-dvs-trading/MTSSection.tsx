'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useTranslation } from 'next-i18next';
import ImgCard from '../contents/ImgCard';

type Props = {};

const MTSSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const data = [
    {
      label: t('tradingSysPage.order'),
      img: '/images/pages/trading-sys/en/trading-sys-glb-dvs-trade-mts-img-3.png',
    },
    {
      label: t('tradingSysPage.favorites'),
      img: '/images/pages/trading-sys/en/trading-sys-glb-dvs-trade-mts-img-4.png',
    },
    {
      label: t('tradingSysPage.marketData'),
      img: '/images/pages/trading-sys/en/trading-sys-glb-dvs-trade-mts-img-5.png',
    },
  ];

  return (
    <section id="mts" className="mts-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
          <h3
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: t('tradingSysPage.mts'),
            }}
          />
        </div>
        <div className="grid xs:grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 xs:gap-6 sm:!gap-8 lg:gap-[3rem] xs:mt-[1.5rem] sm:!mt-[3.5rem] items-center">
          {data.map((feature, index) => (
            <ImgCard title={feature.label} img={feature.img} key={index} />
          ))}
        </div>
      </MainWrapper>
    </section>
  );
};

export default MTSSection;
