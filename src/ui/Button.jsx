function Button({ color = "", width = "", extra, children }) {
  return (
    <button
      className={`flex items-center justify-center rounded-xl py-3 cursor-pointer transition ${color} ${width} ${extra} ${color.includes("bg-[#005EE8]") ? "hover:bg-blue-400" : "hover:ring-3 hover:ring-blue-400"}`}
    >
      {children}
    </button>
  );
}

export default Button;
