import Main from "../../../Layout/Main/Main";
import Contact from "../../Home/Contact/Contact";
import Home from "../../Home/Home/Home";
import Projects from "../../Home/Projects/Projects";
import Skills from "../../Home/Skills/Skills";
import Blogs from "../../Home/Blogs/Blogs";
import About from "../../Home/About/About";
import ProjectsDetails from "../../Home/Projects/ProjectsDetails/ProjectsDetails";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "project-details/:id",
        element: <ProjectsDetails />,
      },
    ],
  },
]);

export default router;
