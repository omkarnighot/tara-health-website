import { Box } from "@mui/material"
import PricingSection from "./PricingSection"
import { BulletPoint } from "./ChatWithUsSection"

const foundersWordsBullets = [
    "Nutrition: Fuels our body and provides the energy needed for daily activities.",
    "Exercise: Keeps us strong, active, and physically healthy.",
    "Mental Health: Helps us stay resilient and cope with challenges.",
    "Quality Sleep: Ensures recovery and regeneration of the body and mind.",
    "Stress Management: Prevents chronic health issues and promotes balance",
    "Meaningful Connections: Enrich our lives emotionally and socially."
]


const FoundersWords = () => {
    return (
        <Box className="flex flex-col w-3/4 gap-10 justify-center items-center">
            <Box className="flex flex-col md:flex-row items-center">
                <Box className="flex flex-col gap-10 lg:w-3/5">
                    <span>
                        Hi, I am Vaishnavi Baravkar, a certified Clinical nutritionist, passionate about helping individuals achieve their healthiest, happiest selves. I believe that true health goes beyond just eating nutritious food—it’s about embracing a holistic approach to wellness. This includes balanced nutrition, regular physical activity, mental well-being, proper sleep, stress management, and fostering positive relationships.
                    </span>
                    <span>
                        Each of these aspects plays a vital role in our overall well-being,
                    </span>
                    <Box className="flex flex-col gap-3">
                        {foundersWordsBullets.map(bullet =>
                            <BulletPoint
                                text={bullet}
                                iconUrl="Ellipse.svg"
                                imageClassName="!h-8"
                            />)}
                    </Box>
                </Box>
                <Box className="h-full w-1/2 lg:w-1/3 2xl:w-1/4 p-5 relative hidden lg:block">
                    <img src="circles.svg" className="absolute bottom-5 left-5 z-0"></img>
                    <img src="founder2.jpeg" className="absolute bottom-0 z-50 rounded-3xl shadow-xl"></img>
                </Box>
            </Box>
            <span>
                Through my practice, I aim to guide you on a personalized journey toward holistic wellness, empowering you to lead a healthier and more balanced life.
            </span>
        </Box>
    )
}


const ProgramsSection = () => {
    return (
        <div className="flex flex-col w-full" id="programs">
            <img src="shape1.svg" className="m-0 p-0"></img>
            <PricingSection />
            <div className="bg-beige w-full flex flex-col py-8 mb-[-0.1%]" id="about_us">
                <img src="founder.svg" className="w-5/6 md:w-3/5"></img>
                <Box className="flex justify-center w-full mt-20">
                    <FoundersWords />
                </Box>
            </div>
            <img src="shape2.svg" className="m-0 p-0"></img>
        </div>
    )
}

export default ProgramsSection