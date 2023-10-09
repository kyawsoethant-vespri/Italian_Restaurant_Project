import React from "react";
import { pizzas } from "./data";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((pizza) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 xl:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          key={pizza.id}
          href={`/product/${pizza.id}`}
        >
          {/* IMAGE CONTAINER */}
          <div className="relative h-[80%]">
            {pizza.img && (
              <Image src={pizza.img} alt="" fill className="object-contain" />
            )}
          </div>
          {/* TEXT CONTAINER */}
          <div className="flex justify-between items-center font-bold">
            <h1 className="text-base sm:text-sm lg:text-lg uppercase p-2">
              {pizza.title}
            </h1>
            <h2 className="group-hover:hidden text-xl">${pizza.price}</h2>
            <button className="bg-red-500 text-white p-2 rounded-md hidden group-hover:block">
              Add To Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
