import { Box } from "@mui/material";

const pricingData = [
    {
        planName: "Starter",
        planDescription: "Book your first consultation to discuss your dietary goals and get a personalized action plan.",
        planPrice: 500 
    },
    {
        planName: "3 months",
        planDescription: "Work closely with me for three months to establish healthy habits and achieve your nutritional targets.",
        planPrice: 12000 
    },
    {
        planName: "6 months",
        planDescription: "Comprehensive support for six months, including regular check-ins, meal plans, and ongoing adjustments.",
        planPrice: 20000 
    },
    {
        planName: "Custom",
        planDescription: "Tailored plans designed to meet your unique needs, including corporate wellness programs or family packages.",
        planPrice: undefined 
    }
];



const PricingCard = (props: { planName: string, planDescription: string, planPrice: number | undefined }) => {
    const { planName, planDescription, planPrice } = props

    return (
        <Box 
            className={`flex flex-col items-center h-[45vh] gap-10 shadow-lg rounded m-1 mx-2 w-full md:w-[45%] 2xl:w-1/5 p-5 
                ${planName === "Custom" ? "bg-green1/5":'bg-[#fff]'} 
                ${planName === "3 months" ?`border-3 border-green-2` : ""}`}>
            <Box className="flex items-center text-3xl font-semibold mt-2">
                {planName}
            </Box>
            <Box className="h-2/5 flex items-start text-sm text-center">
                {planDescription}
            </Box>
            <Box className="flex items-center h-2/5 text-4xl font-semibold">
                {planPrice && <span className="font-normal">
                    ₹&nbsp;
                </span>}
                    {planPrice?.toLocaleString() ?? ""}
            </Box>
            <Box className="h-1/5 mb-5 z-50">
                <button className="hover:bg-green-2 hover:text-[#fff] border-2 rounded-xl p-2 px-8 font-semibold">

                Contact us
                </button>
            </Box>
        </Box>
    )
}

const PricingCardsSection = () => {
    return (
        <Box className="flex flex-col md:flex-row justify-center my-10 w-full gap-2 p-2 overflow-scroll">
            {pricingData.map((data) => {
                const {planName, planDescription, planPrice} = data
                return (
                    <PricingCard planName={planName} planDescription={planDescription} planPrice={planPrice} />
                )
            })}
        </Box>
    )
}

const PricingSection = () => {
    return (
        <Box className="relative flex flex-col w-full items-center justify-center bg-beige mt-[-1%]">
            <Box className="font-semibold text-3xl md:text-5xl text-center">
                We offer great <span className="text-5xl md:text-7xl text-green-2">Price</span> plan for<br /> various needs
            </Box>
            <Box className="px-5">
                <PricingCardsSection />
            </Box>
            <Box className="absolute bottom-10 right-0 hidden md:block">
                <img src="oranges.png" alt="" className="w-[35vh] lg:w-[50vh]" />
            </Box>
        </Box>
    )
}

export default PricingSection