import React, { useEffect, useState } from "react";
import Project from "./project/Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="mt-16 text-3xl">
      <h1 className="text-center">PROJECTS</h1>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80%] md:w-[88%] mx-auto gap-14"
      >
        {projects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
