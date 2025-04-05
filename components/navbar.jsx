"use client";

import Image from "next/image";
import React, { useState } from "react";
import SideMenu from "./side-menu";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 flex justify-between items-center">
      <Image src={"/images/logo.svg"} alt="logo" width={60} height={60} />
      <ul className="hidden md:flex gap-x-4 text-dark-grayish-blue  hover:cursor-pointer">
        <li className="hover:text-soft-red">Home</li>
        <li className="hover:text-soft-red">New</li>
        <li className="hover:text-soft-red">Popular</li>
        <li className="hover:text-soft-red">Trending</li>
        <li className="hover:text-soft-red">Categories</li>
      </ul>
      <Image
        src={"/images/icon-menu.svg"}
        alt="menu"
        width={40}
        height={60}
        className="md:hidden"
        onClick={() => setOpen(true)}
      />
      {open && <SideMenu handleClose={setOpen} />}
    </div>
  );
}

export default Navbar;
