import React from "react";
import brands from "../../assets/Top_brands.svg";
import commercial from "../../assets/Commerical_hub.svg";
import modern from "../../assets/Modern_desin.svg";

const Badges = () => {
  return (
    <div className="container badges mob_hide">
      <div className="col-md-4">
        <div>
          <img src={brands} alt="top brands" />
        </div>
        <div>
          <h3>Top Brands</h3>
          <p className="text-justify">
            Explore Gurgaon's Premier Brands For SCO Plots. Ideal For Your Shop
            Cum Office Needs.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div>
          <img src={commercial} alt="top brands" />
        </div>
        <div>
          <h3>Commercial Hub</h3>
          <p className="text-justify">
            Explore Gurgaon's Premier Brands For SCO Plots. Ideal For Your Shop
            Cum Office Needs.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div>
          <img src={modern} alt="top brands" />
        </div>
        <div>
          <h3>Modern Design</h3>
          <p className="text-justify">
            Explore Gurgaon's Premier Brands For SCO Plots. Ideal For Your Shop
            Cum Office Needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Badges;
