import React from "react";
import logo from "../../../src/assets/logo.png";
const Navbar = () => {
  return (
    <div className="py-8 px-16 flex items-center justify-between">
      <div className="flex items-center">
        <img className="w-[50px]" src={logo} />
        <h1 className="font-bold text-2xl text-[#3A8EF6] ml-4">HealthyMe</h1>
      </div>
      <div className="flex flex-1 justify-around items-center">
        <h1 className="text-lg font-semibold">Home</h1>
        <h1 className="text-lg font-semibold">About Us</h1>
        <h1 className="text-lg font-semibold">How to use</h1>
        <button className="font-bold text-white bg-[#3A8EF6] px-8 py-2 rounded">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
