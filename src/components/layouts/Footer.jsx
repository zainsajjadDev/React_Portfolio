import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-cyan-400 cursor-pointer transition">Privacy Policy</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">Terms of Service</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
