import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="h-screen bg-black flex flex-col md:flex-row md:justify-between md:h-[70vh] md:bg-[url('/offerBg.png')]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white font-bold text-5xl xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>

        <CountDown />

        <button className="bg-red-500 text-white rounded-md px-6 py-3">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" alt="" className="object-contain" fill />
      </div>
    </div>
  );
};

export default Offer;
