'use client';
import ButtonLink from '@/@core/components/button-link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useRef, useState } from 'react';

type Props = {};

const BranchSection: React.FC<Props> = ({}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(2);
  const splideRef = useRef(null);

  const data = [
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'INTERPIPE',
      title: 'INTERPIPE MANUFACTURING',
      flag: '🇺🇦',
      description:
        "Interpipe is a Ukrainian industrial company, one of the world's leading manufacturers of steel pipes and railway wheels.",
      industry: 'Manufacturing',
      scope: 'E-COMMERCE',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'SCHWARZ',
      title: 'SCHWARZ GROUP',
      flag: '🇩🇪',
      description:
        'Schwarz Group is a German multinational retailer that operates stores under the Lidl and Kaufland brands.',
      industry: 'Retail',
      scope: 'E-COMMERCE',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'MASTERCARD',
      title: 'MASTERCARD WORLDWIDE',
      flag: '🇺🇸',
      description:
        'Mastercard is an American multinational financial services corporation providing payment solutions worldwide.',
      industry: 'Financial Services',
      scope: 'FINTECH',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'METINVEST',
      title: 'METINVEST GROUP',
      flag: '🇺🇦',
      description:
        'Metinvest is a vertically integrated steel and mining company serving customers in more than 100 countries.',
      industry: 'Mining & Steel',
      scope: 'INDUSTRIAL',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'APTIV',
      title: 'APTIV AUTOMOTIVE',
      flag: '🇺🇸',
      description:
        'Aptiv is a global technology company that develops safer, greener and more connected solutions.',
      industry: 'Automotive',
      scope: 'IoT & AUTOMOTIVE',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'TOYOTA',
      title: 'TOYOTA MATERIAL HANDLING',
      flag: '🇺🇸',
      description:
        "Toyota Material Handling Europe is the European division of Toyota Material Handling Group (TMHG). It is the world's leading manufacturer of loading equipment and warehouse equipment. Developed an IT product for the client.",
      industry: 'Manufacturing',
      scope: 'SOFTWARE',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'CH ROBINSON',
      title: 'C.H. ROBINSON WORLDWIDE',
      flag: '🇺🇸',
      description:
        "C.H. Robinson is one of the world's largest third-party logistics companies providing freight transportation services.",
      industry: 'Logistics',
      scope: 'LOGISTICS',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'EASYLOAD',
      title: 'EASYLOAD SYSTEMS',
      flag: '🇺🇸',
      description:
        'EasyLoad provides innovative loading dock equipment and warehouse solutions for efficient material handling.',
      industry: 'Industrial Equipment',
      scope: 'INDUSTRIAL',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'LOADAZA',
      title: 'LOADAZA',
      flag: '🇺🇸',
      description:
        'Loadaza is a transportation company specializing in vehicle transportation services for dealerships and individuals. They offer shipping services for various types of vehicles such as cars, motorcycles, trucks, SUVs, boats, military equipment, and heavy loads. Their services include door-to-door, expedited, enclosed, open, private, commercial, and other.',
      industry: 'LOGISTICS (TRANSPORTATION)',
      scope: 'WEB DEVELOPMENT',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'EPIC GAMES',
      title: 'EPIC GAMES STORE',
      flag: '🇺🇸',
      description:
        'Epic Games is an American video game and software developer and publisher based in Cary, North Carolina.',
      industry: 'Gaming',
      scope: 'ENTERTAINMENT',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'MAKELL',
      title: 'MAKELL SOLUTIONS',
      flag: '🇺🇸',
      description:
        'Makell provides comprehensive business solutions and consulting services for enterprise clients.',
      industry: 'Consulting',
      scope: 'BUSINESS',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'H2H',
      title: 'H2H LOGISTICS',
      flag: '🇺🇸',
      description:
        'H2H specializes in human-to-human logistics solutions with focus on customer service excellence.',
      industry: 'Logistics',
      scope: 'LOGISTICS',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'SOFTSERVE',
      title: 'SOFTSERVE INC.',
      flag: '🇺🇦',
      description:
        'SoftServe is a leading technology solutions company specializing in software development and digital transformation.',
      industry: 'Technology',
      scope: 'SOFTWARE',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'LOTTE',
      title: 'LOTTE CORPORATION',
      flag: '🇰🇷',
      description:
        'Lotte is a South Korean multinational conglomerate corporation headquartered in Seoul, South Korea.',
      industry: 'Conglomerate',
      scope: 'E-COMMERCE',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'SAMSUNG',
      title: 'SAMSUNG ELECTRONICS',
      flag: '🇰🇷',
      description:
        "Samsung Electronics is a South Korean multinational electronics corporation and one of the world's largest technology companies.",
      industry: 'Technology',
      scope: 'ELECTRONICS',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'LG',
      title: 'LG ELECTRONICS',
      flag: '🇰🇷',
      description:
        'LG Electronics is a South Korean multinational electronics company that manufactures consumer electronics and home appliances.',
      industry: 'Electronics',
      scope: 'CONSUMER TECH',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'SAMSUNG',
      title: 'SAMSUNG ELECTRONICS',
      flag: '🇰🇷',
      description:
        "Samsung Electronics is a South Korean multinational electronics corporation and one of the world's largest technology companies.",
      industry: 'Technology',
      scope: 'ELECTRONICS',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'LG',
      title: 'LG ELECTRONICS',
      flag: '🇰🇷',
      description:
        'LG Electronics is a South Korean multinational electronics company that manufactures consumer electronics and home appliances.',
      industry: 'Electronics',
      scope: 'CONSUMER TECH',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'SAMSUNG',
      title: 'SAMSUNG ELECTRONICS',
      flag: '🇰🇷',
      description:
        "Samsung Electronics is a South Korean multinational electronics corporation and one of the world's largest technology companies.",
      industry: 'Technology',
      scope: 'ELECTRONICS',
    },
    {
      src: '/images/pages/home/branchs/lotte.png',
      name: 'LG',
      title: 'LG ELECTRONICS',
      flag: '🇰🇷',
      description:
        'LG Electronics is a South Korean multinational electronics company that manufactures consumer electronics and home appliances.',
      industry: 'Electronics',
      scope: 'CONSUMER TECH',
    },
  ];

  return (
    <div
      className="branch-section absolute left-0 bottom-0 z-[5]"
      onMouseLeave={() => {
        // setHoveredIndex(null);
        splideRef.current?.splide.Components.AutoScroll.play();
      }}
    >
      <div
        className={`absolute bottom-full left-0 right-0 z-1 mb-0 w-full transition-all duration-500 ease-out ${
          hoveredIndex !== null
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 translate-y-4 invisible'
        }`}
      >
        <div
          className={`bg-gray-900 text-white rounded-tl-3xl rounded-tr-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-out ${
            hoveredIndex !== null ? 'scale-100' : 'scale-95'
          }`}
        >
          {hoveredIndex !== null && (
            <div className="flex xs:flex-col md:!flex-row">
              <div className="flex-shrink-0 xs:w-full md:!w-[600px]  p-6 bg-gray-800">
                <div className="flex xs:flex-col md:!flex-row items-start mb-4">
                  <img
                    src="/images/pages/home/branchs/lotte.png"
                    alt={data[hoveredIndex].name}
                    className="w-25 h-16 object-cover rounded-lg mr-4 transition-transform duration-300 ease-out"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 transform transition-all duration-300 ease-out">
                      {data[hoveredIndex].title} {data[hoveredIndex].flag}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 transform transition-all duration-400 ease-out delay-100 line-clamp-3">
                  {data[hoveredIndex].description}
                </p>
                <ButtonLink
                  cls="inline-flex !mt-4 items-center gap-2  xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all  duration-300"
                  name="DISCOVER"
                  link="#"
                  color="#ffffff"
                  size={24}
                />
              </div>

              <div className="flex-1 p-6 bg-gray-900 flex flex-col justify-between">
                <div className="flex xs:justify-start md:!justify-end mb-6 transform transition-all duration-300 ease-out delay-150">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white text-xs font-medium rounded-full">
                    LOGISTICS (TRANSPORTATION)
                  </span>
                </div>

                <div className="space-y-6 transform transition-all duration-400 ease-out delay-200">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Industry:</h4>
                    <p className="text-white text-base">{data[hoveredIndex].industry}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Scope of work:</h4>
                    <span className="inline-block px-4 py-2 text-gray-300 text-sm rounded-full border border-gray-600">
                      {data[hoveredIndex].scope}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Splide
        ref={splideRef}
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 8,
          arrows: false,
          pagination: false,
          autoScroll: {
            speed: 1,
          },
          breakpoints: {
            1580: {
              perPage: 6,
            },
            1024: {
              perPage: 4,
            },
            640: {
              perPage: 2,
            },
          },
        }}
        extensions={{ AutoScroll }}
        className="logo-marquee bg-white border-b border-solid border-b-gray-200 py-5 "
      >
        {data.map((logo, index) => (
          <SplideSlide
            className="flex items-center justify-center relative"
            key={index}
            onMouseEnter={() => {
              setHoveredIndex(index);
              splideRef.current?.splide.Components.AutoScroll.pause();
            }}
          >
            <div
              className={clsx('relative group cursor-pointer transition-all duration-300', {
                'opacity-30 scale-60': hoveredIndex && hoveredIndex !== index,
              })}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="logo-img w-[200px] h-auto transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BranchSection;
