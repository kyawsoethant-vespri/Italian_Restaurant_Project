import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 flex p-4 lg:px-20 xl:px-10 items-center justify-between text-red-500 uppercase">
      <Link href="/" className="font-bold text-xl">
        Olive Garden
      </Link>
      <p>@ All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
