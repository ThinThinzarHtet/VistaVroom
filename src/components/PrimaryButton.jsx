import React from "react";

const PrimaryButton = ({
  children,
  black = true,
  small = true,
  className,
  authForm = false,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} btn_base ${
        authForm
          ? "px-5 py-[10px]"
          : small
          ? "px-5 py-[14px]"
          : "px-5 sm:px-6 py-[14px] sm:py-6"
      } primary_btn ${
        authForm
          ? "bg-primary-black hover:bg-primary-green hover:text-white"
          : black
          ? "bg-primary-black hover:border-primary-black"
          : "bg-primary-green hover:border-primary-green"
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
