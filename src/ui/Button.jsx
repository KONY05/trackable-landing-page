function Button({ color = "", width = "", extra, children }) {
  return (
    <button
      className={`flex items-center justify-center rounded-xl py-3 ${color} ${width} ${extra}`}
    >
      {children}
    </button>
  );
}

export default Button;
