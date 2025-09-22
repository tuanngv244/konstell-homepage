

"use client";
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ButtonLink from '@/@core/components/button-link';

type Props = {}

const ModelManagementSection: React.FC<Props> = ({ }) => {
    const [activeTab, setActiveTab] = useState('Discovery Phase');
    const contentRef = useRef<HTMLDivElement>(null);

    const phases = [
        'Discovery Phase',
        'UX/UI Design',
        'Web development',
        'Mobile Development',
        'AWS & Cloud consulting',
        'Test Automation',
        'Product-to-market launch'
    ];

    const phaseContent = {
        'Discovery Phase': {
            number: '01',
            title: 'Discovery Phase',
            description: 'Realizing the importance of a firm workflow foundation firsthand, we dedicate a separate chunk of work to researching, studying, and understanding your business\'s core needs and vision for a desired product or service.',
            features: [
                'Analyzing niches, competitors, & requirements',
                'Strategizing time and cost-efficient workflows',
                'Aiming for individually optimized results'
            ]
        },
        'UX/UI Design': {
            number: '02',
            title: 'UX/UI Design',
            description: 'Our design team creates intuitive and engaging user experiences through comprehensive research, wireframing, and prototyping to ensure your product resonates with your target audience.',
            features: [
                'User research and persona development',
                'Interactive prototypes and wireframes',
                'Design systems and style guides'
            ]
        },
        'Web development': {
            number: '03',
            title: 'Web Development',
            description: 'We build scalable, secure, and high-performance web applications using modern technologies and best practices to deliver exceptional digital experiences.',
            features: [
                'Modern framework implementation',
                'Responsive and mobile-first design',
                'Performance optimization and SEO'
            ]
        },
        'Mobile Development': {
            number: '04',
            title: 'Mobile Development',
            description: 'From native iOS and Android apps to cross-platform solutions, we create mobile applications that provide seamless user experiences across all devices.',
            features: [
                'Native and cross-platform development',
                'App store optimization and deployment',
                'Integration with device capabilities'
            ]
        },
        'AWS & Cloud consulting': {
            number: '05',
            title: 'AWS & Cloud Consulting',
            description: 'We help businesses leverage cloud technologies to improve scalability, reduce costs, and enhance security through comprehensive cloud strategy and implementation.',
            features: [
                'Cloud architecture and migration',
                'Infrastructure as code implementation',
                'Cost optimization and monitoring'
            ]
        },
        'Test Automation': {
            number: '06',
            title: 'Test Automation',
            description: 'Our quality assurance team implements comprehensive testing strategies to ensure your software is reliable, secure, and performs optimally under all conditions.',
            features: [
                'Automated testing framework setup',
                'Continuous integration and deployment',
                'Performance and security testing'
            ]
        },
        'Product-to-market launch': {
            number: '07',
            title: 'Product-to-Market Launch',
            description: 'We guide you through the entire launch process, from pre-launch preparation to post-launch support, ensuring your product successfully reaches and engages your target market.',
            features: [
                'Launch strategy and planning',
                'Marketing and promotion support',
                'Post-launch monitoring and optimization'
            ]
        }
    };


    const handleTabChange = (newTab: string) => {
        if (newTab === activeTab) return;

        if (!contentRef.current) return;
        const elements = contentRef.current.querySelectorAll('.animate-item');
        const diagram = contentRef.current.querySelectorAll('.diagram');

        gsap.to(diagram, {
            opacity: 0,
            y: -20,
            rotate: -20,
            scale: 0.6,
            duration: 0.2,
            ease: 'power1.in',
            stagger: 0.05,
        });
        gsap.to(elements, {
            opacity: 0,
            y: 20,
            scale: 0.95,
            duration: 0.2,
            ease: 'power1.in',
            stagger: 0.05,
            onComplete: () => {
                setActiveTab(newTab);

                setTimeout(() => {
                    if (!contentRef.current) return;

                    const newElements = contentRef.current.querySelectorAll('.animate-item');
                    const newDiagram = contentRef.current.querySelectorAll('.diagram');

                    gsap.to(newElements,
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.3,
                            ease: 'power1.out',
                            stagger: 0.1
                        }
                    );
                    gsap.to(newDiagram, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotate: 0
                    })
                }, 50);
            }
        });
    };

    return (
        <div className="model-management-section bg-black text-white xs:py-[3rem] sm:!py-[5rem] xl:!py-[10rem]">
            <MainWrapper>
                <div className="text-center xs:mb-8 md:!mb-16">
                    <div className="flex xs:flex-col lg:!flex-row items-center">
                        <div className="xs:mb-6 lg:!mb-0 flex-[2]">
                            <h3 className="section-subtitle before:!bg-white !text-white mb-4 xs:text-left lg:!text-left xs:justify-center lg:!justify-start">
                                AGILE PROJECT MANAGEMENT
                            </h3>
                            <h2 className="section-title same-line-height text-white xs:text-center lg:!text-left">
                                How we build the<br />software development<br />process
                            </h2>
                        </div>
                        <div className="xs:text-center lg:!text-left flex-1">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-md">
                                We'll turn your custom tech solutions into powerful brands by crafting unique customer experiences at every digital touchpoint with:
                            </p>
                            <ButtonLink
                                cls="inline-flex items-center gap-2 xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300"
                                name="HOW WE WORK"
                                link="/how-we-work"
                                color="#ffffff"
                                size={20}
                            />
                        </div>
                    </div>
                </div>

                {/* Block 2 & 3: Navigation and Content */}
                <div className="inner border-t border-solid border-gray-600 flex xs:flex-col lg:!flex-row items-stretch">
                    {/* Left Side - Navigation */}
                    <div className="inner__left lg:min-w-[350px] xs:p-[1.25rem] lg:!p-[2.5rem] xs:border-transparent lg:border-r border-solid md:!border-gray-600">
                        <div className="relative">
                            {/* Active phase indicator */}
                            <div
                                className="absolute left-0 w-[0.25rem] h-[2rem] bg-primary-600 rounded-full transition-all duration-300 ease-out"
                                style={{
                                    top: `${(phases.findIndex(phase => phase === activeTab) * 40) + 4}px`,
                                }}
                            />
                            {phases.map((phase, index) => (
                                <div
                                    key={phase}
                                    className={clsx(
                                        'cursor-pointer py-[0.75rem] text-[1rem] leading-[1rem] font-medium transition-all duration-300',
                                        {
                                            'text-gradient pl-4': activeTab === phase,
                                            'text-gray-400 hover:text-white': activeTab !== phase
                                        }
                                    )}
                                    onClick={() => handleTabChange(phase)}
                                >
                                    {phase}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="inner__right flex-[3] xs:p-[1rem] lg:!p-[2.5rem] 2xl:!p-[3.5rem]">
                        <div className="flex xs:flex-col lg:!flex-row items-center  xs:gap-4 md:!gap-12" ref={contentRef}>
                            <div className='flex-1 diagram xs:p-[1.5rem] xs:max-w-[300px] lg:!max-w-auto lg:!p-0'><img src="/images/pages/home/model-management/model-1.png" alt="" /></div>

                            {/* Right Content */}
                            <div className="flex-[2] animate-item">
                                <div className="flex flex-row items-center xs:gap-4 md:!gap-4 mb-4">
                                    <h3 className=" xs:text-[3rem] sm:!text-[4rem] md:!text-[5rem] lg:!text-[5rem] font-bold text-primary-600">
                                        {phaseContent[activeTab].number}/
                                    </h3>
                                    <h4 className="xs:text-[1.5rem] md:!text-[2.5rem] font-bold text-white ">
                                        {phaseContent[activeTab].title}
                                    </h4>
                                </div>

                                <p className="text-gray-300 text-[1rem] leading-relaxed mb-8 animate-item">
                                    {phaseContent[activeTab].description}
                                </p>

                                <div className="space-y-4 animate-item">
                                    {phaseContent[activeTab].features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                                                    <path d="M1 4.5L4 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-300 text-[1rem]">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </div>
    )
}

export default ModelManagementSection