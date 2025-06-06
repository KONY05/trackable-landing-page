import AboutItem from "../ui/AboutItem";
import SectionTitle from "../ui/SectionTitle";

function SectionThree() {
  return (
    <section className="flex flex-col gap-8 bg-[#F2F4F7] px-4 py-12 lg:px-[100px] lg:py-24">
      <div>
        <SectionTitle heading="Who we are?">About Us</SectionTitle>
        <p className="mt-2 text-center text-[16px]/[24px] font-normal text-[#475467]">
          Gasdat Enterprise is a technology company headquartered in Wyoming,
          United States, with a presence in Nigeria. We specialize in developing
          and distributing innovative software solutions that empower businesses
          and individuals to effectively track and manage their expenses and
          purchases.
        </p>
        <p className="mt-3 text-center text-[16px]/[24px] font-normal text-[#475467]">
          Our user-friendly software streamlines the expense management process,
          giving you valuable insights into your spending habits and helping you
          make informed financial decisions. Whether you're a small business
          owner, a freelancer, or an individual looking to gain control of your
          finances, Gasdat Enterprise has the tools
        </p>
      </div>

      <div className="flex flex-col gap-8 rounded-4xl bg-[#005EE8] px-8 py-12 text-white lg:gap-12">
        <h3 className="text-center text-4xl/[44px] font-semibold">
          Our Mission
        </h3>
        <div className="flex flex-col gap-8 lg:flex-row lg:px-8">
          <AboutItem icon="aboutIcon1.svg" title="Committed to Excellence">
            We are committed to providing our clients with top-best expense
            management solutions, ensuring their financial needs are met.
          </AboutItem>
          <AboutItem icon="aboutIcon2.svg" title="Empowering Financial Control">
            We believe everyone deserves the power to take charge of their
            finances, and our software is designed to make that process easier
            than ever.
          </AboutItem>
          <AboutItem icon="aboutIcon3.svg" title="User-Friendly Interface">
            With a focus on user experience, our software is intuitively
            designed for ease of use, ensuring that managing expenses becomes a
            seamless task.
          </AboutItem>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
