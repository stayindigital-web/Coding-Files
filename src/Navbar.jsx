import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-[#EAE7DC] sticky top-0 z-50 shadow">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center text-[#2C3E50] font-medium text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="public/assets/logo.jpg"
            alt="Stallion Shelters Logo"
            className="h-12 w-auto rounded-full"
          />
          <span className="ml-2">Stallion Shelters</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => navigate("/")}
            className="text-[#2C3E50] cursor-pointer font-medium hover:text-[#C0392B] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className="text-[#2C3E50] font-medium  cursor-pointer  hover:text-[#C0392B] transition-colors"
          >
            About Us
          </button>

          {/* Services Dropdown (Click to open/close) */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center  cursor-pointer  text-[#2C3E50] font-medium hover:text-[#C0392B] transition-colors"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 h-4 w-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-48">
                <button
                  onClick={() => {
                    navigate("/interior");
                    setDropdownOpen(false);
                  }}
                  className="block px-4 py-2  cursor-pointer  text-left w-full hover:bg-gray-100"
                >
                  Interior
                </button>
                <button
                  onClick={() => {
                    navigate("/residential");
                    setDropdownOpen(false);
                  }}
                  className="block px-4 py-2  cursor-pointer  text-left w-full hover:bg-gray-100"
                >
                  Residential
                </button>
                <button
                  onClick={() => {
                    navigate("/commercial");
                    setDropdownOpen(false);
                  }}
                  className="  cursor-pointer  px-4 py-2 text-left w-full hover:bg-gray-100"
                >
                  Commercial
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/gallery")}
            className="text-[#2C3E50]  cursor-pointer  font-medium hover:text-[#C0392B] transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => navigate("/blog")}
            className="text-[#2C3E50]   cursor-pointer font-medium hover:text-[#C0392B] transition-colors"
          >
            Blog
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="text-[#2C3E50]  cursor-pointer  font-medium hover:text-[#C0392B] transition-colors"
          >
            Contact Us
          </button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden md:inline-block  cursor-pointer  bg-[#C0392B] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#A93226] transition-colors animate-pulse hover:animate-none"
        >
          +91 9043977809
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#2C3E50] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#EAE7DC] px-6 pb-4 space-y-3">
          <button onClick={() => { navigate("/"); setIsOpen(false); }} className="block w-full text-left text-[#2C3E50] hover:text-[#C0392B]">Home</button>
          <button onClick={() => { navigate("/about"); setIsOpen(false); }} className="block w-full text-left text-[#2C3E50] hover:text-[#C0392B]">About Us</button>

          {/* Services Dropdown for Mobile */}
          <div className="space-y-1">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center w-full text-[#2C3E50] font-medium hover:text-[#C0392B]"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 h-4 w-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="pl-4 space-y-1">
                <button onClick={() => { navigate("/interior"); setIsOpen(false); setDropdownOpen(false); }} className="block w-full text-left text-gray-600 hover:text-[#C0392B]">Interior</button>
                <button onClick={() => { navigate("/residential"); setIsOpen(false); setDropdownOpen(false); }} className="block w-full text-left text-gray-600 hover:text-[#C0392B]">Residential</button>
                <button onClick={() => { navigate("/commercial"); setIsOpen(false); setDropdownOpen(false); }} className="block w-full text-left text-gray-600 hover:text-[#C0392B]">Commercial</button>
              </div>
            )}
          </div>

          <button onClick={() => { navigate("/gallery"); setIsOpen(false); }} className="block w-full text-left text-[#2C3E50] hover:text-[#C0392B]">Gallery</button>
          <button onClick={() => { navigate("/blog"); setIsOpen(false); }} className="block w-full text-left text-[#2C3E50] hover:text-[#C0392B]">Blog</button>
          <button onClick={() => { navigate("/contact"); setIsOpen(false); }} className="block w-full text-left text-[#2C3E50] hover:text-[#C0392B]">Contact Us</button>

          <button onClick={() => { navigate("/contact"); setIsOpen(false); }} className="block w-full bg-[#C0392B] text-white px-4 py-2 rounded-full font-semibold text-center hover:bg-[#A93226] animate-pulse hover:animate-none">
            +91 9043977809
          </button>
        </div>
      )}
    </header>
  );
}
