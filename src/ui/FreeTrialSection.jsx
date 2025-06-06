import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

function FreeTrialSection() {
  return (
    <section className="flex flex-col items-center bg-[#151515] px-4 py-12 text-white">
      <h4 className="text-2xl/[32px] font-semibold lg:text-4xl/[44px]">
        Start your free trial
      </h4>
      <p className="mt-2 text-center text-[16px]/[24px] font-normal text-[#D0D5DD]">
        Join the millions of users worldwide who trust Trackabl to manage their
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
    </section>
  );
}

export default FreeTrialSection;
