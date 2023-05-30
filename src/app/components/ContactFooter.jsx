import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import white from "../../../public/white.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-full h-auto">
          <Image src={white} alt="logo" width={400} height={400} />
          <p className="m-5 ">
            We offer support with finding and applying to academic and
            vocational courses at all levels, including undergraduate and
            postgraduate university courses, and give continual support to our
            clients in higher and further education.
          </p>
          <div className="flex flex-col justify-center items-center ">
            <button
              className="bg-gradient-to-r from-red-500 to-gray-500 text-white  py-2 px-4 rounded-3xl hover:bg-indigo-400 
    duration-500 lg:text-sm whitespace-nowrap"
            >
              {" "}
              Admin Login
            </button>{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/studyfy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://www.twitter.com/studyfy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="https://www.instagram.com/studyfy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.LinkedIn.com/studyfy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-2 text-center text-gray-400 mt-4">
        <p className="mb-2">Useful information:</p>
        <a href="#" className="text-gray-400 hover:text-white">
          Terms and Conditions
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="text-gray-400 hover:text-white">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="text-gray-400 hover:text-white">
          Cookies Policy
        </a>
        <span className="mx-2">|</span>
        <Link href="/contact-us"> Contact Us</Link>
      </div>

      <div className="col-span-2 text-center text-gray-400 mt-2">
        <p>Flat 999, 9 Beck Road Southford, London – Postal code: IG11 6RR</p>
        <p>
          <a href="tel:+447916208666" className="hover:text-white">
            (+44) 7123 234 567
          </a>
        </p>
        <p>
          <a href="mailto:info@avgeducation.com" className="hover:text-white">
            info@studyfy.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
