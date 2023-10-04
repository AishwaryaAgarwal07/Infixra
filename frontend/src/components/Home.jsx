import React from "react";
import Hero from "./hero";
import Projects from "./Projects";
import Quotes from "./quoets";
import HowItWorks from "./HowItWorks";
import Why from "./why";
import { service } from "../assets";
import { services } from "../constants";

const Cards = ({ image, heading, description,button }) => {
  return (
    <div className="ml-1 text-black mr-1 text-center flex flex-col font-bold items-center pl-6 pr-6 sm:pl-4 sm:pr-4 md:pl-2 md:pr-2">
      <img src={image} alt="Industry images" className="h-20 w-20 mb-4 -mt-28 sm:h-16 sm:w-16 md:h-12 md:w-12"/>
      <p className="text-2xl">{heading}</p>
      <p className="text-xm mt-2">{description}</p>
      <p className="text-xl rounded mt-24 text-white  bg-blue-500 p-4 hover:outline-none hover:ring-2 hover:ring-white cursor-pointer">{button}</p>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Hero />

      {/* Services */}
      <div className="relative">
        <div className="h-96 bg-services-background z-0 bg-cover bg-no-repeat bg-center">
          <div className="absolute z-10 flex flex-row text-[10px] mt-36">
            <div className="flex flex-col font-bold text-black text-center ml-4">
              <h1 className="#">Services</h1>
              <h1>we</h1>
              <h1 className="#">provide</h1>
            </div>
            <img className="h-14 mt-6" src={service} alt="arrow-image" />
            <div className="flex flex-row ">
              {services.map((service, index) => (
                <Cards key={`project-${index}`} index={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Projects />
      <Quotes />
      <HowItWorks />
      <Why />
    </>
  );
};

export default Home;
