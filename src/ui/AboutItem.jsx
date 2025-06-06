function AboutItem({ icon, title, children }) {
  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt={icon} className="w-fit"/>
      <h4 className="mt-5 text-[20px]/[30px] font-medium lg:text-center">{title}</h4>
      <p className="mt-2 text-[16px]/[24px] font-normal text-center">{children}</p>
    </div>
  );
}

export default AboutItem;
