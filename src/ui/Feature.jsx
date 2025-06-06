function Feature({ icon, heading, children }) {
  return (
    <div>
      <img src={icon} alt={icon} />
      <h4 className="mt-4 font-semibold text-[20px]/[30px]">{heading}</h4>
      <p className="mt-2 font-normal text-[#667085] text-lg/[28px] mb-7 lg:mb-0">{children}</p>
    </div>
  );
}

export default Feature;
