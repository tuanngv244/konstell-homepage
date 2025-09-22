"use client";
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useState } from 'react';
import gsap from 'gsap';
import ButtonLink from '@/@core/components/button-link';

type Props = {}

const DigitalTransformSection: React.FC<Props> = ({ }) => {

    const industries = [
        {
            title: "Oil & Gas",
            icon: "🛢️",
            image: "/images/pages/home/digital-transform/digital-transform-img-1.jpg",
            description: "For the oil and gas industry, we create custom asset management systems, drilling optimization tools, remote monitoring platforms, and other solutions that enhance safety and maximize productivity.",
            link: "/industries/oil-gas"
        },
        {
            title: "Energy and Utilities",
            icon: "⚡",
            image: "/images/pages/home/digital-transform/digital-transform-img-2.png",
            description: "We build smart grid management systems, renewable energy analytics platforms, and energy efficiency optimization tools, helping to improve grid reliability, cut costs, and meet sustainability goals.",
            link: "/industries/energy-utilities"
        },
        {
            title: "Logistics (Transportation)",
            icon: "🚛",
            image: "/images/pages/home/digital-transform/digital-transform-img-3.png",
            description: "From route optimization algorithms and fleet management systems to supply chain tracking platforms, we work on a range of specialized solutions that boost the overall fleet and delivery.",
            link: "/industries/logistics"
        }
    ];

    return (
        <div className="digital-transform-section rounded-3xl bg-black text-white xs:py-[3rem] sm:py-[5rem] xl:!py-[10rem]">
            <MainWrapper>
                {/* Title - Centered */}
                <div className="text-center xs:mb-6 md:!mb-16">
                    <h2 className="section-title !text-white">
                        Digital transformation for<br />industries
                    </h2>
                </div>
                <div className="inner border-t border-solid border-gray-700 flex xs:flex-col sm:!flex-row items-stretch">
                    {/* Left Side - Content */}
                    <div className="inner__left sm:min-w-[50%] md:!min-w-min flex-1 xs:p-[1.25rem] xs:pb-[0] lg:!p-[2.5rem] xs:border-transparent sm:border-r border-solid md:!border-gray-700">
                        <p className='text-[1.125rem] leading-[1.75rem] font-[400] text-gray-300 xs:mb-4 md:!mb-8'>
                            STV is your one-stop software development company, offering a full range of services for all industries. We drive your business progress with smart tech decisions tailored to a specific field.
                        </p>

                        <ButtonLink
                            cls="inline-flex items-center gap-2  xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary hover:bg-blue-700 text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300"
                            name='DISCOVER MORE'
                            link="/industries"
                            color='#ffffff'
                            size={20}
                        />
                    </div>

                    {/* Right Side - Industry Cards Slider */}
                    <div className="inner__right sm:flex-1 md:!flex-[3] xs:p-[1.25rem] lg:!p-[2.5rem] 2xl:!p-[3.5rem] 2xl:!pr-[0]">
                        <Splide
                            options={{
                                type: 'slide',
                                perPage: 3,
                                perMove: 1,
                                gap: '1.5rem',
                                pagination: false,
                                arrows: false,
                                autoplay: false,
                                breakpoints: {
                                    1024: {
                                        perPage: 2,
                                        gap: '1rem',
                                    },
                                    768: {
                                        perPage: 1,
                                        gap: '1rem',
                                    }
                                }
                            }}
                            className="industry-slider"
                        >
                            {industries.map((industry, index) => (
                                <SplideSlide key={index}>
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                                        {/* Card Image */}
                                        <div className="relative xs:h-64 sm:!h-48 overflow-hidden">
                                            <img
                                                src={industry.image}
                                                alt={industry.title}
                                                className="w-full h-full   object-cover hover:scale-[1.1] hover:rotate-[2deg] transition-transform duration-300"
                                            />
                                            {/* Industry Icon */}
                                            <div className="absolute top-4 right-4">
                                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <span className="text-xl">{industry.icon}</span>
                                                </div>
                                            </div>
                                            {/* Title Overlay */}
                                            <div className="absolute bottom-4 left-4">
                                                <h3 className="text-xl font-bold text-white">
                                                    {industry.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                                {industry.description}
                                            </p>

                                            <ButtonLink
                                                cls="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors self-start hover-line"
                                                name="LEARN MORE"
                                                link={industry.link}
                                                color="#000000"
                                                size={14}
                                            />
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>
            </MainWrapper>
        </div>
    )
}

export default DigitalTransformSection