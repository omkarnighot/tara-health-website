import { Box } from "@mui/material";
import { NavBar } from "./HeroSection";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook, Mail, YouTube } from "@mui/icons-material";

const socialMediaLinks = [
    {
        icon: <InstagramIcon className="text-green-1" fontSize="large" />,
        link: "https://www.instagram.com/tarahealthconsultations/"
    },
    {
        icon: <Mail className="text-green-1" fontSize="large" />,
        link: "mailto:tarahealthconsultations@gmail.com"
    },
    {
        icon: <Facebook className="text-green-1" fontSize="large" />,
        link: "https://www.facebook.com/share/1Ez946t6s6/"
    },
    {
        icon: <YouTube className="text-green-1" fontSize="large" />,
        link: "https://www.youtube.com/@TaraHealthConsultations"
    },
]
const SocialMediaIcon = (props: { icon: JSX.Element, link: string }) => {
    return (
        <>
            <a className="rounded-full bg-gray-100 p-5" href={props.link}>
                {props.icon}
            </a>
        </>
    )
}




const Footer = () => {
    return (
        <>
            <Box className="bg-beige flex flex-col items-center justify-center mt-5 py-10 gap-10">
                <img src="tara_logo_new.svg"></img>
                <NavBar />
                <img src="separator.svg"></img>
                <Box className="flex flex-wrap gap-5 md:gap-10 px-3 justify-center">
                    {socialMediaLinks.map(link => <SocialMediaIcon icon={link.icon} link={link.link} />)}
                </Box>
            </Box>
            <Box className="text-xs font-semibold flex justify-end p-1 px-5 bg-beige w-full caveat">~ Developed by ONIX LABS</Box>
        </>
    )
}

export default Footer;