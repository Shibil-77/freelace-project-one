import React from "react";
// import "./hero.css";
import Image from "next/image";
// import { FaArrowRightLong } from "react-icons/fa6";
// import svg from "../../assets/wave-haikei (1).svg";
import heroImg from "../../assets/gifs/1ebbadda5cbd38662d07f54f0ee14679.gif";
// import Button from "../common/Button";

const Features = () => {
  return (
    <div className="relative  lg:container ">
      <section className="hero-section  md:pb-0 pb-5  flex flex-col  pt-4  lg:flex-row ">
        <div className="lg:mt-10 lg:w-1/2 lg:py-10 py-5 " id="element">
          <p className="text-primary hidden md:block font-play mt-4 text-center md:text-xl lg:text-base xl:text-lg lg:text-left">
            Learn about Features
          </p>
          <h1 className="hero-head text-4xl mt-4 text-center  font-play  text-secondary md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
            <span>Our Top Features</span> <br />
            {/* <span className="mt-9">your tasks Teams &</span> <br />{" "}
            <span>tools together </span> */}
          </h1>
          <p className="hero-p lg:mx-0 mx-5 text-font-color font-play mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
          <div className="lg:mt-4 mt-3">
            <a href="https://play.google.com/store/apps/details?id=com.vehicify.vehicifydriver">
              <button className=" px-5 md:px-6 font-play hover:opacity-50 mx-auto lg:mx-0 gap-3 py-3 md:py-4 flex text-lg md:text-xl text-secondary rounded-lg font-medium bg-gradient-to-b from-primary via-primary to-primary cursor-pointer">
                Get Started
                <span className="text-primary text-sm md:text-base self-center">
                  {/* <FaArrowRightLong /> */}
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="lg:flex lg:1/2 w-full lg:ml-0 ml-10 lg:mx-0 block ">

          <div className="w-full ">
            <div className="w-full h-3/6 lg:flex justify-center">
              <div className="w-5/6  px-10   border-2 rounded-3xl border-gray-400">
                <div className="flex flex-col">
                  <div
                    id="svg-container-1"
                    className="w-20 h-20 mt-5 bg-[#f9f7ff]  flex justify-center items-center rounded-3xl hover:bg-secondary "
                  >
                    {/* <img className="w-10 h-10  " src={icon} alt="🙏 img" /> */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          opacity="0.25"
                          d="M15.4363 14.7782C14.841 14.5276 14.1 14.2154 14.1 13.975V12.4059C14.9676 11.7528 15.5 10.6951 15.5 9.6V7.5C15.5 5.5701 13.9299 4 12 4C10.0701 4 8.5 5.5701 8.5 7.5V9.6C8.5 10.6948 9.03235 11.7528 9.9 12.4059V13.975C9.9 14.2007 9.16605 14.5147 8.57665 14.7667C7.15215 15.3757 5 16.2958 5 18.7V19.05H19V18.7C19 16.2801 16.8556 15.3764 15.4363 14.7782Z"
                          fill="#00b7aa"
                        ></path>{" "}
                        <path
                          d="M8.5 9.5V7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5V9.5C15.5 10.6894 14.9067 11.7402 14 12.3727V13.323C14 13.7319 14.249 14.0996 14.6286 14.2514L16.2146 14.8858C17.8969 15.5587 19 17.1881 19 19H5C5 17.1881 6.10313 15.5587 7.78543 14.8858L9.37139 14.2514C9.75105 14.0996 10 13.7319 10 13.323V12.3727C9.09326 11.7402 8.5 10.6894 8.5 9.5Z"
                          fill="#00b7aa"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <h5 className="text-xl font-medium text-[10px] my-3">
                    <span className=" text-text-color font-play font-semibold text-[28px]">
                      Open an Account
                    </span>
                  </h5>

                  <span className="text-[#9ea1ad] mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lectus non ipsum.
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-3/6 lg:flex justify-center my-5 ">
              <div className="w-5/6  px-10   border-2 rounded-3xl border-gray-400">
                <div className="flex flex-col">
                  <div
                    id="svg-container-1"
                    className="w-20 h-20 mt-5 bg-[#f9f7ff]  flex justify-center items-center rounded-3xl hover:bg-secondary "
                  >
                    {/* <img className="w-10 h-10  " src={icon} alt="🙏 img" /> */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          opacity="0.25"
                          d="M15.4363 14.7782C14.841 14.5276 14.1 14.2154 14.1 13.975V12.4059C14.9676 11.7528 15.5 10.6951 15.5 9.6V7.5C15.5 5.5701 13.9299 4 12 4C10.0701 4 8.5 5.5701 8.5 7.5V9.6C8.5 10.6948 9.03235 11.7528 9.9 12.4059V13.975C9.9 14.2007 9.16605 14.5147 8.57665 14.7667C7.15215 15.3757 5 16.2958 5 18.7V19.05H19V18.7C19 16.2801 16.8556 15.3764 15.4363 14.7782Z"
                          fill="#00b7aa"
                        ></path>{" "}
                        <path
                          d="M8.5 9.5V7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5V9.5C15.5 10.6894 14.9067 11.7402 14 12.3727V13.323C14 13.7319 14.249 14.0996 14.6286 14.2514L16.2146 14.8858C17.8969 15.5587 19 17.1881 19 19H5C5 17.1881 6.10313 15.5587 7.78543 14.8858L9.37139 14.2514C9.75105 14.0996 10 13.7319 10 13.323V12.3727C9.09326 11.7402 8.5 10.6894 8.5 9.5Z"
                          fill="#00b7aa"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <h5 className="text-xl font-medium text-[10px] my-3">
                    <span className=" text-text-color font-play font-semibold text-[28px]">
                      Open an Account
                    </span>
                  </h5>

                  <span className="text-[#9ea1ad] mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lectus non ipsum.
                  </span>
                </div>
              </div>
            </div>


          </div>


          <div className="w-full ">
             <div className="w-full h-3/6 lg:flex justify-center my-4">
              <div className="w-5/6  px-10   border-2 rounded-3xl border-gray-400">
                <div className="flex flex-col">
                  <div
                    id="svg-container-1"
                    className="w-20 h-20 mt-5 bg-[#f9f7ff]  flex justify-center items-center rounded-3xl hover:bg-secondary "
                  >
                    {/* <img className="w-10 h-10  " src={icon} alt="🙏 img" /> */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          opacity="0.25"
                          d="M15.4363 14.7782C14.841 14.5276 14.1 14.2154 14.1 13.975V12.4059C14.9676 11.7528 15.5 10.6951 15.5 9.6V7.5C15.5 5.5701 13.9299 4 12 4C10.0701 4 8.5 5.5701 8.5 7.5V9.6C8.5 10.6948 9.03235 11.7528 9.9 12.4059V13.975C9.9 14.2007 9.16605 14.5147 8.57665 14.7667C7.15215 15.3757 5 16.2958 5 18.7V19.05H19V18.7C19 16.2801 16.8556 15.3764 15.4363 14.7782Z"
                          fill="#00b7aa"
                        ></path>{" "}
                        <path
                          d="M8.5 9.5V7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5V9.5C15.5 10.6894 14.9067 11.7402 14 12.3727V13.323C14 13.7319 14.249 14.0996 14.6286 14.2514L16.2146 14.8858C17.8969 15.5587 19 17.1881 19 19H5C5 17.1881 6.10313 15.5587 7.78543 14.8858L9.37139 14.2514C9.75105 14.0996 10 13.7319 10 13.323V12.3727C9.09326 11.7402 8.5 10.6894 8.5 9.5Z"
                          fill="#00b7aa"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <h5 className="text-xl font-medium text-[10px] my-3">
                    <span className=" text-text-color font-play font-semibold text-[28px]">
                      Open an Account
                    </span>
                  </h5>

                  <span className="text-[#9ea1ad] mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lectus non ipsum.
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-3/6 lg:flex justify-center">
              <div className="w-5/6  px-10   border-2 rounded-3xl border-gray-400">
                <div className="flex flex-col">
                  <div
                    id="svg-container-1"
                    className="w-20 h-20 mt-5 bg-[#f9f7ff]  flex justify-center items-center rounded-3xl hover:bg-secondary "
                  >
                    {/* <img className="w-10 h-10  " src={icon} alt="🙏 img" /> */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          opacity="0.25"
                          d="M15.4363 14.7782C14.841 14.5276 14.1 14.2154 14.1 13.975V12.4059C14.9676 11.7528 15.5 10.6951 15.5 9.6V7.5C15.5 5.5701 13.9299 4 12 4C10.0701 4 8.5 5.5701 8.5 7.5V9.6C8.5 10.6948 9.03235 11.7528 9.9 12.4059V13.975C9.9 14.2007 9.16605 14.5147 8.57665 14.7667C7.15215 15.3757 5 16.2958 5 18.7V19.05H19V18.7C19 16.2801 16.8556 15.3764 15.4363 14.7782Z"
                          fill="#00b7aa"
                        ></path>{" "}
                        <path
                          d="M8.5 9.5V7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5V9.5C15.5 10.6894 14.9067 11.7402 14 12.3727V13.323C14 13.7319 14.249 14.0996 14.6286 14.2514L16.2146 14.8858C17.8969 15.5587 19 17.1881 19 19H5C5 17.1881 6.10313 15.5587 7.78543 14.8858L9.37139 14.2514C9.75105 14.0996 10 13.7319 10 13.323V12.3727C9.09326 11.7402 8.5 10.6894 8.5 9.5Z"
                          fill="#00b7aa"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <h5 className="text-xl font-medium text-[10px] my-3">
                    <span className=" text-text-color font-play font-semibold text-[28px]">
                      Open an Account
                    </span>
                  </h5>

                  <span className="text-[#9ea1ad] mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lectus non ipsum.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
