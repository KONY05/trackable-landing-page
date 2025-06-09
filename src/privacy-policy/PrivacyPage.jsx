import NavBar from "../ui/NavBar"
import HeroSection from "./HeroSection"
import PrivacySection from "./PrivacySection"
import FreeTrialSection from "../ui/FreeTrialSection"
import Footer from "../ui/Footer"

function PrivacyPage() {
    return (
        <main style={{ fontFamily: "Lato, sans-serif" }}>
            <NavBar />
            <HeroSection/>

            <PrivacySection />

            <FreeTrialSection />
            <Footer/>
        </main>
    )
}

export default PrivacyPage
