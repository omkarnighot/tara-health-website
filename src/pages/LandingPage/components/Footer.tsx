import { Box } from "@mui/material";
import { NavBar } from "./HeroSection";
import InstagramIcon from '@mui/icons-material/Instagram';
const SocialMediaIcon = () => {
    return (
        <>
            <Box className="rounded-full bg-gray-100 p-5">
                <InstagramIcon className="text-green-1" fontSize="large" />
            </Box>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <Box className="bg-beige flex flex-col items-center justify-center h-[40vh] mt-5 gap-10">
                <img src="tara_logo.svg"></img>
                <NavBar />
                {/* <Box className="flex gap-10">
                    <SocialMediaIcon />
                    <SocialMediaIcon />
                    <SocialMediaIcon />
                    <SocialMediaIcon />
                </Box> */}
            </Box>
            <Box className="text-xs font-semibold flex justify-end p-1 px-5 bg-beige w-full">~ Developed by ONIX LABS</Box>
        </>
    )
}

export default Footer;