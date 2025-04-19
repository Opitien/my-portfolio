import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-900 to-purple-700 text-white shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl font-bold">Opitien</h1>

        {/* Hamburger Icon (Mobile View) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
          <a href="#stack" className="hover:text-gray-300 transition">Stack</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-purple-800 to-purple-600 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-purple-400">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleMenu}>
            <FiX size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6 text-lg">
          <a href="#about" onClick={toggleMenu} className="hover:text-gray-300 transition">About</a>
          <a href="#projects" onClick={toggleMenu} className="hover:text-gray-300 transition">Projects</a>
          <a href="#stack" onClick={toggleMenu} className="hover:text-gray-300 transition">Stack</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-gray-300 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
