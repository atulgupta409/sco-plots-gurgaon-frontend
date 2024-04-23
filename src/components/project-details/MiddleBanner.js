import React from "react";
import topBrands from "../../assets/Top_brands.svg";
import location from "../../assets/Premium_location.svg";
import design from "../../assets/Modern_desin.svg";
import commercial from "../../assets/Commerical_hub.svg";
import mnc from "../../assets/proximity_Mnc.svg";

const MiddleBanner = () => {
  return (
    <div className="price_main mt100">
      <div className="container">
        <div className="heading_box">
          <div>
            <h2 className="h2_headings">
              SCO Plots Offers <span>Great And Ideal</span> Investment
              Opportunities <br className="mob_hide" /> For The Shops, Offices
              And Restaurants
            </h2>
          </div>
          <div className="mob_hide">
            <button className="enquire_btn_white black_btn">Contact Us</button>
          </div>
        </div>
        <div className="top_brands_row">
          <div>
            <img src={topBrands} alt="top brands" />
            <h6>Top Brands</h6>
          </div>
          <div>
            <img src={location} alt="top brands" />
            <h6>Premium Location</h6>
          </div>
          <div>
            <img src={design} alt="top brands" />
            <h6>Modern Design</h6>
          </div>
          <div>
            <img src={commercial} alt="top brands" />
            <h6>Commercial Hub</h6>
          </div>
          <div>
            <img src={mnc} alt="top brands" />
            <h6>Proximity To MNC's</h6>
          </div>
        </div>
        <button className="enquire_btn_white black_btn desk_hide mt-2">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default MiddleBanner;
