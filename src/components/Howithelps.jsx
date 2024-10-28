import React from "react";

import Card from "./CardComp";

import card1 from "../assets/cardIcon/card-1.png";
import card2 from "../assets/cardIcon/card-2.png";
import card3 from "../assets/cardIcon/card-3.png";

const Howithelps = () => {
  return (
    <section>
      {/* main-container */}
      <div className="container pt-16">
        {/* inner-container containing main elements*/}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
          {/* cards */}
          <div className="col-span-2 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <div>
                <Card
                  icon={card1}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                  }
                  heading={"Symptoms"}
                ></Card>
              </div>
              <div>
                <Card
                  icon={card2}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                  }
                  heading={"Recomendation"}
                ></Card>
              </div>
              <div>
                <Card
                  icon={card3}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                  }
                  heading={"Local information"}
                ></Card>
              </div>
            </div>
          </div>
          {/* text-section */}
          <div className="flex flex-col justify-center md:justify-start md:mt-4 xl:pr-14">
            <h1 className="text-darkBlue font-bold text-3xl">
              How it Helps people
            </h1>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              esse ab natus.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a href="" className="text-red-500">
                Learn more
              </a>
            </p>
            <button className="mt-4 border border-gray-400 w-fit py-2 px-4 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howithelps;
