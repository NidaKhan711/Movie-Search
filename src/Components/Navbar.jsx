import React, { useState } from "react";
import { Link } from "react-router-dom";  // React Router Link import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white p-4 shadow-md z-80">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MovieFinder</h1>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:flex md:space-x-6 text-lg fixed md:static bg-black w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 transition-transform duration-300 ease-in-out z-60`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-red-500 block md:inline-block py-2 md:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-red-500 block md:inline-block py-2 md:py-0"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            {/* Hamburger Icon Lines */}
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
