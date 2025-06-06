import { ArrowRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function NavBar() {
  return (
    <div className="fixed flex w-full items-center justify-between bg-[#15151570] px-4 py-[23px] text-white lg:px-[100px] lg:py-6 z-50">
      <Logo />

      <Bars3Icon className="w-6 cursor-pointer text-white lg:hidden" />

      <nav className="hidden lg:block">
        <ul className="flex gap-6 text-[16px]/[24px] font-medium">
          <li>Features</li>
          <li>Pricing</li>
          <li>About Us</li>
          <NavLink to="contact-us">
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </nav>

      <span className="hidden lg:block">
        <Button extra="gap-[8px] px-[24px]" color="text-white bg-[#005EE8]">
          Get Started
          <span>
            <ArrowRightIcon className="w-4" />
            {/* &rarr; */}
          </span>
        </Button>
      </span>
    </div>
  );
}

export default NavBar;
