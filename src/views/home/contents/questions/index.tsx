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

const QuestionsSection: React.FC<Props> = ({ }) => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(0);

    const questions = [
        {
            question: "Does Wezom cover all software development life-cycle (SDLC) phases?",
            answer: "Providing end-to-end workflows with full SDLC handling is one of the main takeaways of our software development company. With over 275 highly skilled IT specialists – consultants, architects, programmers, data experts, cybersecurity specialists, DevOps experts, and QA professionals – we can safely and flexibly manage each project aspect, from discovery and requirements forming to software design, development, deployment, and ongoing support."
        },
        {
            question: "How quickly can Wezom deliver a custom software solution?",
            answer: "Project delivery timelines vary depending on complexity, scope, and specific requirements. Typically, simple projects can be delivered in 2-3 months, while more complex enterprise solutions may take 6-12 months. We provide detailed timeline estimates during the discovery phase."
        },
        {
            question: "How does Wezom guarantee the quality of new software products?",
            answer: "We implement comprehensive quality assurance processes including automated testing, code reviews, continuous integration, and rigorous QA testing at every development stage. Our experienced QA team ensures all deliverables meet the highest industry standards."
        },
        {
            question: "How much does it cost to employ Wezom's software development expertise?",
            answer: "Our pricing is flexible and depends on project scope, complexity, technology stack, and timeline. We offer various engagement models including fixed-price projects, time & materials, and dedicated team arrangements to best fit your budget and requirements."
        },
        {
            question: "In which cities do you carry out the Full-cycle Software Development?",
            answer: "We provide full-cycle software development services globally, with our main development centers located in major tech hubs. Our distributed team model allows us to serve clients worldwide while maintaining consistent quality and communication standards."
        }
    ];

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="questions-section bg-white text-black xs:py-[3rem] sm:py-[5rem] xs:border-t lg:!border-transparent border-solid border-gray-200">
            <MainWrapper>
                <div className="inner flex xs:flex-col lg:!flex-row items-stretch xs:gap-4 md:!gap-8">
                    {/* Block 1: Left Side - Title and CTA */}
                    <div className="inner__left lg:min-w-[45%] xs:p-[1.25rem] lg:!p-[2.5rem] xs:pr-0 lg:!pr-8">
                        <div className="">
                            <h3 className="section-subtitle text-black mb-4">
                                CHECK OUT SOME OF THE MOST COMMON QUESTIONS ASKED BY THE CLIENTS
                            </h3>
                            <h2 className="section-title !text-black xs:mb-6 lg:!mb-8">
                                Questions about our<br />
                                Software Development<br />
                                Services
                            </h2>
                            <ButtonLink
                                cls="inline-flex items-center gap-2 xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300"
                                name="GET IN TOUCH"
                                link="/contact"
                                color="#ffffff"
                                size={20}
                            />
                        </div>
                    </div>

                    {/* Block 2: Right Side - FAQ Accordion */}
                    <div className="inner__right flex-1 xs:p-[1.25rem] lg:!p-[2.5rem] xs:px-0 lg:!pl-8">
                        <div className="space-y-4">
                            {questions.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300  "
                                >
                                    <button
                                        className=" w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                                        onClick={() => toggleQuestion(index)}
                                    >
                                        <h3 className="group-hover:text-white text-[1.125rem] font-[600] text-black pr-4 leading-tight transition-all duration-300">
                                            {item.question}
                                        </h3>
                                        <div className="flex-shrink-0 ml-4">
                                            <div className={clsx(
                                                "w-8 h-8 group-hover:bg-white bg-black rounded-full flex items-center justify-center transition-transform rotate-[-45deg] duration-300",
                                                {
                                                    "!rotate-[135deg]": openQuestion === index
                                                }
                                            )}>
                                                <HeroIcons.ArrowRight size={24} pathProps={{
                                                    className: 'fill-white group-hover:fill-black'
                                                }} />
                                            </div>
                                        </div>
                                    </button>
                                    <div className={clsx(
                                        "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                                        {
                                            "max-h-96 pb-6": openQuestion === index,
                                            "max-h-0": openQuestion !== index
                                        }
                                    )}>
                                        <div className="border-t border-gray-200 pt-4">
                                            <p className="text-gray-700 text-[0.875rem] leading-relaxed">
                                                {item.answer}
                                            </p>
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

export default QuestionsSection