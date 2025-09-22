

"use client";
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import ButtonLink from '@/@core/components/button-link';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Flip);

type Props = {}

const TechnologySection: React.FC<Props> = ({ }) => {

    const [activeTab, setActiveTab] = useState('Web Platform');
    const contentRef = useRef<HTMLDivElement>(null);
    const frontsRef = useRef<HTMLDivElement | null>(null);
    const backsRef = useRef<HTMLDivElement | null>(null);

    // Initial animation on mount
    useEffect(() => {
        if (!frontsRef.current || !backsRef.current) return;

        const fronts = frontsRef.current.querySelectorAll('.tech-card');
        const backs = backsRef.current.querySelectorAll('.tech-card');
        const items = [...fronts, ...backs];

        // Set initial state
        gsap.set(items, {
            opacity: 0,
            y: 20,
            scale: 0.95
        });

        // Animate in
        gsap.to(items, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power1.out',
            stagger: 0.03,
            delay: 0.2
        });
    }, []);

    const tabs = [
        'Web Platform',
        'Database',
        'Cloud & DevOps',
        'Mobile apps'
    ];

    const technologies = {
        'Web Platform': {
            frontEnd: {
                developers: 44,
                techs: [
                    { name: 'TurboRepo', icon: '/images/pages/home/tech-stack/turborepo.png', label: '[TURBOREPO]' },
                    { name: 'GraphQL', icon: '/images/pages/home/tech-stack/graphql.png', label: '[GRAPHQL]' },
                    { name: 'React Hook Form', icon: '/images/pages/home/tech-stack/react-hook-form.png', label: '[REACT HOOK FORM]' },
                    { name: 'Ant Design', icon: '/images/pages/home/tech-stack/ant-design.png', label: '[ANT DESIGN]' },
                    { name: 'Material UI', icon: '/images/pages/home/tech-stack/material-ui.png', label: '[MATERIAL UI]' },
                    { name: 'React.js', icon: '/images/pages/home/tech-stack/reactjs.png', label: '[REACT.JS]' },
                    { name: 'REST API', icon: '/images/pages/home/tech-stack/rest-api.png', label: '[REST API]' },
                    { name: 'TypeScript', icon: '/images/pages/home/tech-stack/typescript.png', label: '[TYPESCRIPT]' }
                ]
            },
            backEnd: {
                developers: 55,
                techs: [
                    { name: 'Python', icon: '/images/pages/home/tech-stack/python.png', label: '[PYTHON DEVELOPMENT TEAM]' },
                    { name: 'Scala', icon: '/images/pages/home/tech-stack/scala.png', label: '[SCALA]' },
                    { name: 'Java', icon: '/images/pages/home/tech-stack/java.png', label: '[JAVA]' },
                    { name: 'Node.js', icon: '/images/pages/home/tech-stack/nodejs.png', label: '[NODE.JS]' },
                ]
            }
        },
        'Database': {
            frontEnd: {
                developers: 36,
                techs: [
                    { name: 'TurboRepo', icon: '/images/pages/home/tech-stack/turborepo.png', label: '[TURBOREPO]' },
                    { name: 'GraphQL', icon: '/images/pages/home/tech-stack/graphql.png', label: '[GRAPHQL]' },
                    { name: 'React Hook Form', icon: '/images/pages/home/tech-stack/react-hook-form.png', label: '[REACT HOOK FORM]' },
                    { name: 'Ant Design', icon: '/images/pages/home/tech-stack/ant-design.png', label: '[ANT DESIGN]' },
                    { name: 'Material UI', icon: '/images/pages/home/tech-stack/material-ui.png', label: '[MATERIAL UI]' },
                    { name: 'React.js', icon: '/images/pages/home/tech-stack/reactjs.png', label: '[REACT.JS]' },
                    { name: 'REST API', icon: '/images/pages/home/tech-stack/rest-api.png', label: '[REST API]' },
                    { name: 'TypeScript', icon: '/images/pages/home/tech-stack/typescript.png', label: '[TYPESCRIPT]' }
                ]
            },
            backEnd: {
                developers: 55,
                techs: [
                    { name: 'Python', icon: '/images/pages/home/tech-stack/python.png', label: '[PYTHON DEVELOPMENT TEAM]' },
                    { name: 'Scala', icon: '/images/pages/home/tech-stack/scala.png', label: '[SCALA]' },
                    { name: 'Java', icon: '/images/pages/home/tech-stack/java.png', label: '[JAVA]' },
                    { name: 'Node.js', icon: '/images/pages/home/tech-stack/nodejs.png', label: '[NODE.JS]' },
                ]
            }
        },
        'Cloud & DevOps': {
            frontEnd: {
                developers: 32,
                techs: [
                    { name: 'TurboRepo', icon: '/images/pages/home/tech-stack/turborepo.png', label: '[TURBOREPO]' },
                    { name: 'GraphQL', icon: '/images/pages/home/tech-stack/graphql.png', label: '[GRAPHQL]' },
                    { name: 'React Hook Form', icon: '/images/pages/home/tech-stack/react-hook-form.png', label: '[REACT HOOK FORM]' },
                    { name: 'Ant Design', icon: '/images/pages/home/tech-stack/ant-design.png', label: '[ANT DESIGN]' },
                    { name: 'Material UI', icon: '/images/pages/home/tech-stack/material-ui.png', label: '[MATERIAL UI]' },
                    { name: 'React.js', icon: '/images/pages/home/tech-stack/reactjs.png', label: '[REACT.JS]' },
                    { name: 'REST API', icon: '/images/pages/home/tech-stack/rest-api.png', label: '[REST API]' },
                    { name: 'TypeScript', icon: '/images/pages/home/tech-stack/typescript.png', label: '[TYPESCRIPT]' }
                ]
            },
            backEnd: {
                developers: 55,
                techs: [
                    { name: 'Python', icon: '/images/pages/home/tech-stack/python.png', label: '[PYTHON DEVELOPMENT TEAM]' },
                    { name: 'Scala', icon: '/images/pages/home/tech-stack/scala.png', label: '[SCALA]' },
                    { name: 'Java', icon: '/images/pages/home/tech-stack/java.png', label: '[JAVA]' },
                    { name: 'Node.js', icon: '/images/pages/home/tech-stack/nodejs.png', label: '[NODE.JS]' },
                ]
            }
        },
        'Mobile apps': {
            frontEnd: {
                developers: 23,
                techs: [
                    { name: 'TurboRepo', icon: '/images/pages/home/tech-stack/turborepo.png', label: '[TURBOREPO]' },
                    { name: 'GraphQL', icon: '/images/pages/home/tech-stack/graphql.png', label: '[GRAPHQL]' },
                    { name: 'React Hook Form', icon: '/images/pages/home/tech-stack/react-hook-form.png', label: '[REACT HOOK FORM]' },
                    { name: 'Ant Design', icon: '/images/pages/home/tech-stack/ant-design.png', label: '[ANT DESIGN]' },
                    { name: 'Material UI', icon: '/images/pages/home/tech-stack/material-ui.png', label: '[MATERIAL UI]' },
                    { name: 'React.js', icon: '/images/pages/home/tech-stack/reactjs.png', label: '[REACT.JS]' },
                    { name: 'REST API', icon: '/images/pages/home/tech-stack/rest-api.png', label: '[REST API]' },
                    { name: 'TypeScript', icon: '/images/pages/home/tech-stack/typescript.png', label: '[TYPESCRIPT]' }
                ]
            },
            backEnd: {
                developers: 55,
                techs: [
                    { name: 'Python', icon: '/images/pages/home/tech-stack/python.png', label: '[PYTHON DEVELOPMENT TEAM]' },
                    { name: 'Scala', icon: '/images/pages/home/tech-stack/scala.png', label: '[SCALA]' },
                    { name: 'Java', icon: '/images/pages/home/tech-stack/java.png', label: '[JAVA]' },
                    { name: 'Node.js', icon: '/images/pages/home/tech-stack/nodejs.png', label: '[NODE.JS]' },
                ]
            }
        }
    };

    const handleTabChange = (newTab: string) => {
        if (newTab === activeTab) return;

        setActiveTab(newTab);


    };

    useGSAP(() => {
        if (!frontsRef.current || !backsRef.current) return;
        const currentItems = document.querySelectorAll('.tech-card');
        gsap.to(currentItems, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 0.25,
            ease: 'power1.in',
            stagger: 0.02,
        });
    }, [activeTab])

    return (
        <div className="technology-section bg-white text-black  xs:py-[3rem] sm:!py-[5rem] xl:!py-[10rem]">
            <MainWrapper>
                {/* Block 1: Header */}
                <div className="flex xs:flex-col lg:!flex-row items-center justify-between xs:pb-6 lg:!pb-12 border-b border-solid border-gray-200">
                    <h3 className="section-subtitle self-start">
                        Technologies We Use
                    </h3>
                    <h2 className="section-title !text-black xs:my-4 lg:!my-0">
                        Technology stack
                    </h2>
                    <ButtonLink
                        cls="inline-flex items-center gap-2  xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300"
                        name="DISCOVER MORE"
                        link="/technologies"
                        color="#ffffff"
                        size={20}
                    />
                </div>

                <div className="tech-content flex xs:flex-col lg:!flex-row xs:gap-2 lg:!gap-8">
                    <div className="tech-nav flex-shrink-0 flex-1  xs:p-[1.25rem] sm:!p-[2rem] lg:!p-[3rem] xs:border-r lg:!border-r  border-solid border-gray-200">
                        <div className="relative flex flex-col">
                            <div
                                className="absolute left-0 w-[0.25rem] h-[2rem] bg-primary-600 rounded-full transition-all duration-300 ease-out"
                                style={{
                                    top: `${(tabs.findIndex(tab => tab === activeTab) * 40) + 4}px`,
                                }}
                            />
                            {tabs.map((tab, index) => (
                                <div
                                    key={tab}
                                    className={clsx(
                                        'cursor-pointer py-[0.75rem] text-[1rem] leading-[1rem] font-medium transition-all duration-300 ',
                                        {
                                            'text-black pl-4': activeTab === tab,
                                            'text-gray-500 hover:text-black': activeTab !== tab
                                        }
                                    )}
                                    onClick={() => handleTabChange(tab)}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tech-grid flex-[3] xs:p-[1.25rem] sm:!p-[2rem] lg:!p-[3rem]" ref={contentRef}>
                        {/* Front-End Section */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <h3 className="xs:text-[1.5rem] md:!text-[2.5rem] font-bold text-black">Front-End</h3>
                                <span className="h-[1.5rem] py-1 px-2 border border-solid border-gray-400 flex items-center justify-center text-black text-[0.75rem] font-medium uppercase rounded-full">
                                    {technologies[activeTab].frontEnd.developers} DEVELOPERS
                                </span>
                            </div>
                            <div className="grid xs:grid-cols-2 sm:!grid-cols-3 md:!grid-cols-4 lg:!grid-cols-3 gap-4" ref={frontsRef}>
                                {technologies[activeTab].frontEnd.techs.map((tech, index) => (
                                    <div
                                        key={`${activeTab}-frontend-${index}`}
                                        className="tech-card bg-gray-50 rounded-xl p-4 flex flex-row items-center justify-between text-center hover:bg-white hover:cursor-crosshair  transition-all duration-300 translate-y-[-30px] scale-[0.65] opacity-0 rotate-[3deg]"
                                    >
                                        <div className="tech-icon flex items-center justify-center w-[4rem] h-[4rem] mb-3">
                                            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = '/images/pages/home/tech-stack/scala.png'; }} />
                                        </div>
                                        <div className="tech-label text-xs text-gray-600 font-medium tracking-wider">
                                            {tech.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Back-End Section */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <h3 className="xs:text-[1.5rem] md:!text-[2.5rem] font-bold text-black">Back-End</h3>
                                <span className="h-[1.5rem] py-1 px-2 border border-solid border-gray-400 flex items-center justify-center text-black text-[0.75rem] font-medium uppercase rounded-full">
                                    {technologies[activeTab].backEnd.developers} DEVELOPERS
                                </span>
                            </div>
                            <div className="grid xs:grid-cols-2 sm:!grid-cols-3 md:!grid-cols-4 lg:!grid-cols-3 gap-4" ref={backsRef}>
                                {technologies[activeTab].backEnd.techs.map((tech, index) => (
                                    <div
                                        key={`${activeTab}-backend-${index}`}
                                        className="tech-card bg-gray-50 rounded-xl p-4 flex flex-row items-center justify-between text-center hover:bg-white hover:cursor-crosshair transition-all duration-300 translate-y-[-30px] scale-[0.65] opacity-0 rotate-[3deg] gap-4"
                                    >
                                        <div className="tech-icon flex items-center justify-center w-[4rem] h-[4rem] mb-3">
                                            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = '/images/pages/home/tech-stack/scala.png'; }} />
                                        </div>
                                        <div className="tech-label text-xs text-gray-600 font-medium tracking-wider">
                                            {tech.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </div>
    )
}

export default TechnologySection