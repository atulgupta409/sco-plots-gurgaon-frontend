import React from "react";

const Highlights = ({ image, name, highlights }) => {
  return (
    <div className="container mt100">
      <div className="row highlights">
        <div className="col-md-6 img_box">
          <img src={image} alt="dummy" />
        </div>
        <div className="col-md-6">
          <h2 className="h2_headings">
            <span className="mob_hide" style={{ fontWeight: "400" }}>
              {name}
            </span>{" "}
            <span className="text_shadow">Highlights</span>
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: highlights,
            }}
            className="project_highlights mt30"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
