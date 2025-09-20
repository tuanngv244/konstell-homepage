
"use client";
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useState } from 'react';
import gsap from 'gsap';
import ButtonLink from '@/@core/components/button-link';

type Props = {}


const ServiceSection: React.FC<Props> = ({ }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        {
            name: 'Software',
            offices: [
                'Chicago', 'New York', 'Houston'
            ],
            services: ['IT Consulting',
                'Custom Software Development',
                'Cloud Solutions',],
            desc: 'Streamline all your interactions with customers through the launch of an individual CRM system made by Konstell',
            link: ''
        }, {
            name: 'Web Development',
            offices: [
                'Chicago', 'New York', 'Houston'
            ],
            services: ['IT Consulting',
                'Custom Software Development',
                'Cloud Solutions',],
            desc: 'Streamline all your interactions with customers through the launch of an individual CRM system made by Konstell',
            link: ''
        }, {
            name: 'Mobile App Development',
            offices: [
                'Chicago', 'New York', 'Houston'
            ],
            services: ['IT Consulting',
                'Custom Software Development',
                'Cloud Solutions',],
            desc: 'Streamline all your interactions with customers through the launch of an individual CRM system made by Konstell',
            link: ''
        }, {
            name: 'Data Science & AI',
            offices: [
                'Chicago', 'New York', 'Houston'
            ],
            services: ['IT Consulting',
                'Custom Software Development',
                'Cloud Solutions',],
            desc: 'Streamline all your interactions with customers through the launch of an individual CRM system made by Konstell',
            link: ''
        }, {
            name: 'QA &  Software Testing',
            offices: [
                'Chicago', 'New York', 'Houston'
            ],
            services: ['IT Consulting',
                'Custom Software Development',
                'Cloud Solutions',],
            desc: 'Streamline all your interactions with customers through the launch of an individual CRM system made by Konstell',
            link: ''
        }
        , {
            name: 'UX/UI Design',
            offices: [
                'Chicago', 'New York', 'Houston'
            ],
            services: ['IT Consulting',
                'Custom Software Development',
                'Cloud Solutions',],
            desc: 'Streamline all your interactions with customers through the launch of an individual CRM system made by Konstell',
            link: ''
        }
    ]

    const onActiveItem = (index: number) => {
        setActiveIndex(prev => prev === index ? -1 : index);
        const serviceItem = document.querySelector(`.service-item-${index}`) as HTMLElement;
        const offs = serviceItem.querySelectorAll('.office') as NodeListOf<HTMLElement>;
        const svcs = serviceItem.querySelectorAll('.service') as NodeListOf<HTMLElement>;
        const desc = serviceItem.querySelector('.desc') as HTMLElement;
        const link = serviceItem.querySelector('.link') as HTMLElement;
        const tl = gsap.timeline();
        tl.fromTo(offs, {
            opacity: 0,
            x: 20,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.1,
        }).fromTo(svcs, {
            opacity: 0,
            x: 20,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.1,
        }, '-=0.5').fromTo(desc, {
            opacity: 0,
            x: 10,
            duration: 0.3
        }, {
            opacity: 1,
            x: 0,
        }).fromTo(link, {
            opacity: 0,
            x: 10,
            duration: 0.3
        }, {
            opacity: 1,
            x: 0,
        });

    }


    return (
        <div className="service-section bg-white xs:py-[3rem] sm:py-[5rem] xl:!py-[10rem]">
            <MainWrapper>
                <h3 className="section-subtitle mb-[1rem]">
                    Our Expertise
                </h3>
                <div className="inner flex xs:flex-col sm:!flex-row items-start xs:gap-y-4 sm:!gap-y-0 xs:gap-x-0 sm:!gap-x-4">
                    <div className="inner__left flex-[2]">
                        <img src="/images/pages/home/service-img.png" />
                    </div>
                    <div className="inner__right flex-[3]">
                        <ul className="flex flex-col xs:gap-4 sm:!gap-8">
                            {
                                data.map(({ name, offices, services, desc, link }, index) => (
                                    <li key={index} className={clsx('flex items-start gap-2', {
                                        [`service-item-${index}`]: true,
                                    })}>
                                        <p className="num text-[1rem] font-medium leading-5 text-gray-600">
                                            {index < 9 ? `0${index + 1}` : index + 1}/
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <h5 className={clsx('xs:text-[2rem] sm:!text-[3rem] xl:!text-[3.75rem] xs:leading-[2.5rem] sm:leading-[3.25rem] xl:!leading-[3.75rem] font-[700] text-black transition-all cursor-pointer user-select-none ', {
                                                'text-gradient': activeIndex === index,
                                            })} onClick={() => onActiveItem(index)}>{name}</h5>
                                            <div className={clsx(' content overflow-hidden flex flex-col  gap-4 h-0 transition-all duration-300', {
                                                'xs:h-[250px] sm:!h-[200px]': activeIndex === index,
                                            })}>
                                                <div className="tags flex items-center gap-2">
                                                    {offices.map((office, idx) => (
                                                        <div key={idx} className="tags__item office min-h-[2.5rem] text-[0.875rem] leading-[1rem] uppercase text-white py-[0.75rem] px-[1.5rem] rounded-[2.5rem] bg-gradient-primary flex items-center justify-center">{office}</div>
                                                    ))}
                                                </div>
                                                <div className="tags flex items-center gap-2 flex-wrap">
                                                    {services.map((service, idx) => (
                                                        <div key={idx} className="tags__item service min-h-[2.5rem] flex items-center justify-center text-[0.875rem] leading-[1rem] uppercase text-black py-[0.5rem] px-[0.75rem] rounded-[2.5rem] bg-white border font-medium border-solid border-gray-500">{service}</div>
                                                    ))}
                                                </div>
                                                <div className="desc xs:max-w-full sm:!max-w-[80%] text-[1rem] leading-[1.25rem] text-gray-600 font-[400]">
                                                    {desc}
                                                </div>
                                                <ButtonLink cls="mt-[0.625rem] text-[0.875rem] leading-[1rem] uppercase font-[500] text-black relative hover-line" name='Learn More' link={link} color='#000000' size={16} />
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </MainWrapper>
        </div>
    )
}

export default ServiceSection