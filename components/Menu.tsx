import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";


const menuData = [
  {
    img: "/cake.avif",
    title: "Delicioso pastel de chocolate",
    desc: "pastel de chocolate artesenal para 3 pesronas",
    price: "$29.500",
  },
  {
    img: "/muchacho.jpg",
    title: "muchacho",
    desc: "muchacho relleno",
    price: "$16.500",
  },
  {
    img: "/cocidoBoyacense.png",
    title: "Cocido Boyacense",
    desc: "cocido Boyacense",
    price: "$15.500",
  },
  {
    img: "/pizza.jpg",
    title: "Italiana Pizza",
    desc: "30 cm",
    price: "$29.500",
  },
  {
    img: "/trucha.jpg",
    title: "trucha",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.500",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "personal",
    price: "$29.5000",
  },
  {
    img: "/muchacho.jpg",
    title: "muchacho",
    desc: "muchacho relleno",
    price: "$16.500",
  },
  {
    img: "/trucha.jpg",
    title: "trucha",
    desc: "truchas al ajillo",
    price: "$29.500",
  },
];

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Nuestro <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          con amor, sabor y sazon
          <br />
          sumere, ¿que va ordenar?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Aperitivos</li>
        <li>Desayuno</li>
        <li>Ensaladas</li>
        <li>Carnes & Pescados</li>
        <li>Sopas</li>
        <li>Desert</li>
        <li>bebidas</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.png"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;