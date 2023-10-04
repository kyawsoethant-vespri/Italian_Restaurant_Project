import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 flex p-4 lg:p-20 xl:p-40 items-center justify-between text-red-500 uppercase">
      <Link href="/" className="font-bold text-xl">
        Massimo
      </Link>
      <p>@ All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
