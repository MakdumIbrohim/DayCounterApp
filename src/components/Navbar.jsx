import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white w-full h-16 bg-blue-600">
      <div>
        < FaClock size={30} className="ml-4" />
      </div>
      <div className="flex justify-end items-center w-full px-4">
        <Link to="https://about-dum.vercel.app/" className="mx-4">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
