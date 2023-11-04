import Image from "next/image";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center">
        <Image src="/icon.png" width={50} height={50} alt="logo" />
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <li>Inicio</li>
          <li className="bg-gray text-white px-6 py-2 rounded-3xl">About</li>
          <li>Comida</li>
          <li>Platos</li>
          <li>Contacto</li>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            Registrarse
          </button>
        </ul>

        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
