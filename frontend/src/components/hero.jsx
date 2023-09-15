import React from "react";
import { heroBg, topHeroImage } from "../assets";

const Hero = () => {
  return (
    <div className="mt-20 relative">
      <div
        style={{ height: "110vh" }}
        className="bg-custom-name z-0 bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="absolute mt-12 top-0 left-0 z-10">
        <h1 className="z-20">ARSHAD</h1>
      </div>
    </div>
  );
};

export default Hero;
