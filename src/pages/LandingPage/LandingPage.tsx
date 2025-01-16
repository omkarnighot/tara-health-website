import CallNowBanner from "./components/CallNowBanner";
import ChatWithUsSection from "./components/ChatWithUsSection";
import Footer from "./components/Footer";
import GetHelpWith from "./components/GetHelpWith";
import HelpYouSection from "./components/HelpYouSection";
import HeroSection from "./components/HeroSection";
import ProgramsSection from "./components/ProgramsSection";
import FounderVideo from "./components/FounderVideo";
import Address from "./components/Address";

const LandingPage = () => {
    return (
        <>
            <HeroSection />
                <GetHelpWith />
            <HelpYouSection />
            <CallNowBanner />
            <ProgramsSection />
            <FounderVideo />
            <ChatWithUsSection />
            <Address />
            <Footer />
        </>
    )
}

export default LandingPage;