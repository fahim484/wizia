import React from "react";

const OffersCard = ({ image, title, description }) => {
  return (
    <div className="max-w-[384px] h-full p-2 space-y-6 shadow-card group hover:cursor-pointer  hover:bg-secondary transition-colors duration-200">
      <div className="size-[64px] flex justify-start items-center">
        <img src={image} alt={title} className="w-4/5" />
      </div>

      <h1 className="text-[#FFFFFF] font-heading font-semibold text-[28px] leading-[34.13px] mt-6">
        {title}
      </h1>

      <p className="text-[#FFFFFF] font-body font-light text-[22px] leading-[28.6px] tracking-wide mt-4">{description}</p>
    </div>
  );
};

export default OffersCard;
