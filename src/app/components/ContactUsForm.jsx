import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import Popup from "reactjs-popup";

const ContactUsForm = () => {
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
        "template_uyn7ann",
        formData,
        "7rY1R9CrDy821YROV"
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
        <h1 className="text-4xl md:text-7xl font-bold py-6">Contact Us</h1>
        <div className="flex flex-col items-center">
          <p className="text-lg py-4 mb-5">Fill our contact form below.</p>
        </div>
        <div className="flex flex-col md:flex-row  justify-center mx-5">
          <div className="bg-gray-300 rounded-l-2xl p-4 text-black mb-6 md:mb-0 ">
            <div className="text-left">
              <h2 className="font-bold text-xl">Address</h2>
              <p className="my-5 pb-5 border-b border-black">
                Flat 999, 9 Beck Road Southford, London – Postal code: IG11 6RR
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Call us</h2>
              <p className="my-5 pb-5 border-b border-black">
                (+44) 7123 234 567
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Email Us</h2>
              <p className="my-5 pb-5 border-b border-black">
                <a
                  href="mailto:studyfy.uk@gmail.com"
                  className="hover:text-white"
                >
                  studyfy.uk@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-left font-bold mb-2 text-xl">Follow Us</h3>
              <div className="flex space-x-4 my-5 ">
                <a
                  href="https://www.facebook.com/studyfy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href="https://www.twitter.com/studyfy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300"
                >
                  <FaTwitter size={32} />
                </a>
                <a
                  href="https://www.instagram.com/studyfy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300"
                >
                  <FaInstagram size={32} />
                </a>
                <a
                  href="https://www.LinkedIn.com/company/studyfy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-300"
                >
                  <FaLinkedin size={32} />
                </a>
              </div>
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
                  Message <span className="text-red-900">*</span>
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

export default ContactUsForm;
