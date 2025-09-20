import { ICaseStudy } from "@/@core/types/home";
import ButtonLink from "@/@core/components/button-link";

type Props = {
    data: ICaseStudy
}

const Card: React.FC<Props> = ({ data }) => {
    const { industry, name, desc, image, link, types } = data;

    return (
        <div className="card bg-gray-900 rounded-2xl overflow-hidden xs:p-6 sm:!p-8 flex items-center justify-between xs:flex-col sm:!flex-row min-h-[400px] relative xs:pl-[1.5rem] sm:!pl-[3rem] xl:!pl-[5rem]">
            <div className="flex-1 pr-8 z-10 h-full flex flex-col justify-between">
                <div className="content">
                    <div className="mb-6">
                        <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
                            {industry}
                        </span>
                    </div>
                    <h3 className="text-white text-3xl lg:text-4xl font-bold leading-tight mb-4">
                        {name}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed xs:mb-4 sm:!mb-8">
                        {desc}
                    </p>
                </div>
                <div className="xs:mt-0 sm:!mt-8">
                    <ButtonLink
                        cls="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-white text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300 hover:!border-gray-600 hover:bg-gray-600 hover:text-white"
                        name="VIEW CASE STUDY"
                        link={link}
                        color="#ffffff"
                        size={16}
                    />
                </div>
            </div>

            <div className="flex-1 relative xs:mt-8 sm:!mt-0">
                <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2">
                    {types.map((type, index) => (
                        <div
                            key={index}
                            className="px-3 py-1 bg-black bg-opacity-70 text-white text-xs font-medium tracking-wider rounded-full border border-gray-600"
                        >
                            {type}
                        </div>
                    ))}
                </div>

                <div className="relative rounded-xl overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-auto cursor-crosshair hover:scale-[1.1] hover:rotate-[3deg] transition-all duration-500 object-cover rounded-xl"
                    />


                </div>
            </div>
        </div>
    )
}

export default Card;