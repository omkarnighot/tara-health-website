import { Box } from "@mui/material"
import { TextOverlap } from "./GetHelpWith"

const Address = () => {
    return (
        <Box className="flex flex-col md:flex-row w-full h-[50vh]">
            <Box className="flex flex-col gap-10 px-5 justify-center w-1/2">
                <TextOverlap background={"Address"} heading={"Visit Us At"} />
                <span className="p-10 text-center">
                    Office no 214, Rajveer Imperia,
                    <br /> Ajmera Main Rd, opp. Annasaheb Magar Stadium, Annexe,
                    <br /> Pimpri Colony, Pimpri-Chinchwad,
                    <br /> Maharashtra 411018
                </span>
            </Box>
            <Box className="flex justify-center p-5 w-1/2 rounded-2xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.642493025884!2d73.82051489999999!3d18.6351432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9004d92db5f%3A0x4646c7ae62103c09!2sTara%20Health%20Consultations!5e0!3m2!1sen!2sin!4v1736543816439!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </Box>
        </Box>
    )
}
export default Address