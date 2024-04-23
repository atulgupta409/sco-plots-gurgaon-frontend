import React from "react";

const AboutProject = ({ name, description }) => {
  return (
    <div className="about_main">
      <h2 className="h2_headings desk_hide">
        <span>About {name}</span>
      </h2>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default AboutProject;
