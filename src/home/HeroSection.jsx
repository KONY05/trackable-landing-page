import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="pt-[70px bg-[#151515] lg:overflow-hidden">
      <div className="flex flex-col gap-12 px-4 pt-12 lg:flex-row lg:pt-[197px] lg:pb-[60px] lg:pl-[100px] xl:pb-[197px]">
        <div className="flex flex-col items-center text-center text-white lg:items-start lg:text-left">
          <h1 className="text-5xl/[60px] font-semibold">
            Take control of your finances with Trackabl
          </h1>
          <p className="mt-5 text-lg text-[#D0D5DD]">
            Effortlessly manage your expenses and gain valuable insights. Join
            the millions of users worldwide who trust Trackabl to manage their
            finances effectively
          </p>
          <Button
            extra="gap-[8px] px-[57px] mt-[32px] "
            color="text-black bg-white"
          >
            Try for free
            <span>
              <ArrowRightIcon className="w-4" />
              {/* &rarr; */}
            </span>
          </Button>
        </div>

        <div className="px-[30px] lg:relative lg:flex lg:w-full">
          <img
            src="heroImg1.png"
            alt="iPhone 12 Pro mockup"
            className="lg:absolute lg:z-30 lg:w-[250px] xl:w-[350px] lg:inset-y-9 lg:inset-x-2"
          />
          <img
            src="heroImg2.png"
            alt="hero Image 2"
            className="hidden lg:absolute lg:inset-x-10 lg:block lg:w-full 
            lg:-inset-y-9 xl:-inset-y-20"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
