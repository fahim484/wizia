// import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { useState } from "react";
import { Container } from "../common/Container";
import { sliderList } from "../../lib/db";
import { Carousel } from "flowbite-react";

const Sliders = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? sliderList.length - 1 : prevIndex - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === sliderList.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const { image, title, name, Occupation } = sliderList[currentIndex]; // Destructuring

  return (
    <section className="">
      <Container className="pt-[94px] pb-[131px] px-6 md:px-12">
        <div className="h-56 sm:h-64 xl:h-[361px] 2xl:h-96">
          <Carousel pauseOnHover>
            {sliderList.map((card, i) => (
              <div key={i} className="flex h-full items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full space-y-[44px] font-body text-center max-w-screen-lg">
                  <div className="bg-[#183A40] flex h-14 items-center justify-center p-2 rounded-full w-14">
                    <img alt="icon" className="w-1/2" src={card.image} />
                  </div>

                  <h1 className="text-2xl md:text-[32px] leading-[41.6px] font-light text-[#FFFFFF] tracking-wider w-full">
                    {card.title}
                  </h1>

                  <div className="">
                    <h4 className="text-base md:text-2xl md:leading-9 text-primary font-semibold">
                      {card.name}
                    </h4>

                    <p className="text-[#96ACAF] text-xl leading-[30px]">
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

{
  /* <div className="flex flex-col items-center justify-center">

<div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6 font-body text-center">

<div className="bg-[#183A40] flex h-14 items-center justify-center p-2 rounded-full w-14">
  <img alt="icon" className="w-1/2" src={image} />
</div>

  <h1 className="text-2xl md:text-[32px] leading-[41.6px] font-light text-[#FFFFFF] tracking-wider w-full">
    {title}
  </h1>

  <div>

    <h4 className="text-base md:text-2xl md:leading-9 text-primary font-semibold">
      {name}
    </h4>

      <p className="text-[#96ACAF] text-xl leading-[30px]">{Occupation}</p>

  </div>

  <div className="flex items-center gap-4 mt-4">
    <button
      onClick={prevSlide}
      className="bg-[#96ACAF33] p-3 rounded-lg hover:bg-[#C4C4C4] transition duration-300"
    >
      <FaArrowLeft className="text-primary" />
    </button>
    <button
      onClick={nextSlide}
      className="bg-[#96ACAF33] p-3 rounded-lg hover:bg-[#C4C4C4] transition duration-300"
    >
      <FaArrowRight className="text-primary" />
    </button>
  </div>
</div>
</div> */
}
