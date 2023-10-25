import React from "react";

const ServiceCard = ({ iconSrc, title, description }) => {
  return (
    <div className="bg-white py-10 px-6 rounded-[10px] flex flex-col items-center shadow-lg max-w-[312px]">
      <img src={iconSrc} alt={iconSrc} />

      <p className="uppercase text-dark-gray font-bold tracking-wider mb-2.5 mt-[18px] text-center">
        {title}
      </p>
      <p className="text-subtitle-gray text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
