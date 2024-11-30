import React from "react";
import { Button } from "../common/Button";
import { BsArrowUpRightSquare } from "react-icons/bs";

const ContactUs = () => {
  return (
    <section className="md:py-24 md:px-20 py-16 px-6">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-primary font-heading text-base md:text-xl leading-[19.5px] md:leading-[24.38px] tracking-widest">GET STARTED</h2>
        <h1 className="text-[#FFFFFF] text-4xl font-heading italic leading-[43.88px] font-medium tracking-tighter">Embrace <span className="font-bold not-italic">the new era of</span> outbound.</h1>
        <p className="text-[#FFFFFF] text-center font-body text-lg md:text-xl leading-[23.4px] md:leading-[26px] font-light tracking-tighter max-w-[490px] py-[23px]">
          Wizia lets you train, activate, and optimize aiDRs. Take your outbound
          to new levels of performance and efficiency.
        </p>
        <Button className="flex items-center justify-center gap-2">
          Sign Up for the Beta <BsArrowUpRightSquare className="bg-[#0CC1C5]" />
        </Button>
      </div>
    </section>
  );
};

export default ContactUs;
