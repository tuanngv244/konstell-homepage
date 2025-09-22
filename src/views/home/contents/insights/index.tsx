"use client";
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useState } from 'react';
import gsap from 'gsap';
import ButtonLink from '@/@core/components/button-link';

type Props = {}

const InsightsSection: React.FC<Props> = ({ }) => {

    const insights = [
        {
            title: "How Much Does Mobile App Creation Cost in 2025? The Shocking Truth You Need to Know",
            image: "/images/pages/home/insights/insight-img-1.jpg",
            category: "MOBILE",
            date: "07.01.2025",
            author: "Michael",
            readTime: null,
            link: "/insights/mobile-app-cost-2025"
        },
        {
            title: "How Fintech Software Development in 2025 Will Revolutionize the Industry",
            image: "/images/pages/home/insights/insight-img-2.jpg",
            category: "TECHNOLOGIES",
            date: "26.12.2024",
            author: "Eugene",
            readTime: "12 min",
            link: "/insights/fintech-development-2025"
        },
        {
            title: "What is a Proof of Concept (POC) in Software Development and How Does It Work?",
            image: "/images/pages/home/insights/insight-img-3.jpg",
            category: "TECHNOLOGIES",
            date: "24.12.2024",
            author: "Eugene",
            readTime: "8 min",
            link: "/insights/proof-of-concept-poc"
        },
        {
            title: "Unlocking User Personas: How Data Analytics Analyzes Birth Data and User Traits",
            image: "/images/pages/home/insights/insight-img-4.png",
            category: "TECHNOLOGIES",
            date: "10.12.2024",
            author: "Eugene",
            readTime: null,
            link: "/insights/user-personas-data-analytics"
        }
    ];

    const categories = [
        "AI & IOT", "E-COMMERCE", "QA", "ENERGY, OIL & GAS",
        "LOGISTICS", "EDUCATION", "FINTECH", "BOOKS", "WHITEPAPERS"
    ];

    return (
        <div className="insights-section bg-white text-black xs:py-[3rem] sm:py-[5rem] xl:!py-[7rem] overflow-hidden">
            <MainWrapper>
                {/* Block 1: Header */}
                <div className="flex xs:flex-col lg:!flex-row items-start justify-between xs:mb-8 lg:!mb-12">
                    <div className="xs:mb-6 lg:!mb-0 flex-1">
                        <h3 className="section-subtitle text-black mb-4">
                            THE BLOG
                        </h3>
                        <h2 className="section-title !text-black">
                            INSIGHTS
                        </h2>
                    </div>

                    <div className="xs:w-full lg:!w-auto flex-1">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 xs:mb-4 lg:!mb-6">
                            {categories.map((category, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 h-[2rem] text-xs font-medium text-gray-600 border border-solid border-gray-200 rounded-full hover:border-black transition-colors cursor-pointer flex items-center justify-center hover:text-black"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>

                        {/* Discover More Button */}
                        <div className="xs:text-left lg:!text-left">
                            <ButtonLink
                                cls="inline-flex items-center gap-2 xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300"
                                name="DISCOVER MORE"
                                link="/insights"
                                color="#ffffff"
                                size={20}
                            />
                        </div>
                    </div>
                </div>

                {/* Block 2: Insights Cards */}
                <div className="insights-splider">
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
                                1536: {
                                    perPage: 3,
                                    gap: '1.25rem',
                                },
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
                        className="insights-slider"
                    >
                        {insights.map((insight, index) => (
                            <SplideSlide key={index}>
                                <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
                                    {/* Card Image */}
                                    <div className="relative xs:h-64 sm:!h-68 overflow-hidden rounded-2xl">
                                        <a href="#">
                                            <img
                                                src={insight.image}
                                                alt={insight.title}
                                                className="w-full h-full object-cover hover:scale-[1.05] transition-transform duration-300"
                                            />
                                        </a>
                                    </div>

                                    {/* Card Content */}
                                    <div className="pb-6 flex-1 flex flex-col">
                                        {/* Category and Date */}
                                        <div className="flex items-center gap-3 mb-[1rem] my-[1rem]">
                                            <span className="px-3 py-1 text-xs font-medium text-white bg-gray-800 rounded-full">
                                                {insight.category}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {insight.date}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="xs:text-[1rem] md:!text-[1.25rem] font-bold text-gray-900 leading-tight mb-4 flex-1 line-clamp-3">
                                            <a href="#">{insight.title}</a>
                                        </h3>

                                        {/* Author and Read Time */}
                                        <div className="flex items-center justify-between text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <span>By</span>
                                                <span className=''>.</span>
                                                <span className="font-medium">{insight.author}</span>
                                            </div>
                                            {insight.readTime && (
                                                <div className="flex items-center gap-1">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                                                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
                                                        <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                                                    </svg>
                                                    <span>{insight.readTime}</span>
                                                </div>
                                            )}
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

export default InsightsSection