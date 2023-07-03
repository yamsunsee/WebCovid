import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[1520px] h-[200px]  bg-blue-300 ">
      <div className="mx-36 flex justify-between">
        <div className="">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className=" cursor-pointer w-[150] h-[150]"
          />
          <p className="text-sm px-4 pb-2">
            Prepare all conditions to deal with epidemics like COVID-19 in the
            future
          </p>
          <div className="px-4 cursor-pointer ">
            <i className="fa-brands fa-facebook px-2 hover:text-blue-800"></i>
            <i className="fa-brands fa-instagram  px-2 hover:text-pink-800"></i>
            <i className="fa-brands fa-github  px-2 hover:text-gray-800"></i>
          </div>
        </div>
        <div className="py-2">
          <h1 className="text-xl font-bold">Link</h1>
          <div className="flex flex-col">
            <a href="#home">Home</a>
            <a href="#statistics">Statistics</a>
            <a href="#protect">Protect</a>
            <a href="#overview">Overview</a>
            <a href="#news">News & Articles</a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs">Covid-19 - NHK</p>
    </footer>
  );
};

export default Footer;
