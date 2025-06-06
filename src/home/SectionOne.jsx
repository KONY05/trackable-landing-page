import Feature from "../ui/Feature";
import SectionTitle from "../ui/SectionTitle";

function SectionOne() {
  return (
    <section className="relative -top-40 -mb-40 pt-12 lg:top-0 lg:mb-0 lg:flex lg:flex-col lg:gap-12 lg:pt-24 bg-white">
      <SectionTitle padding="px-3.5" heading="Membership benefits">
        Features that you will love
      </SectionTitle>

      <div className="mt-8 lg:flex lg:px-[100px]">
        {/* <div className="flex flex-col lg:basis-[100%]"> */}
        <div className="flex flex-col gap-5 px-4 lg:basis-[100%] lg:px-0">
          <Feature
            icon={"featureIcon1.svg"}
            heading={"Easy-to-use expense tracking"}
          >
            Trackabl offers a user-friendly interface with powerful filters that
            provide detailed insights into your spending habits. Easily
            categorize and subcategorize your expenses with just a few clicks.
          </Feature>

          <Feature
            icon={"featureIcon2.svg"}
            heading={"Insightful analytics for smarter spending habit"}
          >
            Trackabl offers a user-friendly interface with powerful filters that
            provide detailed insights into your spending habits. Easily
            categorize and subcategorize your expenses with just a few clicks.
          </Feature>

          <Feature
            icon={"featureIcon3.svg"}
            heading={"Flexible expense organization, your way"}
          >
            Trackabl offers a user-friendly interface with powerful filters that
            provide detailed insights into your spending habits. Easily
            categorize and subcategorize your expenses with just a few clicks.
          </Feature>
        </div>
        {/* </div> */}

        <div className="flex justify-center bg-[#F2F4F7] lg:basis-[100%]">
          <img
            src="featuresImage.png"
            alt="feature Image"
            className="lg:object-contain lg:object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
