import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white w-full h-16 bg-blue-600 dark:bg-gray-800">
      <div className="ml-4">
        <FaClock size={30} />
      </div>
      <div className="flex justify-end items-center w-full px-4">
        <Link to="https://about-dum.vercel.app/" className="mx-4 text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-white transition-colors">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
