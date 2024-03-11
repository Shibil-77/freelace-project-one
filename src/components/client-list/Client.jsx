import React from "react";
import "./clientlist.css";
import img from "../../assets/clients/Wikipedia-Logo-black-and-white.png";
import Image from "next/image";

const ClientList = () => {
  const client = [
    {
      name: "SummitSoft Corporation",
      location: "USA",
    },
    {
      name: "Virtual Training Company(VTC)",
      location: "USA",
    },
    {
      name: "WishFairy",
      location: "USA",
    },
    {
      name: "CheerHosting",
      location: "USA",
    },
    {
      name: "Put-In -Cups",
      location: "USA",
    },
    {
      name: "FirstMarketing Solutions",
      location: "USA",
    },
    {
      name: "Reynolds & Reynolds",
      location: "Australia",
    },
    {
      name: "Designersites",
      location: "Australia",
    },
    {
      name: "ABC Skoltrojor",
      location: "Taby, Sweden",
    },
    {
      name: "Bridgeway Group",
      location: "Dubai",
    },
    {
      name: "Galaxy Infotech Corporation",
      location: "USA, Abu Dhabi, Dubai.",
    },
    {
      name: "WebHostingSolutions 4U",
      location: "Dubai",
    },
    {
      name: "Futurestars",
      location: "Dubai",
    },
    {
      name: "PeeVees Group Company",
      location: "India",
    },
    {
      name: "Kinlet Packaging, Kinfra Food Park",
      location: "Calicut, India",
    },
    {
      name: "Indus Motors Co. Ltd",
      location: "Cochin, India",
    },
    {
      name: "BridgMe",
      location: "USA",
    },
    {
      name: "AminSoft",
      location: "USA",
    },
    {
      name: "Straight Path International School",
      location: "India",
    },
    {
      name: "Micaza Holidays",
      location: "India",
    },
    {
      name: "Ciudad Builders",
      location: "India",
    },
  ];
  return (
    <>
      <div className=" lg:my-16 text-secondary lg:container bg-backgound-color" id="element3">
        <div className="text-center md:py-10 py-5" >
          <h1 className="md:text-[36px] text-[24px] font-bold" >
            {/* Proudly Serving{" "} */}
            <span className="md:text-[36px] text-[36px] text-secondary font-play">
              Trusted Clients
            </span>
          </h1>
          <p className="text-secondary text-[13px] md:text-[15px] font-play">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
            <br />
            nonumy eirmod tempor invidunt ut labore et
          </p>
        </div>
        <div className="slider text-black">
          <div className="slide-track">
            {client.map((item, index) => (
              <div
                key={index}
                className="slide text-center hover:scale-110 transform ease-in-out transition-all duration-300"
              >
                <h1 className="font-play">{item.name}</h1>
                <div className="flex justify-center my-5">
                <Image src={img} alt="hello" className="lg:w-24 w-20 h-20 lg:h-24 " />
                </div>
               

                {/* <p className="font-semibold font-play">{item.location}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientList;
