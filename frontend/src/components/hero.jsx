import React from "react";
import { topHeroImage } from "../assets";

const Hero = () => {
  return (
    <div className="mt-20 relative">
      {/* Div for background image */}
      <div style={{ height: "110vh" }} className="bg-custom-name z-0 bg-cover bg-no-repeat bg-center"></div>

      <div className="absolute mt-12 top-0 left-0 z-10 flex flex-row">
        <div className="flex flex-col ml-20 mt-14">
          <b><p className="text-3xl">One Route Solutions for your <b className="text-yellow-500">Home | Office</b></p></b>
          <ul className="list-disc ml-5 mt-8 text-xl space-y-4">
            <li>Architecture</li>
            <li>Renovation</li>
            <li>Interior design</li>
          </ul>
        </div>
        {/* <img className="h-1/5 mx-40" src={topHeroImage} alt="Left House Image" /> */}
      </div>
    </div>
  );
};

export default Hero;
