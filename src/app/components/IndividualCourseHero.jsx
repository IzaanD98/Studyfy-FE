import React from "react";
import dghe from "../../../public/DGHE.png";
import Image from "next/image";

const IndividualCourseHero = (course) => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-blue-900 to-purple-900">
      <div>
        <div className="max-w-3xl mx-auto py-20 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-bold py-6">
            {course.prop.title}
          </h1>
          <div className="m-5">
            <table className="mx-auto text-left m-10 text-white">
              <tbody>
                <tr className="border">
                  <td className="px-4 py-2 border">Campus</td>
                  <td className="px-4 py-2">{course.prop.campus}</td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border">Mode of Study</td>
                  <td className="px-4 py-2 ">{course.prop.type}</td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border">Next Start</td>
                  <td className="px-4 py-2">{course.prop.start}</td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border">UCAS code</td>
                  <td className="px-4 py-2">{course.prop.ucas}</td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border">Duration</td>
                  <td className="px-4 py-2">{course.prop.duration}</td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border">Level of Study</td>
                  <td className="px-4 py-2">{course.prop.level}</td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border">Awarding Body</td>
                  <td className="px-4 py-2">{course.prop.body}</td>
                </tr>
                <tr className="border">
                  <td className="px-4 py-2 border">Intakes</td>
                  <td className="px-4 py-2">{course.prop.intakes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCourseHero;
