"use client";
import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarPhone from "./NavbarPhone";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="block md:hidden">
        <NavbarPhone />
      </div>

    </>
  );
};

export default Navbar;