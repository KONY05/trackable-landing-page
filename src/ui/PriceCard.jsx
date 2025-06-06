import Button from "./Button";

function PriceCard({ buttonTxt, free, price }) {
  return (
    <div className="rounded-xl border border-[#D0D5DD] p-6">
      <div className="mb-6 flex justify-between">
        <div className="flex flex-col gap-2">
          <p>{free ? "Free" : "Premium"}</p>
          <p className="font-semibold">
            <sup className="text-2xl">₦</sup>
            <span className="text-4xl">{price}</span>{" "}
            <span className="font-medium text-[#667085]">/ month</span>
          </p>
        </div>
        {!free && (
          <div className="flex h-fit">
            <span className="rounded-lg bg-[#039855] px-2 py-[5px] text-[12px]/[18px] font-normal text-white">
              RECOMMENDED
            </span>
          </div>
        )}
      </div>

      <div>
        <p className="text-[16px]/[24px] font-semibold">FEATURES</p>
        <p className="mt-1 text-[16px]/[24px] font-normal text-[#667085]">
          Everything in our monthly plan plus....
        </p>

        <ul className="mt-6 flex flex-col gap-4 text-[16px]/[24px] font-normal text-[#667085]">
          <li className="flex gap-3">
            <img src="checkIcon.svg" alt="check Icon" /> Unlock all Features
          </li>
          <li className="flex gap-3">
            <img src="checkIcon.svg" alt="check Icon" />
            Basic reporting + analytics
          </li>
          <li className="flex gap-3">
            <img src="checkIcon.svg" alt="check Icon" /> Up to 10 individual
            users
          </li>
        </ul>
      </div>

      <div className="py-6">
        <Button color="bg-[#005EE8] text-white" extra="w-full">
          {buttonTxt}
        </Button>
      </div>
    </div>
  );
}

export default PriceCard;
