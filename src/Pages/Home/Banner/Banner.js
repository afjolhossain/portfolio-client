import React from "react";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";

import coding from "../../../assets/coding.json";

const Banner = () => {
  return (
    <div className="flex  items-center  justify-center flex-wrap sm:mt-10">
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="flex flex-col justify-center  text-center mt-16 mx-auto  rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left leading-7	"
      >
        <h1 className=" font-bold leading-none md:text-5xl text-3xl">
          <span className="text-[#D7A123] py-1"> Hello</span>! I am <br />
          AFJOL <span className="text-[#D7A123] py-1">HOSSAIN </span>
        </h1>

        <p className="my-3 mb-8 md:text-2xl text-xl md:justify-start justify-center flex ">
          I'm -
          <span className="text-[#D7A123] font-semibold">
            <Typewriter
              options={{
                strings: [" MERN Stack Developer", ` Frontend Developer`],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
      </div>
      <div className="">
        <Lottie
          data-aos="fade-right"
          data-aos-duration="3000"
          className="object-contain rounded-lg mt-10  md:w-[600px] mx-auto sm:w-full mr-10"
          animationData={coding}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Banner;
