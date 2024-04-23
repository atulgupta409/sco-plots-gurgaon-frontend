import React from "react";
import Popularcard from "../card/PopularCard";

const Projects = () => {
  return (
    <div className="container mt100 projectType">
      <h2 className="h2_headings">Top SCO Plots in Gurgaon</h2>
      <p className="text-justify desk_hide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, veniam
        quis pariatur dolorum nam quisquam perspiciatis aperiam repellat quod?
        In, ea. Necessitatibus, iure sit?
      </p>
      <div className="row">
        <div className="col-md-3 mt40">
          <Popularcard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
