import { Box, Button } from "@mui/material"

const CallNowBanner = () => {
    return (
        <Box className="flex w-full justify-center items-center my-5">
            <Box className="flex items-start bg-beige-2 rounded-3xl shadom-2xl border-4 border-beige w-4/5 lg:w-1/2 py-5 md:py-12 px-5 md:px-20 gap-5 md:gap-20">
                <Box className="flex flex-col w-2/3 gap-5 md:gap-10">
                    <Box className="text-base lg:text-3xl">
                        Don’t know what’s the right meal plan or
                        the diet for you
                    </Box>
                    <Box className="flex justify-start">
                        <Button className="md:!px-20" href="tel:+91 70288 65139">
                            Call Now
                        </Button>
                    </Box>
                </Box>
                <Box className="h-full w-1/3">
                    <img src="questionMark.png" className="h-full w-full xl:w-2/3"></img>
                </Box>
            </Box>
        </Box>
    )
}

export default CallNowBanner