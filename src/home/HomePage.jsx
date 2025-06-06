import NavBar from "../ui/NavBar";
import HeroSection from "./HeroSection";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import FreeTrialSection from "../ui/FreeTrialSection";
import Footer from "../ui/Footer";

function HomePage() {
  return (
    <main style={{ fontFamily: "Lato, sans-serif" }}>
      <NavBar />
      <HeroSection />

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <FreeTrialSection />

      <Footer />
    </main>
  );
}

export default HomePage;
