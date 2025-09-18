'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { useResources } from '@/@core/hooks/useResources';
import { Button } from '@mui/material';
import { useTranslation } from 'next-i18next';

type Props = {};

const ContactSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const address = [
    {
      label: t('common.tel'),
      value: '(02) 769-1974/5',
      icon: HeroIcons.Phone,
    },
    {
      label: t('common.fax'),
      value: '(02) 769-1976',
      icon: HeroIcons.Fax,
    },
    {
      label: t('common.email'),
      value: 'win@winwaysystems.com',
      icon: HeroIcons.EmailBox,
    },
    {
      label: t('common.address'),
      value: '#411, 106 Gukjegeumyung-ro, Yeongdeungpo-gu, Seoul, 07343 Korea',
      icon: HeroIcons.Location,
    },
  ];

  return (
    <section className="about-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex xs:flex-col sm:!flex-row  mx-auto xs:gap-[1.5rem] sm:!gap-[40px] md:!gap-[80px]">
          <div className="flex-1 flex xs:flex-col  mx-auto">
            <h3
              className="section-title"
              dangerouslySetInnerHTML={{
                __html: t('homePage.getInTouch'),
              }}
            />
            <p className="section-desc mt-[1rem] mb-[2.75rem]">
              {t('homePage.forAquickerResponse')}
            </p>
            <ul className="flex flex-col">
              {address.map((item, itemIndex) => {
                const genLinks: Record<string, string> = {
                  tel: `tel:${item.value}`,
                  fax: `tel:${item.value}`,
                  email: `mailto:${item.value}`,
                };

                return (
                  <li
                    key={itemIndex}
                    className="flex items-center gap-[1.25rem] xs:py-[0.5rem] sm:!py-[0.75rem] xs:px-[1rem] sm:!px-[1.5rem] border-b border-b-grey-100 border-solid"
                  >
                    <item.icon />
                    <div className="flex flex-col">
                      <p className="xs:text-[0.875rem] sm:!text-[1rem] leading-[1.5rem] font-normal text-grey-500">
                        {item.label}
                      </p>
                      <a
                        className="xs:text-[1rem] sm:!text-[1.125rem] leading-[1.75rem] font-medium text-grey-800"
                        href={genLinks?.[item?.label.toLowerCase()] || '#'}
                        onClick={(e) => {
                          if (item.label.toLowerCase() === 'address') {
                            e.preventDefault();
                          }
                        }}
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 overflow-hidden rounded-xl">
            <img
              className="w-full h-auo mx-auto rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              src="/images/pages/home/map-img.jpg"
            />
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

export default ContactSection;
