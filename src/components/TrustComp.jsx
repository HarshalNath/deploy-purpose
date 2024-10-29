import React from "react";

import trust1 from "../assets/trust/trust-1.png";
import trust2 from "../assets/trust/trust-2.png";

import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const TrustComp = () => {
  return (
    <section>
      <div className="container pt-16 bg-brandWhite">
        <motion.h1
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-darkBlue text-4xl text-center font-bold m-6"
        >
          Why you can trust this tools
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* main text */}

          {/* left side */}

          <motion.div
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            className="text-center md:text-left space-y-6 md:px-32"
          >
            <img src={trust1} alt="" />
            <h1 className="font-semibold text-3xl">
              Based on reliable sources
            </h1>
            <p>
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO.
            </p>
            <p className="text-gray-400">
              Enchance your preliminary diagnosis and triage with pediatric
              content{" "}
              <a href="" className="text-red-400">
                Learn more
              </a>
            </p>
          </motion.div>

          {/* right side */}

          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="text-center md:text-left space-y-6 md:px-32"
          >
            <img
              src={trust2}
              alt=""
              className="mx-auto md:mx-0 h-[97px] w-[107px] object-fill"
            />
            <h1 className="font-semibold text-3xl">
              Based on reliable sources
            </h1>
            <p>
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO.
            </p>
            <p className="text-gray-400">
              Enchance your preliminary diagnosis and triage with pediatric
              content{" "}
              <a href="" className="text-red-400">
                Learn more
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustComp;
