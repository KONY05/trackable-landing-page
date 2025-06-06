import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="lg:px-[100px] lg:flex-row lg:justify-between flex flex-col items-center gap-4 bg-[#005EE8] px-[37px] py-8 text-white">
      <Link to="privacy-policy">
        <p className="text-[16px]/[24px] font-normal">Privacy Policy</p>
      </Link>
      <p className="text-[16px]/[24px] font-normal">&copy; 2024 Trackabl.io. All rights reserved.</p>
      <div className="flex gap-4">
        <img src="facebook.svg" alt="facebook icon" />
        <img src="twitter.svg" alt="twitter icon" />
        <img src="instagram.svg" alt="instagram icon" />
      </div>
    </footer>
  );
}

export default Footer;
