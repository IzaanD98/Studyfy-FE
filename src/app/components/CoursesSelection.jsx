import React from "react";
import Link from "next/link";
import Image from "next/image";
import dghe from "../../../public/DGHE.png";
import wic from "../../../public/wic-logo.svg";
const CoursesSelection = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="text-center mt-10">
        <h2 className="text-4xl py-2 font-bold text-blue-800 ">
          Courses Offered
        </h2>
        <div className="max-w-6xl mx-auto">
          <p className="text-xl py-5 leading-8 text-gray-800">
            Looking to pursue your studies in London? Look no further! We offer
            a wide range of academic and vocational courses at every level.
            Discover, apply, and embark on your educational journey with us
            today.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-gray-100 rounded-lg p-4 ">
          <Image
            width={800}
            height={800}
            className="rounded-3xl"
            alt="BA (Hons) Business Management with Foundation Year"
            src={
              "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
          />
          <h2 className="text-2xl font-bold text-left py-5 text-blue-800">
            BA (Hons) Business Management with Foundation Year
          </h2>
          <p className="text-md font-bold text-left pt-5 text-gray-800">
            Duration: <span className="float-right">4 years</span>
          </p>
          <p className="text-md font-bold  text-left  text-gray-800">
            Start date: <span className="float-right">March & September</span>
          </p>
          <p className="text-md font-bold text-left pb-5 text-gray-800">
            Funding: <span className="float-right">Fully funded by SFE</span>
          </p>
          <div className="flex flex-col justify-center items-center">
            <Link
              href={"courses/ba-hons-business-management-with-foundation-year"}
            >
              <button className="border bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm">
                Read More
              </button>
            </Link>
          </div>
          <div className="flex flex-cols items-center justify-between">
            <Image alt="DGHE" width={100} src={dghe} />
            {/* <Image alt="WIC" width={75} src={wic} /> */}
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 ">
          <Image
            width={800}
            height={800}
            className="rounded-3xl"
            alt="Certificate in Higher Education in Health and Social Care"
            src={
              "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            }
          />
          <h2 className="text-2xl font-bold text-left py-5 text-blue-800">
            Certificate in Higher Education in Health and Social Care
          </h2>

          <p className="text-md font-bold text-left pt-5 text-gray-800">
            Duration: <span className="float-right">9 months</span>
          </p>
          <p className="text-md font-bold  text-left  text-gray-800">
            Start date: <span className="float-right">March & September</span>
          </p>
          <p className="text-md font-bold text-left pb-5 text-gray-800">
            Funding: <span className="float-right">Fully funded by SFE</span>
          </p>
          <div className="flex flex-col justify-center items-center">
            <button className="border bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm ">
              Read More
            </button>
          </div>
          <div className="flex flex-cols items-center justify-between">
            <Image alt="DGHE" width={100} src={dghe} />
            {/* <Image alt="WIC" width={75} src={wic} /> */}
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 ">
          <Image
            width={800}
            height={800}
            className="rounded-3xl"
            alt="BSc (Hons) Health and Social Care Leadership and Management"
            src={
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            }
          />
          <h2 className="text-2xl font-bold text-left py-5 text-blue-800">
            BSc (Hons) Health and Social Care Leadership and Management
          </h2>
          <p className="text-md font-bold text-left pt-5 text-gray-800">
            Duration: <span className="float-right">3 years</span>
          </p>
          <p className="text-md font-bold  text-left text-gray-800">
            Start date: <span className="float-right">October</span>
          </p>
          <p className="text-md font-bold text-left pb-5 text-gray-800">
            Funding: <span className="float-right">Fully funded by SFE</span>
          </p>
          <div className="flex flex-col justify-center items-center">
            <button className=" border bg-gradient-to-r from-red-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm">
              Read More
            </button>
          </div>
          <div className="flex flex-cols items-center justify-between">
            <Image alt="DGHE" width={100} src={dghe} />
            {/* <Image alt="WIC" width={75} src={wic} /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link
          className=" border bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm"
          href="/courses"
        >
          View all course
        </Link>
      </div>
    </div>
  );
};

export default CoursesSelection;
