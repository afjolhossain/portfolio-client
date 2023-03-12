import React from "react";
import image from "../../../assets/image.jpg";
import resume from "../../../assets/Resume Of Afjol Hossain.pdf";

const About = () => {
  return (
    <div>
      <p className="text-center text-3xl ">ABOUT ME</p>
      <div className=" grid md:grid-cols-2  sm:grid-cols-1 mt-16 gap-2  items-center justify-center">
        <div className="mx-auto">
          <img
            className=" rounded-full w-[400px] h-[400px]  "
            src={image}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="leading-7 flex flex-col p-6 items-start justify-center sm:px-6  mx-auto sm:mt-10"
        >
          <p className="text-5xl ">
            Hello There, <br /> I'm
            <span className="text-amber-100"> Afjol Hossian</span>
          </p>
          <p className="text-2xl text-[#D7A123] font-bold font-popins">
            Front-End Developer | MERN Stack Developer
          </p>
          <p className="text-1xl ">
            I am a Full Stack (MERN) Developer including ReactJS, NodeJS,
            ExpressJS, MongoDB seeking an entry-level position with the Company
            to use my skills in coding, troubleshooting complex design, and
            assisting in the timely completion of projects
          </p>
          <a
            href={resume}
            download
            className="block text-center w-full rounded mt-4 border px-12 py-3 font-medium text-white shadow hover:bg-[#D7A123] duration-300 hover:text-gray-800 focus:outline-none  sm:w-auto"
          >
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
