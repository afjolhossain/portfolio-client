import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://portfolio-of-afjol-server.vercel.app/projects/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return (
    <div className="mx-10 mt-16">
      <p className="text-3xl mb-5 p-4 text-center text-[#D7A123]">
        Project Name - {details.name}
      </p>
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div>
          <img className="w-full h-full" src={details.picture1} alt="" />
        </div>
        <div>
          <img className="w-full h-full" src={details.picture2} alt="" />
        </div>
        <div>
          <img className="w-full h-full" src={details.picture3} alt="" />
        </div>
        <div>
          <img className="w-full h-full" src={details.picture4} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-20 mb-10">
        <div className="bg-red-900 text-center grid items-center h-10 rounded-md hover:bg-transparent hover:border duration-300">
          <a href={details.live} target=" _blank">
            LIVE LINK
          </a>
        </div>
        <div className="bg-red-900 text-center grid items-center h-10 rounded-md hover:bg-transparent hover:border duration-300">
          <a href={details.client}>CLIENT LINK</a>
        </div>
        <div className="bg-red-900 text-center grid items-center h-10 rounded-md hover:bg-transparent hover:border duration-300">
          <a href={details.server}>SERVER LINK</a>
        </div>
      </div>
      <div className="py-5">
        <div className="grid mt-6 md:grid-cols-2 gap-4  sm:grid-cols-1">
          <div className="border p-10 leading-7	">
            <p>
              <span className="text-xl text-[#D7A123]">Techonology:</span>
              <br />
              {details.techonology}
            </p>
          </div>
          <div className="border p-10 leading-7">
            <p>
              <span className="text-xl text-[#D7A123]">Description:</span>
              <br />
              {details.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
