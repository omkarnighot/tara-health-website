import { Box } from "@mui/material";
import { TextOverlap } from "./GetHelpWith";

const FounderVideo = () => {
    return (
        <Box className="flex w-full h-[50vh]">
            <Box className="flex flex-col gap-10 px-5 justify-center w-1/2">
                <TextOverlap background={"Mission"} heading={"Statement"} />
                <span className="p-10 text-center">
                Tara Health Consultations, our mission is to empower individuals to charge of their lifestyle by personalized one on one consultations, lifestyle guidance and support. We focus on holistic wellness, addressing gut health,  physical health,  mental health,  emotional wellness and building a positive and strong mindset. Here we make them understand the true meaning of wellness and overall lifestyle.
                </span>
            </Box>
            <Box className="flex justify-center p-5 w-1/2 rounded-2xl">
            <video controls autoPlay className="w-full">
                <source src="foundervideo.mp4" type="video/mp4" />
            </video>
            </Box>
        </Box>
    )
}

export default FounderVideo;