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

      {/* w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] */}

    </>
  );
};

export default Navbar;