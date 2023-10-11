import React from "react";
import { topHeroImage } from "../assets";

const Hero = () => {
    return (
        <div className="mt-10  relative border lg:w-[99.9%] ">
            {/* Div for background image */}
            <div className="bg-custom-name h-100 md:h-[98vh] z-0 bg-cover bg-no-repeat bg-center"></div>

            <div className="absolute mt-12 top-0 left-0 z-10 flex flex-row  p-4 md:p-5 xl:mx-32  ">
                {/* Hero text div */}
                <div className="flex flex-col justify-center items-center p-5 md:ml-20 mt-5 ">
                    <b><p className="text-2xl md:text-3xl md:flex md:flex-col ml-10 ">One Route Solutions for your <b className="text-yellow-500">Home | Office</b></p></b>
                    <ul className="list-disc ml-5 mt-8 text-xl space-y-4 ">
                        <li>Architecture</li>
                        <li>Renovation</li>
                        <li>Interior design</li>
                    </ul>

                    {/* Hero button div*/}
                    <div className="flex   rounded text:xl md:text-2xl mt-24 md:mt-44 text-black cursor-pointer">
                        <p className="p-2 rounded bg-heroButton">Book a free consultation</p>
                        <p className="p-2 rounded hover:ml-3 flex items-center bg-heroButton ml-1">→</p>
                    </div>
                </div>

                <img className=" hidden sm:block sm:mt-24 sm:h-96 md:h-[28rem] lg:ml-72 " src={topHeroImage} alt="Left House Image" />
            </div>
        </div>
    );
};

export default Hero;
