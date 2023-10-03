import React from "react";
import Hero from "./hero";
import Projects from "./Projects";
import Quotes from "./quoets";
import HowItWorks from "./HowItWorks";
import Why from "./why";
import { service } from "../assets";
import { services } from "../constants";

const Cards = ({ image, heading,description,button }) => {
  return (
    <div>
      <h1>{heading}</h1>
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
          <div className="absolute z-10 flex flex-row text-xs mt-36">
            <div className="flex flex-col">
              <h1 className="text-black ml-2">Services we</h1>
              <h1 className="text-black ml-12">provide</h1>
            </div>
            <img className="h-16 mt-2.5" src={service} alt="arrow-image" />
            <div>
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
