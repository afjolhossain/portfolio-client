import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-16 shadow-red-200 py-10 w-11/12 mx-auto shadow-md mb-10">
      <div className="grid md:grid-cols-4 sm:grid-cols-1 mx-auto text-center mt-10 leading-7">
        <div className="text-start md:mx-auto ml-12">
          <p className="text-[#D7A123]">AFJOL HOSSAIN</p>
          <p className="hover:text-[#D7A123] duration-300">
            MEARN-Stack-Developer
          </p>
        </div>
        <div className="text-start md:mx-auto ml-12">
          <p className="text-[#D7A123]">LINKS</p>
          <Link to="skills">
            <p className="hover:text-[#D7A123] duration-300">Skills</p>
          </Link>
          <Link to="projects">
            <p className="hover:text-[#D7A123] duration-300">Projects</p>
          </Link>
          <Link to="about">
            <p className="hover:text-[#D7A123] duration-300">About me</p>
          </Link>
          <Link to="contact">
            <p className="hover:text-[#D7A123] duration-300">Contact</p>
          </Link>
        </div>
        <div className="text-start md:mx-auto ml-12">
          <p className="text-[#D7A123]">DEVELOPERS</p>
          <p className="hover:text-[#D7A123] duration-300">Privacy</p>
          <p className="hover:text-[#D7A123] duration-300">Terms of Service</p>
        </div>
        <div className="text-start md:mx-auto ml-12">
          <p className="text-[#D7A123]">SOCIAL MEDIA</p>
          <div className="flex gap-4 items-center items-start justify-center text-3xl">
            <a
              href="https://www.facebook.com/afjol.hossain.39"
              type="button"
              target=" _blank"
              className="rounded-full  hover:bg-[#D7A123] bg-transparent border border-[#D7A123] text-white leading-normal uppercase  focus:outline-none focus:ring-0 transition duration-300 ease-in-out w-9  h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2 h-full mx-auto "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>

            <a
              href="https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act"
              target=" _blank"
              type="button"
              className="rounded-full hover:bg-[#D7A123] bg-transparent  border border-[#D7A123] text-white leading-normal uppercase  focus:outline-none focus:ring-0 transition duration-300 ease-in-out w-9  h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/afjol-hossain/"
              target=" _blank"
              type="button"
              className="rounded-full hover:bg-[#D7A123] bg-transparent border border-[#D7A123] text-white leading-normal uppercase  focus:outline-none focus:ring-0 transition duration-300 ease-in-out w-9 h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>

            <a
              href="https://github.com/afjolhossain"
              target={" _blank"}
              type="button"
              className="rounded-full   border hover:bg-[#D7A123] bg-transparent border-[#D7A123] text-white leading-normal uppercase  focus:outline-none focus:ring-0 transition duration-300 ease-in-out w-9  h-9 m-1"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="w-3 h-full mx-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
