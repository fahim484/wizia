import React from "react";
import { Button } from "../common/Button";
import { BsArrowUpRightSquare } from "react-icons/bs";

export const Hero = () => {
  return (
    <section className="w-full sm:h-screen bg-[url('/Img/hero-bg-img.png')] bg-no-repeat bg-cover bg-right text-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-[18px] py-20 sm:py-36 px-6 md:px-20 container max-w-[1400px] mx-auto">
        <div>
          <h3 className="text-primary font-heading text-lg sm:text-2xl leading-[29.26px] mb-1">
            AI SDRs (aiDRs)
          </h3>

          <h1 className="font-heading font-bold text-2xl sm:text-[64px] leading-[74.02px] max-w-[391px] mb-2.5">
            More<span className="font-medium italic"> leads</span>, less
            <span className="font-medium italic"> people.</span>
          </h1>

          <p className="text-white font-body text-base sm:text-xl leading-[26px] font-light max-w-[450px] mb-6">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <Button className="flex items-center justify-center gap-2">
            Sign Up for the Beta <BsArrowUpRightSquare />
          </Button>
        </div>
      </div>
    </section>
  );
};
