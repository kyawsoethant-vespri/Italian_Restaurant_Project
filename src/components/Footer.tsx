import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 flex p-4 lg:p-7 xl:p-14 items-center justify-between text-red-500 uppercase">
      <Link href="/" className="font-bold text-xl">
        Olive Garden
      </Link>
      <p>@ All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
