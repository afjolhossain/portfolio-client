import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full  top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#200613] py-4 md:px-10 px-7 ">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
          text-[#D7A123]"
        >
          <Link to="/">AFJOL HOSSAIN</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#200613]  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in text-[#D7A123] ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li>
            <Link
              to="/"
              className="mr-4 hover:text-white transition duration-500 md:ml-6 text-xl md:my-0 my-7"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="mr-4 hover:text-white transition duration-500 md:ml-6 text-xl md:my-0 my-7"
              to="projects "
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white transition duration-500 md:ml-6 text-xl md:my-0 my-7"
              to="blogs "
            >
              BLOGS
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white transition duration-500 md:ml-6 text-xl md:my-0 my-7"
              to="contact "
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white transition duration-500 md:ml-6 text-xl md:my-0 my-7"
              to="skills "
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white transition duration-500 md:ml-6 text-xl md:my-0 my-7"
              to="about"
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
