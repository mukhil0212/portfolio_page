"use client";

import { HERO_CONTENT } from "../constants/index";
import Image from "next/image";
import profilePic from "../assets/kevinRushProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 text-white h-screen flex items-center justify-center">
      <div className="flex flex-wrap items-center w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="pb-4 text-4xl font-thin tracking-light lg:text-6xl">
              Mukhil Baskaran
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl tracking-light">
              CS Student
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center ">
          <Image src={profilePic} alt="Mukhil Baskaran" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
