import Button from "../ui/Button";
import PriceCard from "../ui/PriceCard";
import SectionTitle from "../ui/SectionTitle";

function SectionTwo() {
  return (
    <section className="flex flex-col gap-8 px-4 py-12 lg:gap-12 lg:py-24">
      <SectionTitle heading="Pricing">Discover Our Simple Plan</SectionTitle>

      <div className="flex justify-center gap-2 px-1.5 border border-[#F9FAFB] rounded-2xl w-fit mx-auto">
        <Button color="text-white bg-[#101828]" extra="px-[27.75px] lg:text-[16px]/[24px]">
          Monthly billing
        </Button>
        <Button color="text-[#667085] bg-[#F9FAFB]" extra="px-[27.75px] lg:text-[16px]/[24px] lg:flex lg:gap-[8px]">
          Annual billing{" "}
          <span className="hidden rounded-2xl bg-[#F0F6FF] px-2.5 py-0.5 text-sm/[20px] text-[#005EE8] lg:block">
            Save 20%
          </span>
        </Button>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:justify-center">
        <PriceCard buttonTxt="Get Started" free={true} price="0" />
        <PriceCard buttonTxt="Start 7-day Trial" free={false} price="4000" />
      </div>
    </section>
  );
}

export default SectionTwo;
