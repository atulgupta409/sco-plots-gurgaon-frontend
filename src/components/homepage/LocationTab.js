import React from "react";
import dummy from "../../assets/dummy.jpg";

const LocationTab = () => {
  return (
    <div className="desk_hide">
      <div className="location_tab">
        <div className="location_box">
          <img src={dummy} alt="dummy" />
          <p>New Gurgaon</p>
        </div>
        <div className="location_box">
          <img src={dummy} alt="dummy" />
          <p>Dwarka Expressway</p>
        </div>
        <div className="location_box">
          <img src={dummy} alt="dummy" />
          <p>New Gurgaon</p>
        </div>
        <div className="location_box">
          <img src={dummy} alt="dummy" />
          <p>New Gurgaon</p>
        </div>
        <div className="location_box">
          <img src={dummy} alt="dummy" />
          <p>New Gurgaon</p>
        </div>
      </div>
    </div>
  );
};

export default LocationTab;
