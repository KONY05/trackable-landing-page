function SectionTitle({padding="", heading, children}) {
    return (
        <div className={`flex flex-col items-center gap-2 ${padding}`}>
          <p className="flex items-center gap-2.5 text-lg/[28px] font-normal text-[#667085] lg:text-[20px]/[30px]">
            {" "}
            <span>
              <img src="middot.svg" alt="" />
            </span>{" "}
            {heading}
          </p>
          <h2 className="text-3xl/[38px] font-semibold text-center lg:text-6xl/[72px]">
            {children}
          </h2>
        </div>
    )
}

export default SectionTitle
