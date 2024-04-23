import React from "react";
import arrow from "../../assets/white_arrow.svg";
import "./Homecard.scss";
import { Link } from "react-router-dom";

const HomeCard = ({ name, img, tagline, slug }) => {
  return (
    <Link to={slug}>
      <div className="homecard_main">
        <img src={img} alt={name} className="property_img" />
        <div className="overlay">
          <h3>{name}</h3>
          <p>{tagline}</p>
        </div>
        <img src={arrow} alt="arrow" className="card_arrow" />
      </div>
    </Link>
  );
};

export default HomeCard;
