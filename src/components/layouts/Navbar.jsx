import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="flex bg-gray-900 h-16 justify-center items-center gap-8 text-white font-medium text-lg">
        <li className="hover:text-cyan-400 cursor-pointer transition">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer transition">About</li>
        <li className="hover:text-cyan-400 cursor-pointer transition">Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
