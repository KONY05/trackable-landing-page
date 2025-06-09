function SectionTwo() {
  return (
    <section className="flex flex-col gap-8 bg-[#F2F4F7] px-4 py-12">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-2xl/[32px] font-semibold">Get in touch</h3>
        <p className="text-[16px]/[24px] font-normal text-[#667085]">
          Please fill out this form for any enquires.
        </p>
      </div>

      <form action="" className="flex flex-col gap-5 lg:mx-auto lg:w-[616px]">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="lg:basis-[100%]">
            <label
              htmlFor="firstName"
              className="text-[14px]/[20px] font-medium"
            >
              First name
            </label>
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your First name"
              className="mt-1.5 w-full rounded-xl border-none bg-white px-3.5 py-3 outline-[#005EE8]"
              required
            />
          </div>
          <div className="lg:basis-[100%]">
            <label
              htmlFor="lastName"
              className="text-[14px]/[20px] font-medium"
            >
              Last name
            </label>
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your Last name"
              className="mt-1.5 w-full rounded-xl border-none bg-white px-3.5 py-3 outline-[#005EE8]"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-[14px]/[20px] font-medium">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="mt-1.5 w-full rounded-xl border-none bg-white px-3.5 py-3 outline-[#005EE8]"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Tell us something..."
            className="mt-1.5 h-32 w-full rounded-xl border-none bg-white px-3.5 py-3 outline-[#005EE8]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-xl bg-[#005EE8] py-3 text-white"
        >
          Send message
        </button>
      </form>
    </section>
  );
}

export default SectionTwo;
