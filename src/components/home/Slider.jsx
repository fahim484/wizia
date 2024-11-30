// import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { useState } from "react";
import { Container } from "../common/Container";
import { sliderList } from "../../lib/db";
import { Carousel } from "flowbite-react";

const Sliders = () => {

  const customTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-primary",
        on: "bg-primary",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-6 -bottom-1 md:-bottom-8",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-[8px] bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-[#96ACAF] hover:text-primary sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  return (
    <section className="">
      <Container className="md:pt-[96px] md:pb-[80px] px-6 md:px-12">
        <div className="h-80 md:h-96">
          <Carousel pauseOnHover theme={customTheme}>
            {sliderList.map((card, i) => (
              <div key={i} className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full space-y-[22px] md:space-y-[44px] font-body text-center max-w-screen-lg">
                  <div className="bg-[#183A40] flex size-14 md:size-[74px] items-center justify-center p-2 rounded-full">
                    <img alt="icon" className=" w-1/3 md:w-1/2" src={card.image} />
                  </div>

                  <h1 className="text-base md:text-[32px] leading-[31.2px] md:leading-[41.6px] font-light text-[#FFFFFF] tracking-wider w-full">
                    {card.title}
                  </h1>

                  <div className="">
                    <h4 className="text-[18px] md:text-2xl leading-[27px] md:leading-9 text-primary font-semibold">
                      {card.name}
                    </h4>

                    <p className="text-[#96ACAF] text-base md:text-xl md:leading-[30px]">
                      {card.occupation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Sliders;