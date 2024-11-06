import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-6 px-4 md:px-10 flex items-center justify-between relative">
      <div className="text-lg font-bold">Team Force</div>

      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <nav className="hidden md:flex md:space-x-8 items-center">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Pages
        </a>
        <a href="#" className="hover:underline">
          Projects
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>

      <div className="hidden md:flex space-x-4 items-center">
        <button className=" hover:underline">Login</button>
        <button className="bg-custom-green-gradient px-4 py-2 rounded text-white">
          Sign Up
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-0 w-full max-w-2xl bg-white rounded-lg shadow-lg z-50 flex flex-col items-center py-8 space-y-4 text-secondary-900">
          <nav className="flex flex-col space-y-4 text-lg">
            <a
              href="#"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Pages
            </a>
            <a
              href="#"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>

          <div className="flex space-x-4 pt-4">
            <button className="text-gray-700 hover:underline">Login</button>
            <button className="bg-custom-green-gradient px-4 py-2 rounded text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
