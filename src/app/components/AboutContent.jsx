import React from "react";
const AboutContent = () => {
  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-1 gap-8">
        <div className="p-4">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            WELCOME TO STUDYFY
          </h2>
          <div className="bg-gray-100 rounded-3xl p-4 mt-4">
            <p className="text-lg text-left text-gray-800">
              As a well-established student recruitment company specializing in
              UK universities and colleges, Studyfy is dedicated to helping you
              discover the perfect course at the ideal institution. Our goal is
              to ensure a smooth and secure admission process, leveraging our
              expertise and extensive network to support your ambitions and
              career goals. Whether you&apos;re interested in HND, BA/BSc, or
              top-up programs, we provide comprehensive assistance with
              applications and enrollment.
            </p>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            WHY CHOOSE US?
          </h2>
          <div className="bg-gray-100 rounded-3xl p-4 mt-4">
            <p className="text-lg text-left text-gray-800">
              At Studyfy, we strive to provide a seamless studying abroad
              experience, with a strong focus on real-world connections to
              enhance the curriculum. Our range of services extends to assisting
              you in finding and applying to academic and vocational courses
              across all levels, including both undergraduate and postgraduate
              programs. Choose Studyfy for:
            </p>
            <div>
              <ul className="list-disc mb-4 my-5 mx-5">
                <li>Guaranteed Success</li>
                <li>Expert Guidance</li>
                <li>Extensive Range of Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
