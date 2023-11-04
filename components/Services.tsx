import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Cocina profesional",
    desc: "La alta cocina en un rincon de boyaca",
  },
  {
    img: "/services__2.png",
    title: "Domicilios",
    desc: "Desde la cocina a su casa ",
  },
  {
    img: "/services__3.png",
    title: "lista de vinos",
    desc: "Listados de viñedos locales y internacionales ",
  },
  {
    img: "/services__4.png",
    title: "Wifi",
    desc: "Para postear nuestros productos",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Sumerce escoga <span className="text-accent">Nuestro servicio</span>
        </h2>
        <p className="text-gray-700">
         le damos el mejor servicio para eventos y alta comida tradicional
          <br />
          Sumerce que servicio va querer, que le brindemos 
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;