import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 bg-brandWhite min-h-[650px]">
      {/* texxt section */}
      <div className="flex flex-col justify-center gap-3 xl:pr-40 ">
        <div className="text-center mb-10 mt-24 md:mt-0 md:mb-0 space-y-4 md:text-left">
          <h1 className="text-5xl text-darkBlue font-bold">
            COVID-19 Risk Assessment Tool
          </h1>
          <p className="text-gray-400 text-lg">
            A set of solutions designed to help quickly identify coronavirus
            symptoms and get reliable information regarding COVID-19 concerns.
          </p>
          <button className="bg-primary py-4 px-6 text-white rounded-lg">
            see how to use it
          </button>
        </div>
      </div>

      {/* image section */}
      <div className="flex items-center justify-center">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
