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
            image: "/images/pages/home/digital-transform/oil-gas.jpg",
            description: "For the oil and gas industry, we create custom asset management systems, drilling optimization tools, remote monitoring platforms, and other solutions that enhance safety and maximize productivity.",
            link: "/industries/oil-gas"
        },
        {
            title: "Energy and Utilities",
            icon: "⚡",
            image: "/images/pages/home/digital-transform/energy-utilities.jpg",
            description: "We build smart grid management systems, renewable energy analytics platforms, and energy efficiency optimization tools, helping to improve grid reliability, cut costs, and meet sustainability goals.",
            link: "/industries/energy-utilities"
        },
        {
            title: "Logistics (Transportation)",
            icon: "🚛",
            image: "/images/pages/home/digital-transform/logistics.jpg",
            description: "From route optimization algorithms and fleet management systems to supply chain tracking platforms, we work on a range of specialized solutions that boost the overall fleet and delivery.",
            link: "/industries/logistics"
        }
    ];

    return (
        <div className="digital-transform-section bg-black text-white xs:py-[3rem] sm:py-[5rem] xl:!py-[10rem]">
            <MainWrapper>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Side - Content */}
                    <div className="flex-1 lg:max-w-[40%]">
                        <h2 className="xs:text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-tight text-white mb-8">
                            Digital transformation for industries
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                            STV is your one-stop software development company, offering a full range of services for all industries. We drive your business progress with smart tech decisions tailored to a specific field.
                        </p>

                        <ButtonLink
                            cls="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300"
                            name="DISCOVER MORE"
                            link="/industries"
                            color="#ffffff"
                            size={16}
                        />
                    </div>

                    {/* Right Side - Industry Cards */}
                    <div className="flex-1">
                        <div className="grid gap-6">
                            {industries.map((industry, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300 group"
                                >
                                    <div className="flex items-center">
                                        {/* Card Image */}
                                        <div className="relative w-32 h-32 flex-shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10 rounded-l-2xl"></div>
                                            <img
                                                src={industry.image}
                                                alt={industry.title}
                                                className="w-full h-full object-cover rounded-l-2xl"
                                            />
                                            {/* Industry Icon */}
                                            <div className="absolute top-4 left-4 z-20">
                                                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <span className="text-lg">{industry.icon}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="flex-1 p-6">
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                {industry.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {industry.description}
                                            </p>

                                            <ButtonLink
                                                cls="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                                                name="LEARN MORE"
                                                link={industry.link}
                                                color="#ffffff"
                                                size={14}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </div>
    )
}

export default DigitalTransformSection
