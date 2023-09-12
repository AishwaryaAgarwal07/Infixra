import React from "react";
import { heroBg } from "../assets";
const Hero = () => {
  return (
    <div className="border h-96">
      <img src={heroBg} alt="logo" className="w-screen h-90  object-contain" />
    </div>
  );
};

export default Hero;
