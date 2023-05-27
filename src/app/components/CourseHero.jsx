import React from "react";

const CourseHero = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-blue-900 to-purple-900">
      <div>
        <div className="max-w-3xl mx-auto py-20 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-bold py-6">Our Courses</h1>
          <div className="flex flex-col items-center">
            <p className="text-lg py-4">
              We provide an extensive selection of courses that are fully
              funded, including tuition fees and maintenance loans, allowing you
              to make your choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
