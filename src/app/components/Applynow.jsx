import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import Popup from "reactjs-popup";
require("dotenv").config();

const Applynow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToGDPR: false,
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_y8jjqhx",
        "template_sbdxc2n",
        formData,
        process.env.USER_PASSWORD
      )
      .then(
        (result) => {
          setIsSent(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      agreeToGDPR: false,
    });
  };

  const closePopup = () => {
    setIsSent(false);
  };

  return (
    <div className="bg-gradient-to-b from-red-900 via-purple-900 to-blue-800 min-h-screen">
      <Popup
        open={isSent}
        closeOnDocumentClick
        onClose={closePopup}
        contentStyle={{
          position: "fixed",
          top: "5%",
          left: "50%",
          transform: "translate(-50%, -10%)",
        }}
        modal
      >
        <div className="bg-green-500 text-white font-bold p-5 rounded">
          <h1>Success</h1>
          <p>Your message has been sent successfully.</p>
          <button
            onClick={closePopup}
            className="mt-4 bg-white text-green-500 px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </Popup>
      <div className="max-w-5xl mx-auto py-20 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold py-6">Apply Now</h1>
        <div className="flex flex-col items-center">
          <p className="text-lg py-4 mb-5">Fill our application form below.</p>
        </div>
        <div className="flex flex-col md:flex-row  justify-center mx-5">
          <div className="bg-gray-300 rounded-l-2xl p-4 text-black mb-6 md:mb-0 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <div className="text-left">
              <h2 className="font-bold text-xl">Step 1</h2>
              <p className="my-5 pb-5 border-b border-black">
                Enter your details to be contacted for an eligibility check
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Step 2</h2>
              <p className="my-5 pb-5 border-b border-black">
                You will be contacted by phone by our student advisor to decide
                the best option for student. You will also receive more
                information about the chosen course and institution.
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Step 3</h2>
              <p className="my-5 pb-5 border-b border-black">
                After deciding the institution, you will need to provide your
                documents to the agency in order to progress with your
                application.
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Step 4</h2>
              <p className="my-5 pb-5 border-b border-black">
                After receiving the requested documents, the admissions team
                will submit your application to the University, and you will
                receive our support for the english test.
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Step 5</h2>
              <p className="my-5 pb-5 border-b border-black">
                After booking and completing your english test, you will receive
                a confirmation of acceptance and will need to complete a student
                finance application.
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Step 6</h2>
              <p className="my-5 pb-5">
                After being admitted to the University the student will need to
                wait to receive all information regarding the course which will
                include timetable, induction times and enrolment information
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-r-2xl p-4 ">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 font-bold text-gray-800 text-xl text-left"
                >
                  Name <span className="text-red-900">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 font-bold text-gray-800 text-xl text-left"
                >
                  E-mail <span className="text-red-900">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  className="w-full px-3 py-2 border rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block mb-2 font-bold text-gray-800 text-xl text-left"
                >
                  Phone Number <span className="text-red-900">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{11}"
                  className="w-full px-3 py-2 border rounded text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block mb-2 font-bold text-xl text-gray-800 text-left"
                >
                  Which course are you interested?{" "}
                  <span className="text-red-900">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded text-black"
                  required
                ></textarea>
              </div>
              <h2 className="text-gray-800 font-bold text-xl text-left mb-5">
                GDPR <span className="text-red-900">*</span>
              </h2>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="agreeToGDPR"
                  name="agreeToGDPR"
                  checked={formData.agreeToGDPR}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <label
                  htmlFor="agreeToGDPR"
                  className="text-sm font-bold text-gray-800"
                >
                  I agree with the policies of this website by sending this
                  message.
                </label>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-purple-500  text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-white font-bold text-center text-lg m-5">
          &quot;The best way to predict your future is to create it.&quot; –
          Abraham Lincoln
        </p>
      </div>
    </div>
  );
};

export default Applynow;
