"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import CartIcon from "./CartIcon";

const Links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //Temporary user Login
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          alt=""
          src="/open.png"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          alt=""
          src="/close.png"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="absolute left-0 top-24 bg-red-500 text-white h-[calc(100vh-6rem)] flex flex-col w-full justify-center text-center gap-8 text-3xl z-10">
          {Links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
