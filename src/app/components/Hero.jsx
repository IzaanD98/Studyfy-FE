import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-900 to-purple-900">
      <div
        className="bg-center bg-no-repeat bg-cover md:bg-fixed"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 128, 0.4), rgba(0, 0, 128, 0.4)), url('https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')",
          backgroundSize: "cover ",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto py-20 text-center text-white">
          <p className="text-xl font-bold">Take Control of your Future</p>
          <h1 className="text-4xl md:text-7xl font-bold py-6">
            Invest in your future with specialised career courses
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-xl md:text-5xl py-4">
              A tailored education for the creators, discoverers and leaders of
              tomorrow.
            </p>
            <div className="mt-10">
              <button
                className="font-bold  bg-gradient-to-r from-purple-500 to-red-500 text-white  py-2 px-4 rounded-3xl md:ml-8  hover:bg-indigo-400 
    duration-500 lg:text-sm whitespace-nowrap"
              >
                {" "}
                <Link href="/apply-now"> Enrol Now</Link>
              </button>
              <Link
                className=" ml-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm"
                href="/courses"
              >
                View all course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
