import React from "react";
import hero from "../assets/hero.png";

import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const Hero = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 bg-brandWhite min-h-[650px]">
      {/* texxt section */}
      <div className="flex flex-col justify-center gap-3 xl:pr-40 ">
        <div className="text-center mb-10 mt-24 md:mt-0 md:mb-0 space-y-4 md:text-left">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-5xl text-darkBlue font-bold"
          >
            COVID-19 Risk Assessment Tool
          </motion.h1>
          <motion.p
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            className="text-gray-400 text-lg"
          >
            A set of solutions designed to help quickly identify coronavirus
            symptoms and get reliable information regarding COVID-19 concerns.
          </motion.p>
          <motion.button
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="bg-primary py-4 px-6 text-white rounded-lg"
          >
            see how to use it
          </motion.button>
        </div>
      </div>

      {/* image section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <img src={hero} alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
