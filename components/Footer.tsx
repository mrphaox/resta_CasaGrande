import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="pt-40 container">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Sobre Nosotros</h2>
          <p className="leading-[1.8]">
            Así que ven y únete a nosotros para una comida. Ya sea que estés
            celebrando una ocasión especial o simplemente disfrutando de una
            noche fuera, estamos aquí para hacer que tu experiencia culinaria
            sea inolvidable. ¡Esperamos verte pronto! 😊
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Casa Grande</h2>

          <ul className="space-y-2">
            <li>Sobre Nosotros</li>
            <li>Eventos</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <FaFacebookF />
            <BsTwitter />
            <BsPinterest />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2023 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
