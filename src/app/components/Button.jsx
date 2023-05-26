import React from "react";

const Button = (props) => {
  return (
    <button
      className="border bg-gradient-to-r from-purple-500 to-red-500 text-white  py-2 px-4 rounded-3xl md:ml-8  hover:bg-indigo-400 
    duration-500 lg:text-sm"
    >
      {props.children}
    </button>
  );
};

export default Button;
