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
              Studyfy is an established student recruitment company for UK
              universities and colleges. We can help you find the right course
              at the right institution and ensure a quick and secure admission
              process. Our expertise and contacts will help you achieve your
              ambitions and career goals. We assist with applications and
              enrollment for a wide range of courses, from HND to BA/BSc and
              top-up programs.
            </p>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            WHY CHOOSE US?
          </h2>
          <div className="bg-gray-100 rounded-3xl p-4 mt-4">
            <p className="text-lg text-left text-gray-800">
              We make studying abroad as seamless as possible, emphasizing a
              real-world connection to bring the curriculum to life. Our
              services include support in finding and applying to academic and
              vocational courses at all levels, including undergraduate and
              postgraduate programs. Choose us for:
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
