import React from "react";
import dummy from "../../assets/dummy.jpg";
import "./Homecard.scss";

const PopularCard = () => {
  return (
    <div className="homecard_main popular_card">
      <img src={dummy} alt="dummy" className="property_img" />
      <div className="overlay d-flex align-items-center justify-content-between">
        <div>
          <h3>Orris Gateway</h3>
          <p>Sector 82A, Gurgaon</p>
        </div>
        <button className="book_now">Book Now</button>
      </div>
    </div>
  );
};

export default PopularCard;
