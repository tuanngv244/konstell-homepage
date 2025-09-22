"use client";
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useState } from 'react';
import gsap from 'gsap';
import ButtonLink from '@/@core/components/button-link';
import { HeroIcons } from '@/@core/components/icons/heroIcons';

type Props = {}

const ClientsSaySection: React.FC<Props> = ({ }) => {

    const testimonials = [
        {
            id: 1,
            company: "JOHN DEERE",
            companyIcon: "🚜",
            clientName: "Peter Sachse",
            clientImage: "/images/pages/home/clients-say/client-1.png",
            testimonial: "We chose WEZOM amongst other companies because they provided prototypes of future systems and we had a clear understanding of what the finished product would look like. We...",
            link: "/testimonials/john-deere"
        },
        {
            id: 2,
            company: "DRAGI",
            companyIcon: "🦝",
            clientName: "Kyle",
            clientTitle: "DRAGI",
            clientImage: "/images/pages/home/clients-say/client-2.png",
            testimonial: "I am very satisfied wit the work process and project management. Everything was clear, on time and I had nothing specific to add. Yes, we are satisfied with the result of the work and the produc...",
            link: "/testimonials/dragi"
        },
        {
            id: 3,
            company: "suzie",
            companyIcon: "💝",
            clientName: "Daniel",
            clientTitle: "Mailovsky",
            clientImage: "/images/pages/home/clients-say/client-3.png",
            testimonial: "Thanks to WEZOM, our sales increased by 65% and conversions increased by 150%. The team fully developed an online store for us, with 1C and amoCRM integrations. The guys conducted a mark...",
            link: "/testimonials/suzie"
        }
    ];

    return (
        <div className="clients-say-section bg-white text-black xs:py-[3rem] sm:py-[5rem] xl:!py-[10rem]">
            <MainWrapper>
                <h3 className="flex-1 section-subtitle mb-[1rem]">
                    contributing to the success
                </h3>

                <div className="text-center xs:mb-4 md:!mb-12">
                    <h2 className="section-title 
                    !text-black">
                        What clients say
                    </h2>
                </div>

                <div className="flex xs:flex-col sm:!flex-row items-stretch justify-between  border-t border-b border-solid border-gray-200 xs:mb-4 sm:!mb-[4rem] xs:py-4 md:!py-0">
                    <div className="md:!border-r border-solid xs:border-transparent md:!border-gray-200 flex flex-1 items-center justify-center gap-4  xs:p-[0.875rem] md:!p-[1.5rem]">
                        <div className="text-center">
                            <div className="text-xs text-gray-500 mb-1">REVIEWED ON</div>
                            <div className="font-bold text-xl mb-1">Clutch</div>
                            <div className="text-xs text-gray-500">37 REVIEWS</div>
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-red-500 text-lg">★</span>
                                ))}
                            </div>
                        </div>
                        <div>

                            <div className="text-lg font-bold text-black mb-1">Top Rated</div>
                            <div className="text-sm text-gray-600 max-w-[200px]">
                                The highest quality results and client satisfaction
                            </div>
                        </div>
                    </div>
                    <div className=" md:!border-r border-solid xs:border-transparent md:!border-gray-200 flex flex-1 items-center justify-center gap-4  xs:p-[0.875rem] md:!p-[1.5rem]">
                        <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-lg">GF</span>
                        </div>
                        <div>
                            <div className="text-blue-600 text-sm font-medium mb-1">GoodFirms</div>
                            <div className="text-lg font-bold text-black mb-1">Excellent mobile</div>
                            <div className="text-sm text-gray-600 max-w-[200px]">
                                Top App Development Companies in Ukraine 2021
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-1 items-center justify-center gap-4  xs:p-[0.875rem] md:!p-[1.5rem]">
                        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-xs">cb</span>
                        </div>
                        <div>
                            <div className="text-blue-600 text-sm font-medium mb-1">crunchbase</div>
                            <div className="text-lg font-bold text-black mb-1">Top Rated</div>
                            <div className="text-sm text-gray-600 max-w-[200px]">
                                The highest quality results and client satisfaction
                            </div>
                        </div>
                    </div>
                </div>

                {/* Box 4: Testimonials Slider */}
                <div className="testimonials-slider">
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
                    >
                        {testimonials.map((testimonial) => (
                            <SplideSlide key={testimonial.id}>
                                <div className="testimonial-card bg-white rounded-2xl overflow-hidden h-full flex flex-col">
                                    {/* Company Header */}
                                    <div className="bg-gray-800 rounded-2xl h-48 flex items-center justify-center p-6 relative aspect-[4/3] xs:min-h-[250px] sm:!min-h-[250px] lg:!min-h-[300px]">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-md">
                                                <span className="text-2xl">{testimonial.companyIcon}</span>
                                            </div>
                                            <div className="text-white text-2xl font-bold">
                                                {testimonial.company}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-white px-4 py-2 rounded-tr-[1rem] ">
                                            <img
                                                src={testimonial.clientImage}
                                                alt={testimonial.clientName}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <div className="font-semibold text-black text-sm">
                                                    {testimonial.clientName}
                                                </div>
                                                {testimonial.clientTitle && (
                                                    <div className="text-xs text-gray-600">
                                                        {testimonial.clientTitle}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="mb-6 flex-1">
                                            <p className="text-black xs:text-[1rem] sm:!text-[1.25rem] xs:leading-[1.25rem] sm:!leading-[1.75rem] font-[500] line-clamp-3 ">
                                                <HeroIcons.QuotationMarks />  {testimonial.testimonial}
                                            </p>
                                        </div>
                                        <div className="mt-auto">
                                            <ButtonLink
                                                cls="inline-flex items-center gap-2 text-sm font-medium text-black hover-line transition-colors"
                                                name="READ MORE"
                                                link={testimonial.link}
                                                color="#000000"
                                                size={16}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </MainWrapper>
        </div>
    )
}

export default ClientsSaySection