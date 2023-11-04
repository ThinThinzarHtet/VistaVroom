// import logo from "../assets/logo.svg";

import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

import { Drawer } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { NavContext } from "../context/NavContext";
import AuthForm from "./authForm/AuthForm";

const navItems = ["Home", "Cars", "Pricing", "Services", "FAQs", "Contact"];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); //for drawer state

  // auth form states
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const toggleIsLoginForm = () => setIsLoginFormOpen(!isLoginFormOpen);

  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const toggleIsSignUpForm = () => setIsSignUpFormOpen(!isSignUpFormOpen);

  const { activeLinkId } = useContext(NavContext);

  const openDrawer = () => {
    document.body.style.overflowY = "hidden";
    setIsOpen(true);
  };

  const closeDrawer = () => {
    document.body.style.overflowY = "scroll";
    document.body.classList.remove("overflow-hidden");
    setIsOpen(false);
  };

  const handleClickLogo = () => {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleClickNav = (navItem) => {
    const scrollToId = `${navItem.toLowerCase()}Section`;
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-20 bg-white">
      <div className="wrapper flex justify-between items-center py-5">
        <p onClick={handleClickLogo} className="cursor-pointer">
          <span className="text-primary-green logo_text uppercase">Vista</span>
          <span className="text-primary-black logo_text uppercase">Vroom</span>
        </p>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                onClick={() => handleClickNav(navItem)}
                className={`${
                  activeLinkId === navItem
                    ? "border-primary-green"
                    : "border-transparent"
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
                onClick={() => handleClickNav(navItem)}
                className={`${
                  activeLinkId === navItem
                    ? "border-primary-green"
                    : "border-transparent"
                } link`}
              >
                {navItem}
              </li>
            ))}
          </ul>
          <div className="w-full h-[2px] bg-primary-green rounded-full p-0.5"></div>
          {/* for small screen */}
          <div className="flex flex-col gap-10">
            <button
              className="btn_base text-primary-black hover:text-primary-green"
              onClick={toggleIsLoginForm}
            >
              Login
            </button>
            <button
              className="btn_base text-primary-black border-2 border-primary-green rounded-full py-2 px-5 hover:bg-primary-green hover:border-transparent hover:text-white"
              onClick={toggleIsSignUpForm}
            >
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

        {/* for large screen login and sign up */}
        <div className="hidden lg:flex items-center gap-[30px]">
          <button
            className="btn_base text-primary-black hover:text-primary-green"
            onClick={toggleIsLoginForm}
          >
            Login
          </button>
          <button
            className="btn_base text-primary-black border-2 border-primary-green rounded-full py-2 px-5 hover:bg-primary-green hover:border-transparent hover:text-white"
            onClick={toggleIsSignUpForm}
          >
            Sign up
          </button>
        </div>
      </div>

      {isLoginFormOpen ? (
        <AuthForm
          isLoginFormOpen={isLoginFormOpen}
          toggleIsLoginForm={toggleIsLoginForm}
          toggleIsSignUpForm={toggleIsSignUpForm}
          isDrawerOpen={isOpen}
        />
      ) : (
        <AuthForm
          isSignUpFormOpen={isSignUpFormOpen}
          toggleIsSignUpForm={toggleIsSignUpForm}
          toggleIsLoginForm={toggleIsLoginForm}
          isDrawerOpen={isOpen}
        />
      )}
    </div>
  );
};

export default Navigation;
