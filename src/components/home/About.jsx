import React from 'react';
import { aboutList } from '../../lib/db';

const About = () => {
    return (
        <section className="p-6">
        <div className="w-full sm:h-screen bg-[url('/Img/about-bg-img.png')] bg-no-repeat bg-cover bg-right-bottom text-white flex items-center justify-start max-w-[1344px] max-h-[564x] mx-auto rounded-3xl py-8 px-6 md:px-20 container my-6">
          <div>
            <h2 className="text-[#FFFFFF] font-heading text-[28px] leading-[34.13px] md:text-[32px] md:leading-[39.01px] font-semibold tracking-wide mb-2 md:mb-[9px] text-pretty max-w-[591px]">
            Allocate effort where your reps make an impact.
            </h2>
            <h2 className="text-primary italic font-heading text-[24px] leading-[29.26px] md:text-[32px] md:leading-[39.01px] font-medium tracking-wide">
            Let us handle the rest.
            </h2>
            <p className="text-[#FFFFFF] font-body text-lg leading-[23.4px] md:text-[20px] md:leading-[26px] font-light tracking-wide max-w-[582px] mt-6 md:mt-[17px] mb-[30px] md:mb-[94px]">
            Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
            </p>
    
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8">
                {aboutList.map((feature, index) => (
                  <div
                    key={index}
                    className='md:max-w-[184px]'
                  >
                    <h1 className='text-primary font-heading font-bold text-[32px] md:text-[40px] leading-[41.6px] md:leading-[52px] pb-2.5'>{feature.title}</h1>
                    <p className='text-[#E9EEF1] font-heading text-lg leading-[23.4px] md:text-xl md:leading-[26px] font-light tracking-wide'>{feature.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
    </section>
    );
};

export default About;