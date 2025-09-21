
"use client";
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useState } from 'react';
import gsap from 'gsap';
import ButtonLink from '@/@core/components/button-link';

type Props = {}


const WhyChooseUsSection: React.FC<Props> = ({ }) => {

    return (
        <div className="why-choose-us-section bg-white xs:py-[3rem] sm:py-[5rem] xl:!py-[10rem]">
            <MainWrapper>
                <div className="flex xs:flex-col sm:!flex-row items-start xs:pb-[1.25rem] md:!pb-[3rem] border-b border-solid border-gray-300">
                    <h3 className="flex-1 section-subtitle mb-[1rem]">
                        Why choose us?
                    </h3>
                    <h2 className="flex-[4] section-title !text-black">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Konstell is a software engineering company that specializes in delivering high-quality solutions to clients worldwide.
                    </h2>
                </div>


                <div className="inner flex xs:flex-col sm:!flex-row items-stretch">
                    <div className="inner__left flex-1 xs:p-[1.25rem] xs:pb-[0] lg:!p-[2.5rem] border-r border-solid border-gray-300">
                        <p className='text-[1.125rem] leading-[1.75rem] font-[500] text-gray-600'>
                            Our objective is to develop a profitable and
                            effective solution that helps clients to
                            expand their businesses and overcome
                            financial constraints. We are committed to
                            exceptional service and utilizing all
                            resources to bring the finest products &
                            services.
                        </p>
                        <ButtonLink
                            cls="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all  duration-300 xs:mt-[1.25] xs:!mt-[2.5rem]"
                            name='About Us'
                            link="/about-us"
                            color='#ffffff'
                            size={16}
                        />
                    </div>
                    <div className="inner__right flex-[3]  xs:p-[1.25rem] lg:!p-[2.5rem] 2xl:!p-[3.5rem] ">
                        <div className="flex xs:flex-col sm:!flex-row xs:gap-[2rem] md:!gap-[1.5rem]" >
                            <div className="flex-1 overflow-hidden w-full h-full">
                                <img src="/images/pages/home/why-choose-img.png" />
                            </div>
                            <div className="flex-[2] grid grid-cols-2 xs:gap-[0.75rem] sm:!gap-[1.5rem] ">
                                <div className="flex flex-col gap-3 w-full">
                                    <p className='xs:text-[1.125rem] sm:!text-[1.25rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-black font-[500]'>Experience</p>
                                    <hr className='border-gray-300' />
                                    <p className='xs:text-[2rem] sm:!text-[3.5rem] md:!text-[4.5rem] xs:leading-[2.5rem] sm:!leading-[3.75rem] text-black font-[700]'>25+</p>
                                    <p className='text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] text-gray-600 font-[400]'>years of active, market-driven experience under
                                        our belt.</p>
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className='xs:text-[1.125rem] sm:!text-[1.25rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-black font-[500]'>Clients</p>
                                    <hr className='border-gray-300' />
                                    <p className='xs:text-[2rem] sm:!text-[3.5rem] md:!text-[4.5rem] xs:leading-[2.5rem] sm:!leading-[3.75rem] text-black font-[700]'>250+</p>
                                    <p className='text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] text-gray-600 font-[400]'>satisfied clients with at least a 3-year
                                        collaboration record.</p>
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className='xs:text-[1.125rem] sm:!text-[1.25rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-black font-[500]'>Team</p>
                                    <hr className='border-gray-300' />
                                    <p className='xs:text-[2rem] sm:!text-[3.5rem] md:!text-[4.5rem] xs:leading-[2.5rem] sm:!leading-[3.75rem] text-black font-[700]'>275+</p>
                                    <p className='text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] text-gray-600 font-[400]'>certified full-time pros with field experience on
                                        board.</p>
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className='xs:text-[1.125rem] sm:!text-[1.25rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-black font-[500]'>Projects</p>
                                    <hr className='border-gray-300' />
                                    <p className='xs:text-[2rem] sm:!text-[3.5rem] md:!text-[4.5rem] xs:leading-[2.5rem] sm:!leading-[3.75rem] text-black font-[700]'>3,500+</p>
                                    <p className='text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] text-gray-600 font-[400]'>projects finished with at least an x2 average
                                        annual revenue boost.</p>
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className='xs:text-[1.125rem] sm:!text-[1.25rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-black font-[500]'>Partnerships</p>
                                    <hr className='border-gray-300' />
                                    <p className='xs:text-[2rem] sm:!text-[3.5rem] md:!text-[4.5rem] xs:leading-[2.5rem] sm:!leading-[3.75rem] text-black font-[700]'>10+</p>
                                    <p className='text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] text-gray-600 font-[400]'>years of active, market-driven experience under
                                        our belt</p>
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <p className='xs:text-[1.125rem] sm:!text-[1.25rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] text-black font-[500]'>ISO 27001-certified</p>
                                    <hr className='border-gray-300' />
                                    <p className='xs:text-[2rem] sm:!text-[3.5rem] md:!text-[4.5rem] xs:leading-[2.5rem] sm:!leading-[3.75rem] text-black font-[700]'>2+</p>
                                    <p className='text-[0.875rem] xs:leading-[1rem] sm:!leading-[1.25rem] text-gray-600 font-[400]'>IT designs that protect data and enable secure
                                        internal management</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </MainWrapper>
        </div>
    )
}

export default WhyChooseUsSection