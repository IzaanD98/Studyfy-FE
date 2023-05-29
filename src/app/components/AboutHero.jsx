import React from "react";

const AboutHero = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-blue-900 to-purple-900">
      <div>
        <div className="max-w-3xl mx-auto py-20 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-bold py-6">About Us</h1>
          <div className="flex flex-col items-center">
            <p className="text-lg py-4">
              Studyfy is an England based recruitment company that offers the
              best expertise in helping you find the right course at the right
              institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
