import Image from "next/image";
import React from "react";

const CartIcon = () => {
  return (
    <div className="flex justify-center gap-4 items-center md:gap-1">
      <div className="relative md:w-5 md:h-5">
        <Image src="/cart.png" alt="" width={32} height={32} />
      </div>
      <span>Cart (3)</span>
    </div>
  );
};

export default CartIcon;
