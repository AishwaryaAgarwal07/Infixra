import React from "react";
import { topHeroImage } from "../assets";

const Hero = () => {
  return (
    <div className="mt-20 relative">
      {/* Div for background image */}
      <div style={{ height: "110vh" }} className="bg-custom-name z-0 bg-cover bg-no-repeat bg-center"></div>

      <div className="absolute mt-12 top-0 left-0 z-10 flex flex-row">
        {/* Hero text div */}
        <div className="flex flex-col ml-20 mt-5">
          <b><p className="text-3xl">One Route Solutions for your <b className="text-yellow-500">Home | Office</b></p></b>
          <ul className="list-disc ml-5 mt-8 text-xl space-y-4">
            <li>Architecture</li>
            <li>Renovation</li>
            <li>Interior design</li>
          </ul>

          {/* Hero button div*/}
          <div className="flex rounded text-2xl mt-44 text-black cursor-pointer">
            <p className="p-2 rounded bg-heroButton">Book a free consultation</p>
            <p className="p-2 rounded hover:ml-3 bg-heroButton ml-1">→</p>
          </div>
        </div>
        <img className="h-100 ml-60" src={topHeroImage} alt="Left House Image" />
      </div>
    </div>
  );
};

export default Hero;
