

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

const AwardsSection: React.FC<Props> = ({ }) => {


    const awards = [
        {
            id: 1,
            title: "2023 AWARD-WINNING COMPANY",
            logo: "/images/pages/home/awards/techbehemoth.png",
            organization: "TECHBEHEMOTHS 2023",
            description: "2023 Award-Winning Company"
        },
        {
            id: 2,
            title: "INC. 5000 2024",
            logo: "/images/pages/home/awards/inc-5000.png",
            organization: "Inc. 5000",
            description: "INC. 5000 2024"
        },
        {
            id: 3,
            title: "BEST OF 2024 SOFTWARE COMPANY SCHAUMBURG, IL",
            logo: "/images/pages/home/awards/business-race.png",
            organization: "Business Excellence",
            description: "Best of 2024 Software Company Schaumburg, IL"
        },
        {
            id: 4,
            title: "FORBES COUNCIL",
            logo: "/images/pages/home/awards/forbes.png",
            organization: "Forbes",
            description: "Forbes Council"
        },
        {
            id: 5,
            title: "TOP USA AWARDS",
            logo: "/images/pages/home/awards/top-usa.png",
            organization: "Top USA",
            description: "Top USA Awards"
        },
        {
            id: 6,
            title: "USAID",
            logo: "/images/pages/home/awards/usaid.png",
            organization: "USAID",
            description: "USAID"
        }
    ];

    return (
        <div className="awards-section bg-white text-black xs:pb-[3rem] xl:!pb-[5rem]">
            <MainWrapper>
                <h3 className="flex-1 section-subtitle mb-[1rem]">
                    AWARDS & CERTIFICATES
                </h3>
                <div className="text-center xs:mb-4 md:!mb-12">
                    <h2 className="xs:text-[1.5rem] sm:!text-[2.5rem] md:!text-[3rem] xs:leading-[2rem] sm:!leading-[3.25rem] md:!leading-[3.5rem] font-[700]
                    !text-black">
                        <span className='xs:hidden md:!block' >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> We've Been Awarded Plenty for<br />the Milestones We Have Achieved
                    </h2>
                </div>

                {/* Awards Grid */}
                <div className="awards-grid grid xs:grid-cols-2 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-6 gap-2">
                    {awards.map((award, index) => (
                        <div
                            key={award.id}
                            className="award-card bg-gray-300 rounded-2xl xs:p-[1.25rem] sm:!py-[1rem] sm:!px-[2rem] flex flex-col  items-center justify-between text-center hover:bg-white min-h-[270px] transition-all duration-300 cursor-crosshair"
                        >
                            {/* Award Logo */}
                            <div className="flex-[2] award-logo h-20 flex items-center justify-center">
                                <img
                                    src={award.logo}
                                    alt={award.organization}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Award Info */}
                            <div className="award-info flex-1 justify-end items-end flex flex-col">
                                <div className="text-[0.875rem] font-medium leading-[1.125rem] text-gray-600 uppercase tracking-wider mb-2">
                                    {award.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MainWrapper>
        </div>
    )
}

export default AwardsSection