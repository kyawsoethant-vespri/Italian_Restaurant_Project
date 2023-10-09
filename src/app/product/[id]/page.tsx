import Image from "next/image";
import React from "react";
import { singleProduct } from "./data";
import Price from "@/components/Price";

const SingleProductPage = () => {
  return (
    <div className="h-screen p-4 lg:px-20 xl:px-40 flex flex-col justify-around md:flex-row text-red-500 md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="flex flex-col gap-4 h-1/2 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
