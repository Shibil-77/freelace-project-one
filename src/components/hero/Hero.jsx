import React from "react";
// import "./hero.css";
import Image from "next/image";
// import { FaArrowRightLong } from "react-icons/fa6";
// import svg from "../../assets/wave-haikei (1).svg";
import heroImg from "../../assets/gifs/1ebbadda5cbd38662d07f54f0ee14679.gif";
// import Button from "../common/Button";

const Hero = () => {
  return (
    <div className="relative  lg:container ">
      <section className="hero-section  md:pb-0 pb-5  flex flex-col  pt-4  lg:flex-row ">
        <div className="mt-10 lg:w-1/2 py-10 " id="element">
          {/* <p className='text-text-color hidden md:block font-bold mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left'>
                   Digital Product
                </p> */}
          <h1 className="hero-head text-4xl mt-4 text-center  font-extrabold  text-secondary md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
            <span>Tasker brings all</span> <br />
            <span className="mt-9">your tasks Teams &</span> <br /> <span>tools together </span>
          </h1>
          <p className="hero-p lg:mx-0 mx-5 text-font-color mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
            Keep everything in the same place—even if your team isn’t.
          </p>
          <div className="lg:mt-4 mt-3">
            <a href="https://play.google.com/store/apps/details?id=com.vehicify.vehicifydriver">
              <button className=" px-5 md:px-6  hover:opacity-50 mx-auto lg:mx-0 gap-3 py-3 md:py-4 flex text-lg md:text-xl text-secondary rounded-lg font-medium bg-gradient-to-b from-primary via-primary to-primary cursor-pointer">
                Download
                <span className="text-primary text-sm md:text-base self-center">
                  {/* <FaArrowRightLong /> */}
                </span>
              </button>
            </a>
          </div>
     
        </div>
        <div className="hidden lg:block lg:1/2" id="element2">
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
