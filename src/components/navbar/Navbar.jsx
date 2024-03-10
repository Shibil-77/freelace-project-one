/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from "react";
import LOGO from '@/assets/logos/LOGO.svg'
import Image from "next/image";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const arr = ["Home", "About", "Servies", "Contact"];

  return (
    <div className="lg:container lg:mx-0 mx-5">
      <nav className="sticky top-0 z-50 p-0 py-5 w-full">
        <div className="w-full flex flex-wrap items-center justify-between ">
          <a href="/" className="flex items-center">
            <Image width={100} height={100} src={LOGO} className="w-28  mr-3" alt="Logo" />
            {/* <h1 className="text-2xl font-bold">PMR CONCRETE</h1> */}
          </a>
          <div className="flex md:order-2 ">
            <div className="flex lg:space-x-6 ">
              <a
                href="tel:+919188777704"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="text-2xl self-center">
                  <MdOutlineLocalPhone />
                </span> */}
              </a>
              <a
                href="mailto:pmrconcrete@pmrinfos.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="text-2xl self-center">
                  <MdMailOutline />
                </span> */}
              </a>
            </div>
            <div className="lg:block hidden self-center">
              <a href="https://play.google.com/store/apps/details?id=com.vehicify.vehicifydriver">
                {/* <Button text="Dowload"  /> */}
              </a>
            </div>

            <button
              type="button"
              onClick={toggleMobileMenu} // Call the toggle function on button click
              className="ml-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen ? "true" : "false"} // Set aria-expanded based on the state
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold bg-opacity-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {arr.map((value, index) => {
                return (
                  <li key={value}>
                    <a
                      href="/"
                      className="block font-play py-2 pl-3 pr-4 text-font-color  rounded hover:bg-secondary md:hover:bg-transparent md:hover:text-secondary md:p-0"
                      aria-current="page"
                    >
                      {value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
