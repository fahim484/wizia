import React from "react";

import brand1 from "/Img/brand-logos/BackHub-logo.png";
import brand2 from "/Img/brand-logos/CableLabs-logo.png";
import brand3 from "/Img/brand-logos/DBS-logo.png";
import brand4 from "/Img/brand-logos/EasyEuro-logo.png";
import brand5 from "/Img/brand-logos/AMD-logo.png";
// import quote from "../assets/quote.svg";

const brands = [
  { image: brand1, alt: "BackHub" },
  { image: brand2, alt: "CableLabs" },
  { image: brand3, alt: "DBS" },
  { image: brand4, alt: "EasyEuro" },
  { image: brand5, alt: "AMD" },
];

const Partners = () => {
  return (
    <section className="bg-secondary">
      <div className="flex flex-col items-center justify-center gap-10 pt-8 pb-10 px-6 md:px-20 container max-w-[1400px] mx-auto">
        <h3 className="text-primary font-heading text-sm sm:text-base sm:leading-[19.5px] tracking-wide">
          our trusted partners
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center place-content-center">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.image}
              alt={brand.alt}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
