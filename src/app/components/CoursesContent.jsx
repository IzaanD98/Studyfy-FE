import React, { useState } from "react";
import CheckboxButton from "./Button";
import dghe from "../../../public/DGHE.png";
import wic from "../../../public/wic-logo.svg";
import Image from "next/image";
import Link from "next/link";
const CoursesContent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const courses = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "BA (Hons) Business Management with Foundation Year",
      duration: "4 years",
      start: "March & September",
      href: "/ba-hons-business-management-with-foundation-year",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Certificate in Higher Education in Health and Social Care",
      duration: "9 months",
      start: "March & September",
      href: "/certificate-in-higher-education-health-and-social-care",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "BA (Hons) Business Management",
      duration: "3 years",
      start: "October",
      href: "/ba-hons-business-management",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      title: "BSc (Hons) Health and Social Care Leadership and Management",
      duration: "3 years",
      start: "October",
      href: "/bsc-hons-health-social-care",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      title: "BTEC Higher National Diploma (HND) Business",
      duration: "2 years",
      start: "Jan, May & Sept",
      href: "/btec-hnd-business",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      title: "BTEC Higher National Diploma (HND) Public Services",
      duration: "2 years",
      start: "Jan, May & Sept",
      href: "/btec-hnd-public-service",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWRlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      title: "BTEC Higher National Diploma (HND) Art & Design",
      duration: "2 years",
      start: "March & October",
      href: "/higher-national-diploma-art-design",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWRlbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      title: "BA (Hons) Business Management (Top-Up)",
      duration: "1 year",
      start: "March & October",
      href: "/ba-hons-business-management-top-up",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      title: "BSc (Hons) Criminology and Criminal Justice (Top-up)",
      duration: "1 year",
      start: "March & October",
      href: "/bsc-criminology-and-criminal-justice",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      title: "BA (Hons) Visual Communication (Top-Up)",
      duration: "1 year",
      start: "March & October",
      href: "/ba-hons-visual-communication",
    },
  ];

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const filteredCourses =
    selectedOptions.length === 0
      ? courses
      : courses.filter((course) => {
          return selectedOptions.some((option) =>
            course.title.toLowerCase().includes(option.toLowerCase())
          );
        });
  return (
    <div className="container mx-auto p-5">
      <div className="text-center my-10">
        <h1 className="text-5xl py-2 text-blue-800 font-medium">
          Featured Courses
        </h1>
        <div className="max-w-6xl mx-auto mt-5 grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center">
          <CheckboxButton
            prop={"Hons"}
            isChecked={selectedOptions.includes("Hons")}
            onChange={() => handleOptionChange("Hons")}
          />
          <CheckboxButton
            prop={"BTEC"}
            isChecked={selectedOptions.includes("BTEC")}
            onChange={() => handleOptionChange("BTEC")}
          />
          <CheckboxButton
            prop={"Foundation Year"}
            isChecked={selectedOptions.includes("Foundation Year")}
            onChange={() => handleOptionChange("Foundation Year")}
          />
          <CheckboxButton
            prop={"Top-up"}
            isChecked={selectedOptions.includes("Top-up")}
            onChange={() => handleOptionChange("Top-up")}
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-gray-100 rounded-lg p-4">
            <Image
              width={800}
              height={800}
              className="rounded-3xl"
              alt={course.title}
              src={course.image}
            />
            <h2 className="text-2xl font-bold text-left py-5 text-blue-800">
              {course.title}
            </h2>
            <p className="text-md font-bold text-left pt-5 text-gray-800">
              Duration: <span className="float-right">{course.duration}</span>
            </p>
            <p className="text-md font-bold  text-left text-gray-800">
              Start date: <span className="float-right">{course.start}</span>
            </p>
            <p className="text-md font-bold text-left pb-5 text-gray-800">
              Funding: <span className="float-right">Fully funded by SFE</span>
            </p>
            <div className="flex flex-col justify-center items-center">
              <Link href={`courses${course.href}`}>
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
        ))}
      </div>
    </div>
  );
};
export default CoursesContent;
