import Link from "next/link";
import Image from "next/image";
import studyfy from "../../../public/Image20230418132016.png";

const Navbar = () => {
  return (
    <nav className="pt-10 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center">
        <Image className="mx-10" src={studyfy} width={400} height={400} />
        <ul className="flex space-x-4">
          <li className="p-4">
            <Link
              className="hover:text-purple-600 hover:underline text-xl"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              className="hover:text-purple-600 hover:underline text-xl"
              href="/"
            >
              About Us
            </Link>
          </li>
          <li className="p-4">
            <Link
              className="hover:text-purple-600 hover:underline text-xl"
              href="/"
            >
              Courses
            </Link>
          </li>
          <li className="p-4">
            <Link
              className="hover:text-purple-600 hover:underline text-xl"
              href="/"
            >
              Financial Support
            </Link>
          </li>
          <li className="p-4">
            <Link
              className="hover:text-purple-600 hover:underline text-xl"
              href="/"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end space-x-4 mt-4 sm:mt-0">
        <a className="border bg-gradient-to-r from-purple-500 to-red-500 text-white px-4 py-2 rounded-3xl">
          Apply Today
        </a>
        <a className="border bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-3xl">
          Check Application status
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
