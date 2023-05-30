import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUsForm = () => {
  return (
    <div className="bg-gradient-to-b from-red-900 via-purple-900 to-blue-800 min-h-screen">
      <div className="max-w-5xl mx-auto py-20 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold py-6">Contact Us</h1>
        <div className="flex flex-col items-center">
          <p className="text-lg py-4 mb-5">Fill our contact form below.</p>
        </div>
        <div className="flex flex-col md:flex-row  justify-center mx-5">
          <div className="bg-gray-300 rounded-l-2xl p-4 text-black mb-6 md:mb-0 ">
            <div className="text-left">
              <h2 className="font-bold text-xl">Address</h2>
              <p className="my-5 border-b border-black">
                Flat 999, 9 Beck Road Southford, London – Postal code: IG11 6RR
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Call us</h2>
              <p className="my-5 border-b border-black">(+44) 7123 234 567</p>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-xl">Email Us</h2>
              <p className="my-5 border-b border-black">
                <a
                  href="mailto:info@avgeducation.com"
                  className="hover:text-white"
                >
                  info@studyfy.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg text-left font-bold mb-2 text-xl">
                Follow Us
              </h3>
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
                  href="https://www.LinkedIn.com/studyfy"
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
            <form>
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
                  className="w-full px-3 py-2 border rounded"
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
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block mb-2 font-bold text-gray-800 text-xl text-left"
                >
                  Phone Number <span className="text-red-900">*</span>
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  className="w-full px-3 py-2 border rounded"
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
                  className="w-full px-3 py-2 border rounded"
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
                  className="mr-2"
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
        <p className="text-white font-bold text-lg m-5">
          &quot;The best way to predict your future is to create it.&quot; –
          Abraham Lincoln
        </p>
      </div>
    </div>
  );
};

export default ContactUsForm;
