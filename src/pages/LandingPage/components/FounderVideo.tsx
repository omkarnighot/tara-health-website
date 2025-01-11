import { Box } from "@mui/material";
import { TextOverlap } from "./GetHelpWith";

const FounderVideo = () => {
    return (
        <Box className="flex flex-col md:flex-row justify-center items-center w-full h-[50vh] my-[30vh] md:my-[15vh]">
            <Box className="flex flex-col gap-10 px-5 justify-center md:w-1/2">
                <TextOverlap background={"Mission"} heading={"Statement"} />
                <span className="p-10 text-center">
                Tara Health Consultations, our mission is to empower individuals to charge of their 
                lifestyle by personalized one on one consultations, lifestyle guidance and support. We focus on holistic wellness, 
                addressing gut health,  physical health,  mental health,  emotional wellness and building a positive and strong mindset. 
                Here we make them understand the true meaning of wellness and overall lifestyle.
                </span>
            </Box>
            <Box className="flex justify-center p-5 w-2/3 lg:w-1/4 rounded-2xl">
            <video controls muted className="w-full">
                <source src="foundervideo.mp4" type="video/mp4" />
            </video>
            </Box>
        </Box>
    )
}

export default FounderVideo;