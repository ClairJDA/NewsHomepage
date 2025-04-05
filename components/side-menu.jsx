"use client";

import Image from "next/image";
import React from "react";

function SideMenu({ handleClose }) {
  return (
    <div className="w-full h-full min-[541px]:hidden absolute top-0 right-0 bg-very-dark-blue/30">
      <div className="w-[70%] h-screen p-8 bg-off-white absolute top-0 right-0 md:hidden flex flex-col gap-y-24">
        <Image
          src="/images/icon-menu-close.svg"
          alt="logo"
          width={35}
          height={35}
          onClick={() => handleClose(false)}
          className="self-end"
        />
        <ul className="flex flex-col gap-y-4 text-very-dark-blue">
          <li className="hover:text-soft-red hover:cursor-pointer">Home</li>
          <li className="hover:text-soft-red hover:cursor-pointer">New</li>
          <li className="hover:text-soft-red hover:cursor-pointer">Popular</li>
          <li className="hover:text-soft-red hover:cursor-pointer">Trending</li>
          <li className="hover:text-soft-red hover:cursor-pointer">Categories</li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
