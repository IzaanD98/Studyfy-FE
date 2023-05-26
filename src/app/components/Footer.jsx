import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import studyfy from "../../../public/studyfy.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src={studyfy}
            width={300}
            height={200}
            className="bg-white rounded-3xl max-w-full sm:max-w-200"
          />
          <p className="mt-2">Studyfy 2023</p>
        </div>
        <div>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
