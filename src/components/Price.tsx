"use client";
import React, { useEffect, useState } from "react";

interface option {
  title: string;
  additionalPrice: number;
}

interface Props {
  price: number;
  id: number;
  options: option[];
}

const Price = ({ price, id, options }: Props) => {
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  //   console.log("Option Selected", selected);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, options, selected, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options.map((option, index) => (
          <button
            className="ring-1 ring-red-400 p-2 rounded-md"
            key={option.title}
            onClick={() => setSelected(index)}
            style={{
              background: selected === index ? "red" : "white",
              color: selected === index ? "white" : "red",
            }}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* QUANTITY & ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-400">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="bg-red-500 text-white p-3 rounded-md uppercase ring-1 ring-red-500 w-56">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
