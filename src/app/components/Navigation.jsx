import Image from "next/image";
import studyfy from "../../../public/studyfy.png";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 font-bold">
      <Image
        src={studyfy}
        width={300}
        height={200}
        className="max-w-full sm:max-w-200"
      />
      <ul className="hidden lg:flex text-blue-800 ">
        <li className="p-4 hover:text-purple-400 duration-500 ">Home</li>
        <li className="p-4 hover:text-purple-400 duration-500">Courses</li>
        <li className="p-4 hover:text-purple-400 duration-500">
          Financial Support
        </li>
        <li className="p-4 hover:text-purple-400 duration-500">About Us</li>
        <li className="p-4 hover:text-purple-400 duration-500">Contact Us</li>
        <li className="p-4">
          {" "}
          <button
            className="border bg-gradient-to-r from-purple-500 to-red-500 text-white  py-2 px-4 rounded-3xl md:ml-8  hover:bg-indigo-400 
    duration-500 lg:text-sm"
          >
            {" "}
            Apply Now
          </button>{" "}
        </li>
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gradient-to-b from-gray-200 to-blue-800 text-white font-bold ease-in-out duration-500 overflow-hidden"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-gradient-to-b from-gray-200 to-blue-800 text-white font-bold ease-in-out duration-500 opacity-0"
        }
      >
        <Image
          src={studyfy}
          width={300}
          height={200}
          className="max-w-full sm:max-w-200 rounded-2xl "
        />
        <ul className="p-4">
          <li className="p-4 border-b hover:text-purple-400 duration-500">
            Home
          </li>
          <li className="p-4 border-b hover:text-purple-400 duration-500">
            Courses
          </li>
          <li className="p-4 border-b hover:text-purple-400 duration-500">
            Financial Support
          </li>
          <li className="p-4 border-b hover:text-purple-400 duration-500">
            About Us
          </li>
          <li className="p-4 border-b hover:text-purple-400 duration-500">
            Contact Us
          </li>
          <li className="p-4">
            {" "}
            <button className="border bg-gradient-to-r from-purple-500 to-red-500 text-white  py-2 px-4 rounded-3xl  ">
              {" "}
              Apply Now
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
