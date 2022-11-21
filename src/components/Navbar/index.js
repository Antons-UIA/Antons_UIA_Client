import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.png";
const Navbar = () => {
  return (
    <div className="py-8 px-16 flex items-center justify-between">
      <div className="flex items-center">
        <img className="w-[50px]" src={logo} />
        <h1 className="font-bold text-2xl text-[#3A8EF6] ml-4">HealthyMe</h1>
      </div>

      <div className="flex justify-around items-center">
        <a href="/" className="text-lg font-semibold pr-5">
          Home
        </a>
        <h1 className="text-lg font-semibold px-10">About Us</h1>
        <h1 className="text-lg font-semibold pl-5">How to use</h1>
      </div>
      <div>
        <button className="font-bold text-white bg-[#3A8EF6] px-8 py-2 rounded">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
