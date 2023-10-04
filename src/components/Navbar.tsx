import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  // Temporary user login
  const user = false;

  return (
    <div className="h-12 flex justify-between items-center p-4 text-red-500 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl font-sans flex-1 md:font-bold md:text-center">
        <Link href="/">Olive Garden</Link>
      </div>
      {/* Mobile Menu     */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        <div className="bg-orange-300 flex px-1 items-center rounded-md md:absolute top-3 right-2 md:items-center lg:static">
          <Image src="/phone.png" width={20} height={20} alt="" />
          <span className="md:text-sm lg:text-xs">+39 83625247</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Order</Link>
        )}

        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
