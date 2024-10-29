import React from "react";

import uses1 from "../assets/usesimg/uses-1.png";
import uses2 from "../assets/usesimg/uses-2.png";
import uses3 from "../assets/usesimg/uses-3.png";

import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
          <motion.div
            variants={SlideRight(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-4 flex flex-col justify-center"
          >
            <h1 className="text-darkBlue font-bold text-3xl">
              How it helps people
            </h1>
            <p className=" text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              esse ab natus.
            </p>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a href="" className="text-red-400">
                Learn More
              </a>
            </p>
            <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-primary hover:text-white w-fit">
              Get in touch
            </button>
          </motion.div>
          <motion.div
            variants={SlideRight(0.5)}
            initial="initial"
            whileInView="animate"
          >
            <img src={uses1} alt="" className="rounded-3xl" />
            <h1 className="text-gray-400 mt-4 text-center ">Coronovirus</h1>
          </motion.div>
          <motion.div
            variants={SlideRight(0.6)}
            initial="initial"
            whileInView="animate"
          >
            <img src={uses2} alt="" className="rounded-3xl" />
            <h1 className="text-gray-400 mt-4 text-center ">Diagnostics</h1>
          </motion.div>
          <motion.div
            variants={SlideRight(0.7)}
            initial="initial"
            whileInView="animate"
          >
            <img src={uses3} alt="" className="rounded-3xl" />
            <h1 className="text-gray-400 mt-4 text-center  ">Symptoms</h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
