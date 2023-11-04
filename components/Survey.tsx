import Image from "next/image";
import React from "react";

const Survey = () => {
  return (
    <div className="container pt-40">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Sobre</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            nuesta <span className="text-accent">historia</span>
          </h2>

          <p className="text-gray-700 pt-16">
            Bienvenidos a nuestro restaurante, donde la pasión por la cocina
            profesional se encuentra con el amor por los sabores auténticos y
            los ingredientes frescos. Aquí, cada plato es una celebración de la
            gastronomía, preparado con habilidad y dedicación por nuestros chefs
            expertos.
          </p>

          <p className="text-gray-700 pt-8">
            Nuestro objetivo es llevarles en un viaje culinario, explorando una
            variedad de sabores y texturas que deleitarán sus sentidos. Desde
            platos clásicos hasta creaciones innovadoras, nuestra carta ofrece
            algo para todos los gustos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
