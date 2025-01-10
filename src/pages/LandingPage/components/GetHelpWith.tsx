import { Box } from "@mui/material"
import { BulletPoint } from "./ChatWithUsSection"

const bulletList = [
    "Digestive troubles",
    "PCOS/PCOD management",
    "Hair fall and skin damage issues",
    "Diabetes management",
    "Thyroid management",
    "Cholesterol and heart health",
    "Nutritional deficiencies",
    "Fatty liver issues",
    "Fertility and immunity"
]

const plansForList = [
    "Loosing weight",
    "Gaining weight",
    "Maintaining weight",
]

const planIconsList = [
    "apple.png",
    "banana.png",
    "avocado.png"
]

export const TextOverlap = (props:{background:string, heading:string}) => {
    return (
        <Box className="flex justify-center items-center">
            <span className="absolute uppercase text-6xl md:text-8xl font-bold text-gray-100 tracking-widest">{props.background}</span>
            <span className="relative z-50 text-3xl md:text-5xl font-bold text-green-2">{props.heading}</span>
        </Box>
    )
}




const PlansForCard = () => {
    return (
        <Box className="flex flex-col gap-5 items-center text-center bg-beige-2 rounded-3xl p-10 border-4 border-beige w-3/4">
            <Box className="flex flex-col gap-3">
                <span className="text-2xl">We have plans for</span>
                <span className="text-sm">Build healthier habits with personalized lessons</span>
            </Box>
            <img src="separator.svg"></img>
            <Box className="flex flex-col justify-center gap-4 md:flex-row items-center w-full">
                {plansForList.map((planName, index) => {
                    return (
                        <BulletPoint
                            text={planName}
                            iconUrl={planIconsList[index]}
                            key={index}
                            className="justify-start w-2/3"
                        />
                    )
                })}
            </Box>
        </Box>
    )
}


const GetHelpWith = () => {
    return (
        <Box className="flex flex-col justify-center w-full items-center gap-20 h-screen my-5">
            <Box className="flex justify-center items-center px-8 pb-10 w-full grow md:w-5/6">
                <Box className="flex flex-col items-center gap-12 lg:w-1/2">
                    <TextOverlap background={"lifestyle"} heading={"Get Help With"} />
                    <Box className="flex flex-col gap-5">

                        {bulletList.map((text) => <BulletPoint text={text} />)}
                    </Box>
                </Box>
                <Box className="flex flex-col w-1/2 hidden lg:block">
                    <Box className="flex items-end">
                        <Box className="flex h-1/2">
                            <img src="grid1.png" alt="" className="h- w-full" />
                        </Box>
                        <Box className="flex">
                            <img src="grid2.png" alt="" />
                        </Box>
                    </Box>
                    <Box className="flex">
                        <img src="grid3.png" alt="" />
                    </Box>
                </Box>
            </Box>
            <Box className="flex justify-center md:justify-end w-full items-center relative">
                <img src="strawberries.png" className="absolute left-0 bottom-0 w-[30vh] xl:w-[40vh] hidden md:block"></img>
                <PlansForCard />
            </Box>
        </Box>
    )
}

export default GetHelpWith