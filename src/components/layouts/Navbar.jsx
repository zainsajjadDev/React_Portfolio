import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="flex bg-gray-900 h-16 justify-center items-center gap-8 text-white font-medium text-lg">
        <li className="hover:text-cyan-400 cursor-pointer transition">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:text-cyan-400 cursor-pointer transition">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-cyan-400 cursor-pointer transition">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
