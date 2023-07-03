import React from "react";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header
      id="home"
      className="container  max-w-[1520px] h-[520px] mx-auto  mb-[50px] bg-blue-200 rounded-br-[250px]"
    >
      <nav className=" flex justify-between items-center mx-[113px]  ">
        {/* img */}
        <img src={Logo} alt="Logo" className=" cursor-pointer" />
        <ul className="text-lg text-primary cursor-pointer ">
          <li className="inline-block px-5">
            <a href="#home">Home</a>
          </li>
          <li className="inline-block px-5 ">
            <a href="#statistics">Statistics</a>
          </li>
          <li className="inline-block px-5">
            <a href="#protect">Protect</a>
          </li>
          <li className="inline-block px-5">
            <a href="#overview">Overview</a>
          </li>
          <li className="inline-block px-5">
            <a href="#news">News & Articles</a>
          </li>
        </ul>
      </nav>
      {/* banner */}
      <div className=" flex justify-between mx-[129px]">
        <div>
          <p className="text-[19px] font-semibold mb-[6px] text-purple ">
            COVID- 19 AWARENESS
          </p>
          <h2 className="mb-[23px] font-extrabold text-5xl text-purple">
            Stay Safe. & Stay Cool
          </h2>
          <p className=" w-[390px]  font-semibold text-xl text-gray-500 mb-10">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <button className="font-bold w-[186] px-5 py-3  bg-purple text-white rounded-full ">
            How to Prevent
          </button>
        </div>
        <div>
          <img
            className="w-[400px] h-[400px]"
            src="src/assets/banner.png"
            alt="banner"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
