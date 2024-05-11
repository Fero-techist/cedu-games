import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  const closeTggle = () => {
    setIsToggle(false);
  };
  return (
    <div className=" flex items-center justify-between lg:px-24 md:px-10 px-8 py-4 bg-white">
      <div>
        <img
          className=" w-12 h-12"
          src={require("../../assets/Logo.png")}
          alt=""
        />
      </div>
      <ul className=" lg:flex md:flex hidden items-center gap-10 ">
        <Link to="/home" className=" Satoshi font-thin text-sm text-[#5608D4]">
          Home
        </Link>
        <li className=" Satoshi font-thin text-sm text-[#000]">About Us</li>
        <li className=" Satoshi font-thin text-sm text-[#000]">Solutions</li>
        <li className=" Satoshi font-thin text-sm text-[#000]">Contact Us</li>
        <li className=" Satoshi font-thin text-sm text-[#000]">Pricing</li>
        <li className=" Satoshi font-thin text-sm text-[#000]">FAQs</li>
      </ul>
      <div className=" lg:flex md:hidden hidden items-center gap-5">
        <button className=" text-base Satoshi text-[#000]   ">Login</button>
        <button className=" bg-gradient-to-b from-[#5608D4] to-[#384295] w-40 h-12 rounded-xl font-Nunito text-sm text-white">
          Request for a demo
        </button>
      </div>
      <div className=" lg:hidden md:block block">
        <GiHamburgerMenu onClick={handleToggle} />
      </div>
      {isToggle && (
        <div className=" grid absolute z-30 top-20 bg-gradient-to-b from-[#5608D4] to-[#384295] w-full p-5 space-y-10 ">
          <ul className=" lg:hidden md:hidden grid items-center gap-5">
            <Link to="/home" className=" Satoshi font-thin text-sm text-[#fff]">
              Home
            </Link>
            <li className=" Satoshi font-thin text-sm text-[#fff]">About Us</li>
            <li className=" Satoshi font-thin text-sm text-[#fff]">
              Solutions
            </li>
            <li className=" Satoshi font-thin text-sm text-[#fff]">
              Contact Us
            </li>
            <li className=" Satoshi font-thin text-sm text-[#fff]">Pricing</li>
            <li className=" Satoshi font-thin text-sm text-[#fff]">FAQs</li>
          </ul>

          <div className=" flex gap-5">
            <button className=" text-base Satoshi text-[#fff]   ">Login</button>
            <button className=" bg-[#fff] text-[#384295] w-40 h-12 rounded-xl font-Nunito text-sm ">
              Request for a demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
