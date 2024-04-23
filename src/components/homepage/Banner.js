import React from "react";

const Banner = ({ banner, title, icon, points }) => {
  return (
    <div
      className="mob_banner_main container desk_hide mt100"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h2 className="h2_headings font-weight-bold" style={{ fontSize: "18px" }}>
        {title}
      </h2>
      {points?.map((point) => (
        <div className="why_invest_point" key={point}>
          <img src={icon} alt="icon" />
          <span>{point}</span>
        </div>
      ))}
      <button className="banner_enquire">Enquire Now</button>
    </div>
  );
};

export default Banner;
