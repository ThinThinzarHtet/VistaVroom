// import logo from "../assets/logo.svg";

import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

import { Drawer } from "@material-tailwind/react";
import { useState } from "react";

const navItems = ["Home", "Booking", "About", "Services", "Contact"];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    document.body.style.overflowY = "hidden";
    setIsOpen(true);
  };

  const closeDrawer = () => {
    document.body.style.overflowY = "scroll";
    setIsOpen(false);
  };

  // sticky top-0 z-20 bg-white
  return (
    <div className="sticky top-0 z-20 bg-white">
      <div className="wrapper flex justify-between items-center py-5">
        <p>
          <span className="text-primary-green logo_text uppercase">Vista</span>
          <span className="text-primary-black logo_text uppercase">Vroom</span>
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
          </ul>
        </div>

        {/* mobile menu icon */}
        {!isOpen && (
          <TbMenuDeep
            className="block lg:hidden cursor-pointer h-6 w-6"
            onClick={openDrawer}
          />
        )}

        {/* sidebar for mobile */}
        <Drawer
          overlay={false}
          className="px-6 py-12 rounded-r-lg flex flex-col gap-16 drop-shadow-lg "
          open={isOpen}
          onClose={closeDrawer}
          placement="right"
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
