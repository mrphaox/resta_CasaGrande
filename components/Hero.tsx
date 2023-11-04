import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";


const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src="/OIG-.png"
        width={1000}
        height={600}
        alt="hero_bg"
      />
      <NavBar    />
      <div className="container h-[calc(100vh-120px)] grid items-center">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-4">
          <p className="uppercase font-medium">sumerce, ¿que platillo se le va antojar? </p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Casa <span className="text-accent">Grande</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Delicious food color, aroma and taste.
            <br /> Supersona ¿que esta esperando a pedir?
          </p>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
            Echele ojo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;