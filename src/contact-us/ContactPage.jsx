import NavBar from "../ui/NavBar";
import HeroSection from "./HeroSection";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Footer from "../ui/Footer"

function ContactPage() {
  return (
    <main style={{ fontFamily: "Lato, sans-serif" }}>
          <NavBar />
          <HeroSection />
          
          <SectionOne />
          <SectionTwo />
          
          <Footer/>
    </main>
  );
}

export default ContactPage;
