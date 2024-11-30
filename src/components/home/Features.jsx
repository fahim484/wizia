import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { featuresList } from "../../lib/db";

const Features = () => {
  return (
    <section className="p-6">
        <div className="w-full sm:h-screen bg-[url('/Img/features-bg-img.png')] bg-no-repeat bg-cover bg-center text-white flex items-center justify-end max-w-[1344px] max-h-[564x] mx-auto rounded-3xl py-8 px-6 md:px-20 container my-6">
          <div>
            <h2 className="text-[#FFFFFF] font-heading text-[28px] leading-[34.13px] md:text-[40px] md:leading-[48.76px] font-semibold tracking-wide mb-[6px] text-pretty">
              Train your aiDR on your...
            </h2>
            <h2 className="text-primary italic font-heading text-[28px] leading-[34.13px] md:text-[40px] md:leading-[48.76px] font-medium tracking-wide">
              prefered email st|
            </h2>
            <p className="text-[#FFFFFF] font-body text-lg leading-[23.4px] md:text-[24px] md:leading-[31.2px] font-light tracking-wide max-w-[450px] mt-[30px] mb-16">
              You’re in control. Train your aiDR on elements of your Marketing
              strategy.
            </p>
    
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6">
                {featuresList.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2.5 text-[#14BCB2] text-base md:text-xl leading-[20.8px] md:leading-[26px] font-heading font-medium tracking-wide w-fit"
                  >
                    <div className="flex items-center justify-center bg-[#095157] rounded-full p-1">
                      <IoIosCheckmarkCircleOutline color="#0FF1F6" className="size-[16px] md:size-[24px]" />
                    </div>
                    {feature.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Features;
