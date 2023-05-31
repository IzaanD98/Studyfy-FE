import React from "react";
import Link from "next/link";
import dghe from "../../../public/DGHE.png";
import Image from "next/image";

const IndividualCourseContent = (course) => {
  const entrySummary = course.prop.entry.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-1 gap-8">
        <div className="flex flex-col justify-center items-center">
          <Image src={dghe} width={150} height={150} />
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            Overview
          </h2>
          <div className="bg-gray-100 rounded-3xl p-4 mt-4">
            <p className="text-lg text-left text-gray-800">
              {course.prop.overview}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
              Entry Requirements
            </h2>
            <div className="bg-gray-100 rounded-3xl p-4 mt-4">
              <ul className="list-disc mb-4 my-5 mx-5">{entrySummary}</ul>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
              Modules
            </h2>

            <div>
              <div className="mb-5">
                <table>
                  <tr>
                    <td className="font-bold">Total Credits - </td>
                    <td className="font-bold">{course.prop.total_credits}</td>
                  </tr>
                </table>
              </div>
              {course.prop.module.map((yearModule) => (
                <div key={yearModule.year} className="mb-8">
                  <h3 className="text-xl font-bold text-center">
                    {yearModule.year}
                  </h3>
                  <p className="mb-4">Level: {yearModule.level}</p>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 bg-gray-200 text-left">
                          Module
                        </th>
                        <th className="py-2 px-4 bg-gray-200">
                          {yearModule.year === "Foundation Year"
                            ? ""
                            : "Credits"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearModule.modules.map((module, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border">{module.title}</td>
                          <td className="py-2 px-4 border text-center">
                            {module.credits}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              className=" ml-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm"
              href="/apply-now"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCourseContent;
