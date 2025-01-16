import { Box, Button } from "@mui/material";

export const NavBar = () => {
    return (
        <Box className="flex flex-wrap justify-start items-center gap-10 md:gap-20 font-semibold">
            <img src="tara_logo.svg" className="hidden md:block h-[60px]"></img>

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
        <Box className="relative w-full flex flex-col gap-20 lg:gap-16 2xl:gap-32 h-[90vh] bg-gradient-to-r from-[#fff] from-10% to-beige-3 to-86% overflow-hidden">
            <Box className="flex justify-center md:justify-start w-full pt-16 px-8 lg:px-16 z-50">
                <NavBar />
            </Box>
            <Box className="flex flex-col py-10 md:p-10 w-full justify-start items-center md:items-start mt-0 px-5 md:px-20 z-50">
                <Box className="my-8 xl:my-12 flex flex-col gap-8 items-center md:items-start">
                    <img src="tara_logo.svg" className="h-[80px] md:hidden"></img>
                    <Box className="flex flex-col gap-5 text-center md:text-left">

                        <h1 className="font-bold text-green-2  text-5xl xl:text-7xl ">Tara Health Consultations</h1>
                        <h3 className="caveat text-3xl md:text-3xl xl:text-5xl font-semibold">Wellness beyond diet...</h3>
                        <span className=" font-semibold">Get your custom plans &
                            one-on-one guidance from our experts</span>
                    </Box>
                </Box>
                <Button className="!mt-2 !px-10">Get Started</Button>
            </Box>
            <Box className="absolute right-[-15%] md:right-[-33%] lg:right-[-10%] xl:right-[-25%] 2xl:right-[-30%] bottom-0 h-[88%] w-[128%] lg:w-3/4 z-10 xl:z-30">
                <img src="heroImage.png" className="h-full"></img>
            </Box>
            <Box className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#fff] from-10% to-beige-3 to-86% z-20 opacity-[85%]">
            </Box>
        </Box>
    )
}

export default HeroSection;