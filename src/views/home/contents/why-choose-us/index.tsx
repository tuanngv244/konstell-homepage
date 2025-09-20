
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
                <div className="flex items-start">
                    <h3 className="flex-1 section-subtitle mb-[1rem]">
                        Why choose us?
                    </h3>
                    <h2 className="flex-[4] section-title !text-black">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Konstell is a software engineering company that specializes in delivering high-quality solutions to clients worldwide.
                    </h2>
                </div>

            </MainWrapper>
        </div>
    )
}

export default WhyChooseUsSection