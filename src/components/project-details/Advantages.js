import React from "react";

const Advantages = ({ name, image, advantages }) => {
  return (
    <div className="container mt100">
      <div className="row highlights location_adv">
        <div className="col-md-6">
          <h2 className="h2_headings">
            <span className="mob_hide" style={{ fontWeight: "400" }}>
              {name}
            </span>{" "}
            <span className="text_shadow">Location Advantages</span>
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: advantages,
            }}
            className="project_highlights mt30"
          ></div>
        </div>
        <div className="col-md-6 img_box">
          <img src={image} alt={name + " location map"} />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
