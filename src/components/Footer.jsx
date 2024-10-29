import React from "react";
import logo from "../assets/logo.png";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container py-20 flex md:flex-row justify-between md:items-center flex-col gap-10">
        <div className="space-y-4">
          <img src={logo} alt="" className="w-40" />
          <p className="text-gray-400 md:max-w-[400px] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            voluptatum ut molestiae facere.
          </p>
        </div>
        {/* icons */}
        <div>
          <div className="flex text-3xl space-x-6">
            <FaFacebook className="hover:text-primary duration-200" />
            <FaInstagram className="hover:text-primary duration-200" />
            <FaLinkedin className="hover:text-primary duration-200" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
