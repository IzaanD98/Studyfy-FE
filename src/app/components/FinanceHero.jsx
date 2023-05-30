import React from "react";

const FinanceHero = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-blue-900 to-purple-900">
      <div>
        <div className="max-w-3xl mx-auto py-20 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-bold py-6">
            Eligibility for loans and grants
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-lg py-4">
              In order to be eligible for different funds and grants, there are
              specific criteria that need to be met. These criteria may vary
              depending on factors such as the type of college or university you
              have chosen, your past history of applying for higher education
              courses, your age, nationality, and residency status. It is
              important to fulfill these criteria to qualify for the available
              funds and grants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceHero;
