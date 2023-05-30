import React from "react";
import Link from "next/link";
const AboutContent = () => {
  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-1 gap-8">
        <div className="p-4">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            Why Choose Us
          </h2>
          <div className="bg-gray-100 rounded-3xl p-4 mt-4">
            <p className="text-lg text-left text-gray-800">
              At Studyfy, we offer comprehensive support and guidance tailored
              to your unique needs and circumstances. Our dedicated team
              understands the diverse backgrounds of students and is committed
              to ensuring you receive the education you deserve. From providing
              financial advice and assisting with relevant documentation to
              guiding you through the application process and beyond, we are
              here to help every step of the way. Trust us to be your reliable
              partner in achieving your educational goals.
            </p>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-3xl font-bold text-left py-5 text-blue-800">
            How to apply for a student loan?
          </h2>
          <div className="bg-gray-100 rounded-3xl p-4 mt-4">
            <p className="text-lg text-left text-gray-800">
              When you visit our office to choose/apply for your course and
              setup a student finance, you will need the following:
            </p>
            <div>
              <ul className="list-disc mb-4 my-5 mx-5">
                <li>Proof of address</li>
                <li>National Insurance number</li>
                <li>Passport</li>
                <li>Visa, BRP (if applicable)</li>
                <li>Previous education (if any)</li>
                <li>Certificates</li>
                <li>CV</li>
                <li>Telephone number (mobile / landline)</li>
                <li>Referees (name, address, telephone number)</li>
                <li>Past employment payslips</li>
              </ul>
              <p>
                Note: Even if you have already started a course, you can still
                apply because the deadline for applying is 9 months after the
                start of the academic year. Check with your university or
                college for the academic year start date for your course.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              className=" ml-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl lg:text-sm"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
