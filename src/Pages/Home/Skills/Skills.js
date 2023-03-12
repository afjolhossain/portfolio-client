import React from "react";

const Skills = () => {
  return (
    <div className="mt-16 w-3/4 mx-auto">
      <p className="text-center text-3xl">SKILLS</p>

      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="md:grid grid-cols-2 sm:rid-cols-1 mt-12 text-center mx-auto gap-2 px-6 "
      >
        <div className="p-6 border-2 shadow-2xl	 hover:bg-lime-800">
          <p className="text-2xl font-bold text-[#D7A123]">Frontend</p>
          <div className="text-start">
            <p>❖ HTML </p>
            <p>❖ Javascript </p>
            <p>❖ React</p>
            <p>❖ Firebase</p>
          </div>
        </div>
        <div className="p-6 border-2 hover:bg-lime-800">
          <p className="text-2xl font-bold text-[#D7A123]">Backend</p>
          <div className="text-start">
            <p>❖ NodeJS</p>
            <p>❖ MongoDB </p>
            <p>❖ Express</p>
            <p>❖ Mongoose</p>
          </div>
        </div>
        <div className="p-6  border-2 hover:bg-lime-800">
          <p className="text-2xl font-bold text-[#D7A123]">Design</p>
          <div className="text-start">
            <p>❖ Tailwind</p>
            <p>❖ Bootstrap </p>
            <p>❖ SASS</p>
            <p>❖ Material UI</p>
            <p>❖ Styled Component</p>
          </div>
        </div>
        <div className="p-6  border-2 hover:bg-lime-800">
          <p className="text-2xl font-bold text-[#D7A123]">Tools</p>
          <div className="text-start">
            <p>❖ Git & Github</p>
            <p>❖ VS Code </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
