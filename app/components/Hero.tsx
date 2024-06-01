"use client";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 text-white h-screen flex items-center justify-center">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-center">
            <h1 className="pb-4 text-4xl font-thin tracking-light lg:text-6xl">
              Mukhil Baskaran
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl tracking-light">
              CS Student
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
