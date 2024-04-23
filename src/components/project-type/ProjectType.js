import React from "react";
import Navbar from "../navbar/Navbar";
import PageBanner from "./PageBanner";
import "./ProjectType.scss";
import Badges from "./Badges";
import Projects from "./Projects";
import Footer from "../footer/Footer";

const ProjectType = () => {
  return (
    <>
      <Navbar isNavBgWhite={true} />
      <PageBanner />
      <Badges />
      <Projects />
      <div className="mt100">
        <Footer />
      </div>
    </>
  );
};

export default ProjectType;
