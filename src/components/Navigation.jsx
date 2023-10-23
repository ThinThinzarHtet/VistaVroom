// import logo from "../assets/logo.svg";

import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

import {
  Drawer,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

const navItems = ["Home", "Booking", "About", "Services", "Contact"];
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    document.body.style.overflowY = "hidden";
    setIsOpen(true);
    console.log(document);
  };

  const closeDrawer = () => {
    document.body.style.overflowY = "scroll";
    setIsOpen(false);
    console.log(document);
  };

  return (
    <div>
      <div className="wrapper flex justify-between items-center py-5">
        {/* <img src={logo} alt="logo" /> */}
        <p>
          <span className="text-primary-green logo_text">Vista</span>
          <span className="text-primary-black logo_text">Vroom</span>
        </p>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className={`${
                  index === 0 ? "border-primary-green" : "border-transparent"
                } link`}
              >
                {navItem}
              </li>
            ))}
            {/* <li className="link border-primary-green">Home</li>
            <li className="link border-transparent">Booking</li>
            <li className="link border-transparent">About</li>
            <li className="link border-transparent">Services</li>
            <li className="link border-transparent">Contact</li> */}
          </ul>
        </div>

        {/* mobile menu icon */}
        <TbMenuDeep
          className="block lg:hidden cursor-pointer h-6 w-6"
          onClick={openDrawer}
        />

        {/* sidebar for mobile */}
        <Drawer
          className="px-6 py-12 rounded-r-lg flex flex-col gap-16 shadow-2xl shadow-gray-900 backdrop-blur-sm"
          open={isOpen}
          onClose={closeDrawer}
        >
          <IoClose
            className="absolute right-4 top-4 h-5 w-5 cursor-pointer"
            onClick={closeDrawer}
          />
          <ul className="flex flex-col items-center gap-10">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className={`${
                  index === 0 ? "border-primary-green" : "border-transparent"
                } link`}
              >
                {navItem}
              </li>
            ))}
          </ul>
          <div className="w-full h-[2px] bg-primary-green rounded-full p-0.5"></div>

          <div className="flex flex-col gap-10">
            <button className="btn_base text-primary-black hover:text-primary-green">
              Login
            </button>
            <button className="btn_base text-primary-black border-2 border-primary-green rounded-full py-2 px-5 hover:bg-primary-green hover:border-transparent hover:text-white">
              Sign up
            </button>
          </div>

          <div className="mt-auto flex flex-col gap-10">
            <p className="text-center">
              <span className="text-primary-green logo_text">Vista</span>
              <span className="text-primary-black logo_text">Vroom</span>
            </p>
            <p className="text-center text-slate-900">
              &copy; VistaVroom 2023. All rights reserved.
            </p>
          </div>
        </Drawer>

        <div className="hidden lg:flex items-center gap-[30px]">
          <button className="btn_base text-primary-black hover:text-primary-green">
            Login
          </button>
          <button className="btn_base text-primary-black border-2 border-primary-green rounded-full py-2 px-5 hover:bg-primary-green hover:border-transparent hover:text-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
