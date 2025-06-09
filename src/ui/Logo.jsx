import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="logo.png"
        alt="Trackabl Logo"
        className="w-[50%] object-contain "
      />
    </Link>
  );
}

export default Logo;
