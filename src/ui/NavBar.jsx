import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import Button from "./Button";

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed z-50 flex w-full flex-col text-white">
      <div
        className={`flex items-center justify-between px-4 py-[23px] lg:px-[100px] lg:py-6 ${navOpen ? "bg-[#151515]" : "bg-[#15151570]"}`}
      >
        <Logo />

        {/* Mobile NavBar */}
        {navOpen ? (
          <XMarkIcon
            className="w-6 cursor-pointer text-white transition lg:hidden"
            onClick={() => setNavOpen((btn) => !btn)}
          />
        ) : (
          <Bars3Icon
            className="w-6 cursor-pointer text-white transition lg:hidden"
            onClick={() => setNavOpen((btn) => !btn)}
          />
        )}

        {/* Desktop NavBar */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 text-[16px]/[24px] font-medium">
            <li className="hover:text-[#005EE8]">Features</li>
            <li className="hover:text-[#005EE8]">Pricing</li>
            <li className="hover:text-[#005EE8]">About Us</li>
            <li className="hover:text-[#005EE8]">
              <NavLink
                to="/contact-us"
                className={({ isActive }) => isActive && "text-blue-400"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <span className="hidden lg:block">
          <Button extra="gap-[8px] px-[24px]" color="text-white bg-[#005EE8]">
            Get Started
            <span>
              <ArrowRightIcon className="w-4" />
            </span>
          </Button>
        </span>
      </div>

      {/* Mobile NavBar */}
      {navOpen && (
        <div className="bg-[#15151570] px-5 py-4 backdrop-blur transition lg:hidden">
          <nav>
            <ul className="flex flex-col items-center gap-5 text-[16px]/[24px] font-medium">
              <li>Features</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) => isActive && "text-blue-400"}
                >
                  Contact Us
                </NavLink>
              </li>
              <Button
                extra="gap-[8px] px-[24px]"
                color="text-white bg-[#005EE8] w-full"
              >
                Get Started
                <span>
                  <ArrowRightIcon className="w-4" />
                </span>
              </Button>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default NavBar;
