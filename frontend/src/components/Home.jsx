import React from "react";
import Hero from "./hero";
import Projects from "./Projects";
import Quotes from "./quoets";
import HowItWorks from "./HowItWorks";
import Why from "./why";
import { service } from "../assets";
import { services } from "../constants";

const Cards = ({ image, heading, description, button }) => {
    return (
        <div className=" text-black  text-center flex flex-col justify-between  font-bold items-center pl-6 pr-6  ">
            <div className="mb-3">
                <img src={image} alt="Industry images" className="h-20 w-20  sm:h-16 sm:w-16 md:h-16 md:w-20" />
            </div>
            <div className="flex flex-col  ">
                <p className=" text-2xl">{heading}</p>
                <p className=" text-sm mt-2">{description}</p>
            </div>
            <p className="text-xl rounded mt-10 text-white  bg-blue-600 opacity-75 p-4 hover:outline-none hover:ring-2 hover:ring-white cursor-pointer">{button}</p>
        </div>
    );
};

const Home = () => {
    return (
        <div className="w-screen  ">
            <Hero />

            {/* Services */}
            <div className="relative bg-services-background  bg-cover bg-no-repeat bg-center">
                <div className=" h-full z-10 flex flex-col md:flex-row text-[10px] ">
                    <div className="flex justify-center items-center p-6 font-bold bg-blue-600 opacity-70  text-black text-center  ">
                        <h1 className=" font-bold text-white text-3xl sm:text-2xl md:text-3xl ">Services we provide</h1>
                        <img className="w-14 sm:w-10 md:w-9 lg:w-12" src={service} alt="arrow-image" />
                    </div>
                    <div className="flex flex-col md:justify-between md:items-center  lg:flex-row p-4 gap-y-16 ">
                        {services.map((service, index) => (
                            <Cards key={`project-${index}`} index={index} {...service} />
                        ))}
                    </div>
                </div>

            </div>

            <Projects />
            <Quotes />
            <HowItWorks />
            <Why />
        </div>
    );
};

export default Home;
