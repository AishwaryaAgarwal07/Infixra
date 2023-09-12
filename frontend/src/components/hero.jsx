import React from "react";
import { heroBg } from "../assets";
const Hero = () => {
  return (
    <div className="border">
      <img src={heroBg} alt="logo" className="w-screen h-90  object-contain" />
      <h1 className="mt-0">Lucifer</h1>
    </div>
  );
};

export default Hero;
