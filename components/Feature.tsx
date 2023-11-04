import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Nuestros</h2>
      <h2 className="text-6xl font-bold pt-2">
        Platos de <span className="text-accent"> Rechupete</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        En casa grande es un restaurante famoso por tener platos demasiados
        endemicos del departamento donde se le da amor, sabor y lo mas
        importante olor.
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/muchacho.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Muchcho Relleno</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Aunque no pude encontrar información específica sobre este plato,
              “el muchacho” es un término comúnmente utilizado en América Latina
              para referirse a ciertos cortes de carne.
              <br />
              Dependiendo del país y la región, puede referirse a diferentes
              partes del animal. En general, puedes esperar que “el muchacho”
              sea un plato sabroso y satisfactorio basado en carne.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid_2.png"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Cocido Boyacense</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Este es un plato tradicional de la región del Altiplano
              Cundiboyacense en Colombia. Su origen se remonta a la época
              virreinal, cuando los españoles trajeron a Colombia los cocidos y
              la olla podrida.
              <br />
              El Cocido Boyacense se hace con carne de cerdo, res, pollo y
              tubérculos como los nabos, las chuguas y las ibias. Este plato es
              conocido por su sabor único, que combina la frescura de los
              tubérculos andinos con la riqueza de las carnes. Al probarlo,
              puedes esperar una explosión de sabores que reflejan la rica
              tradición culinaria de la región.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/trucha.jpg"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl"> Trucha al ajillo</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              La trucha al ajillo combina la frescura de la trucha con el
              intenso sabor del ajo y el aroma del aceite de oliva6.
              Normalmente, este plato se sirve acompañado de guarniciones
              frescas y sencillas, como unas papas al vapor o una ensalada de
              aguacate5. Al probarlo, puedes esperar un sabor delicado y suave
              de la trucha que absorbe a la perfección los sabores del ajo y el
              aceite de oliva5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
