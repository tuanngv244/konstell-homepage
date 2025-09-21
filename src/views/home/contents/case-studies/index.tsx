
"use client";
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useState } from 'react';
import gsap from 'gsap';
import ButtonLink from '@/@core/components/button-link';
import Card from './Card';

type Props = {}

const CaseStudiesSection: React.FC<Props> = ({ }) => {

    const [activeFilter, setActiveFilter] = useState<string[]>([]);

    const services = [
        'QA & SOFTWARE TESTING',
        'WEB & MOBILE DEVELOPMENT',
        'CUSTOM SOFTWARE',
        'PRODUCT DESIGN',
        'UX/UI DESIGN',
        'WEB DEVELOPMENT',
        'MOBILE APP'
    ];

    const caseStudies = [
        {
            industry: 'LOGISTICS (TRANSPORTATION), MANUFACTURING',
            name: 'Interpipe: International tender platform',
            desc: 'We created a reliable platform for transportation online tenders.',
            link: '/case-studies/interpipe',
            image: '/images/pages/home/case-studies/case-img-1.jpg',
            types: ['UX/UI DESIGN', 'CUSTOM SOFTWARE']
        },
        {
            industry: 'LOGISTICS (TRANSPORTATION), MANUFACTURING',
            name: 'Interpipe: International tender platform',
            desc: 'We created a reliable platform for transportation online tenders.',
            link: '/case-studies/interpipe',
            image: '/images/pages/home/case-studies/case-img-1.jpg',
            types: ['UX/UI DESIGN', 'CUSTOM SOFTWARE']
        },
        {
            industry: 'LOGISTICS (TRANSPORTATION), MANUFACTURING',
            name: 'Interpipe: International tender platform',
            desc: 'We created a reliable platform for transportation online tenders.',
            link: '/case-studies/interpipe',
            image: '/images/pages/home/case-studies/case-img-1.jpg',
            types: ['UX/UI DESIGN', 'CUSTOM SOFTWARE']
        },
        {
            industry: 'LOGISTICS (TRANSPORTATION), MANUFACTURING',
            name: 'Interpipe: International tender platform',
            desc: 'We created a reliable platform for transportation online tenders.',
            link: '/case-studies/interpipe',
            image: '/images/pages/home/case-studies/case-img-1.jpg',
            types: ['UX/UI DESIGN', 'CUSTOM SOFTWARE']
        },

    ]

    return (
        <div className="case-studies-section bg-black rounded-3xl overflow-hidden text-white xs:py-[3rem] sm:py-[5rem] xl:!py-[10rem]">
            <MainWrapper>
                <div className="flex xs:flex-col sm:!flex-row items-start justify-between xs:mb-4 sm:!mb-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-sm font-medium tracking-wider">CASE STUDIES</span>
                        </div>
                        <h2 className="section-title">
                            Case Studies
                        </h2>
                    </div>
                    <div className="xs:mt-6 sm:!mt-0 flex-1 flex flex-col items-start xs:gap-3 sm:!gap-6">
                        <div className="flex flex-wrap gap-3 justify-start">
                            {services.map((category, index) => (
                                <button
                                    key={index}
                                    className={clsx(
                                        'px-4 py-2  xs:text-[0.75rem] sm:!text-[0.875rem] font-medium leading-[1rem] tracking-wider rounded-full border transition-all duration-300',
                                        {
                                            'bg-white text-black border-white': activeFilter.includes(category),
                                            'bg-transparent text-white border-gray-800 hover:border-white': !activeFilter.includes(category)
                                        }
                                    )}
                                    onClick={() => {
                                        activeFilter.includes(category) ?
                                            setActiveFilter(activeFilter.filter(item => item !== category))
                                            : setActiveFilter([...activeFilter, category]);
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="xs:mt-2 sm:!mt-4">
                            <ButtonLink
                                cls="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all  duration-300"
                                name='ALL CASES'
                                link="/case-studies"
                                color='#ffffff'
                                size={16}
                            />
                        </div>
                    </div>
                </div>

                {/* Case Studies Cards */}
                <div className="xs:mt-8 sm:!mt-16">
                    <div className="grid xs:gap-8 md:!gap-12">
                        {caseStudies.map((caseStudy, index) => (
                            <Card key={index} data={caseStudy} />
                        ))}
                    </div>
                </div>
            </MainWrapper>
        </div>
    )
}

export default CaseStudiesSection