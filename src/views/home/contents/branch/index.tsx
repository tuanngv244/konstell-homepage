
"use client";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

type Props = {}


const BranchSection: React.FC<Props> = ({ }) => {

    const data = Array.from({ length: 16 }).map((_, i) => ({
        src: '/images/pages/home/branchs/lotte.png',
        name: 'Lotte'
    }))

    return (
        <Splide
            options={{
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 6,
                arrows: false,
                pagination: false,
                autoScroll: {
                    speed: 1,
                },
                breakpoints: {
                    1024: {
                        perPage: 4
                    },
                    640: {
                        perPage: 2
                    }
                }

            }}
            extensions={{ AutoScroll }}
            className="logo-marquee bg-white border-b border-solid border-b-gray-200 py-5"
        >
            {data.map((logo, index) => (
                <SplideSlide className="flex items-center justify-center" key={index}>
                    <img src={logo.src} alt={logo.name} className="logo-img w-[200px] h-auto" />
                </SplideSlide>
            ))}
        </Splide>
    )
}

export default BranchSection