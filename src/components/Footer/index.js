import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col justify-center">
        <img className="w-[50px]" src={logo} />
        <h1 className="font-bold text-2xl text-[#3A8EF6] mt-4">
          Swasthya Buddy
        </h1>
      </div>
    </div>
  );
};

export default Footer;
