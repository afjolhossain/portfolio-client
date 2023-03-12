import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { picture1, name } = project;

  return (
    <div className="text-center ">
      <Link to={`/project-details/${project._id}`}>
        <div className="shadow-xl shadow-pink-800	">
          <img src={picture1} alt="" />
          <p className="text-xl text-[#D7A123]">{name}</p>
          <div className="flex justify-center items-center">
            <p className="text-base text-center	">See-details</p>
            <ion-icon
              style={{ fontSize: "20px" }}
              name="arrow-forward-outline"
            ></ion-icon>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
