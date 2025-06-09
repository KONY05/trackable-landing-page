function ContactItem({ icon, title, subText, children }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={icon} alt={icon} className="w-fit" />
      <p className="mt-5 text-[20px]/[30px] font-semibold">{title}</p>
      <p className="mt-2 text-[16px]/[24px] font-normal text-[#667085]">
        {subText}
      </p>
      <p className="mt-5 text-[16px]/[24px] font-normal text-[#005EE8]">
        {children}
      </p>
    </div>
  );
}

export default ContactItem;
