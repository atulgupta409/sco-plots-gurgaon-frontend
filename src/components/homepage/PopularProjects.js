import React from "react";
import PopularCard from "../card/PopularCard";

const PopularProjects = () => {
  return (
    <div className="container mt100 desk_hide">
      <h2 className="h2_headings">Most Popular Projects</h2>
      <div className="row mt40 overflow_row">
        <div className="col-12">
          <PopularCard />
        </div>
        <div className="col-12">
          <PopularCard />
        </div>
      </div>
    </div>
  );
};

export default PopularProjects;
