import { Box, Button } from "@mui/material";

export const NavBar = () => {
    return (
        <Box className="flex flex-wrap justify-center gap-5 md:gap-16 font-semibold">
            <Box>
                About Us
            </Box>
            <Box>
                Programs
            </Box>
            {/* <Box>
                FAQ's
            </Box> */}
            <Box>
                Contact Us
            </Box>
        </Box>
    )
}

const HeroSection = () => {
    return (
        <Box className="w-full flex flex-col gap-28 lg:gap-16 2xl:gap-32 h-screen">
            <img src="taraMobile.svg" className="absolute top-0 left-0 w-full z-50 md:hidden"></img>
            <img src="taraBackgroundTab.svg" className="absolute top-0 left-0 w-full z-50 xl:hidden"></img>
            <img src="bg1.png" className="absolute top-0 left-0 w-full z-50 hidden xl:block"></img>
            <Box className="flex justify-center w-full pt-16 z-50">
                <NavBar />
            </Box>
            <Box className="flex flex-col py-10 md:p-10 w-full justify-center items-center z-50 mt-0">
                <img src="tara_logo.svg" className="h-[80px]"></img>
                <Box className="my-8 xl:my-12 flex flex-col gap-3 items-center">
                    <h1 className="font-bold text-green-2 text-3xl text-center md:text-5xl xl:text-7xl ">Tara Health Consultations</h1>
                    <h3 className="caveat text-3xl md:text-3xl xl:text-5xl font-semibold">Wellness beyond diet...</h3>
                </Box>
                <Button className="!mt-2 !px-10">Get Started</Button>
            </Box>
        </Box>
    )
}

export default HeroSection;