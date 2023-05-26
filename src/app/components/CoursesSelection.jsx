import React from "react";

const CoursesSelection = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="text-center mt-10">
        <h1 className="text-5xl py-2 text-blue-800 font-medium">
          Courses Offered
        </h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-xl py-5 leading-8 text-gray-800">
            Looking to pursue your studies in London? Look no further! We offer
            a wide range of academic and vocational courses at every level.
            Discover, apply, and embark on your educational journey with us
            today.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 rounded-lg p-4 ">
          <img
            className="rounded-3xl"
            src={
              "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
          />
          <h2 className="text-2xl font-bold text-left py-5 text-blue-800">
            BA (HONS) BUSINESS MANAGEMENT WITH FOUNDATION YEAR
          </h2>
          <p className="text-md font-bold text-left pt-5 text-gray-800">
            Duration: <span className="float-right">4 years</span>
          </p>
          <p className="text-md font-bold  text-left pb-5 text-gray-800">
            Start date:{" "}
            <span className="float-right">October, September 2023</span>
          </p>
          <div className="flex flex-col justify-center items-center">
            <button className="border bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm ">
              Read More
            </button>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 ">
          <img
            className="rounded-3xl"
            src={
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
          />
          <h2 className="text-2xl font-bold text-left py-5 text-blue-800">
            BSC (HONS) BUSINESS ACCOUNTING WITH FOUNDATION YEAR
          </h2>
          <p className="text-md font-bold text-left pt-5 text-gray-800">
            Duration: <span className="float-right">4 years</span>
          </p>
          <p className="text-md font-bold  text-left pb-5 text-gray-800">
            Start date:{" "}
            <span className="float-right">October, September 2023</span>
          </p>
          <div className="flex flex-col justify-center items-center">
            <button className="border bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm ">
              Read More
            </button>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 ">
          <img
            className="rounded-3xl"
            src={
              "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
          />
          <h2 className="text-2xl font-bold text-left py-5 text-blue-800">
            BSC (HONS) HEALTH & SOCIAL CARE WITH FOUNDATION YEAR
          </h2>
          <p className="text-md font-bold text-left pt-5 text-gray-800">
            Duration: <span className="float-right">4 years</span>
          </p>
          <p className="text-md font-bold  text-left pb-5 text-gray-800">
            Start date:{" "}
            <span className="float-right">October, September 2023</span>
          </p>
          <div className="flex flex-col justify-center items-center">
            <button className="border bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSelection;
