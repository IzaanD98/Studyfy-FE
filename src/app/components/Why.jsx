import React from "react";
import {
  FaMoneyBillWave,
  FaBuilding,
  FaHandsHelping,
  FaUniversity,
} from "react-icons/fa";

const Why = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="text-center mt-10">
        <h1 className="text-5xl py-2 text-blue-800 font-medium">
          Why choose to study with Studyfy?
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl py-5 leading-8 text-gray-800">
            We simplify the enrollment and financial processes, allowing
            students to focus solely on their education while we handle the
            rest.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-3xl p-4 ">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            Trending Courses{" "}
          </h2>
          <FaUniversity size={32} className="text-blue-800" />
          <p className="text-xl text-left py-5 text-gray-800">
            Business Management (level 4), Health and Social Care (level 4) and
            more...
          </p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-4 ">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800 ">
            Free Advice{" "}
          </h2>
          <FaHandsHelping size={32} className="text-blue-800" />
          <p className="text-xl text-left py-5 text-gray-800">
            Assistance with finding and applying to the perfect course for you.
          </p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-4">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            Student Loans{" "}
          </h2>
          <FaMoneyBillWave size={28} className="text-blue-800" />

          <p className="text-xl text-left py-5 text-gray-800">
            Benefit from financial help and support for various funds and
            grants.
          </p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-4">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            Institutions{" "}
          </h2>
          <FaBuilding size={28} className="text-blue-800" />

          <p className="text-xl text-left py-5 text-gray-800">
            Eligibility for financial support through ‘Student Finance England’.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
