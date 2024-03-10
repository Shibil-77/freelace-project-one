import React from "react";
// import "./hero.css";
import Image from "next/image";
// import { FaArrowRightLong } from "react-icons/fa6";
// import svg from "../../assets/wave-haikei (1).svg";
import heroImg from "../../assets/logos/hero.svg";
// import Button from "../common/Button";

const Hero = () => {
  return (
    <div className="relative  lg:container">
      <section className="hero-section bg-backgound-color md:pb-0 pb-5  flex flex-col px-16 pt-4  lg:flex-row ">
        <div className="mt-10 lg:w-1/2 ">
          {/* <p className='text-text-color hidden md:block font-bold mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>
                   Digital Product
                </p> */}
          <h1 className="hero-head text-4xl mt-4 text-center font-extrabold leading-10 text-secondary md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
            Tasker brings all your tasks Teams & tools together
          </h1>
          <p className="hero-p text-font-color mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
            Keep everything in the same place—even if your team isn’t.
          </p>
          {/* <div className="lg:mt-4">
            <a href="https://play.google.com/store/apps/details?id=com.vehicify.vehicifydriver">
              <button className=" px-5 md:px-6  hover:opacity-50 mx-auto lg:mx-0 gap-3 py-3 md:py-4 flex text-lg md:text-xl text-primary rounded-lg font-medium bg-gradient-to-b from-[#f88306] via-[#ee7439] to-[#ec6d3a] cursor-pointer">
                Download
                <span className="text-primary text-sm md:text-base self-center">
                  <FaArrowRightLong />
                </span>
              </button>
            </a>
          </div> */}
          {/* <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
            <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                Support
              </li>
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                Growth
              </li>
              <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                Management
              </li>
            </ul>
          </div> */}
        </div>
        <div className="hidden lg:block lg:1/2">
          <Image
            className="w-full h-[30rem]"
            src={heroImg}
            alt="users are reading articles"
          />
        </div>
      </section>
      {/* <div className="h-32 hidden  md:block bg-secondary border-none">
        <Image
          className="w-full bottom-0  absolute border-none "
          //  src={svg}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Hero;
