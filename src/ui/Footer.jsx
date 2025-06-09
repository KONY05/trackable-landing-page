import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 bg-[#005EE8] px-[37px] py-8 text-white lg:flex-row lg:justify-between lg:px-[100px]">
      <Link to="/privacy-policy">
        <span className="text-[16px]/[24px] font-normal hover:underline hover:underline-offset-3 transition">Privacy Policy</span>
      </Link>
      <p className="text-[16px]/[24px] font-normal">
        &copy; 2024 Trackabl.io. All rights reserved.
      </p>
      <div className="flex gap-4">
        <img
          src="facebook.svg"
          alt="facebook icon"
          className="cursor-pointer"
        />
        <img src="twitter.svg" alt="twitter icon" className="cursor-pointer" />
        <img
          src="instagram.svg"
          alt="instagram icon"
          className="cursor-pointer"
        />
      </div>
    </footer>
  );
}

export default Footer;
