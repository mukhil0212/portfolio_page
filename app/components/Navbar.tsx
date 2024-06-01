"use client"; // This directive ensures the component is a client component

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("nav");
      if (window.scrollY > 0) {
        header?.classList.add("sbg");
      } else {
        header?.classList.remove("sbg");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full flex justify-between items-center p-8 z-50 transition-all duration-300">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
      </div>
      <ul
        className={`navlinks flex space-x-8 ${
          isMenuOpen ? "flex-col space-y-4" : "hidden md:flex"
        }`}
      >
        <li>
          <Link href="#about" className="text-white hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#skills" className="text-white hover:text-gray-400">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="hamburger md:hidden flex flex-col items-center space-y-1 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-1 bg-white"></span>
        <span className="block w-6 h-1 bg-white"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </div>
    </nav>
  );
};

export default Navbar;
