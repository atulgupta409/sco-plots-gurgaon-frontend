import React from "react";
import amenity from "../../assets/amenity.svg";

const Amenities = ({ name, amenities }) => {
  return (
    <div className="price_main mt100">
      <div className="container">
        <h2 className="h2_headings text-center mob_hide">
          Premium And Essential <span>Amenities</span> In {name}
        </h2>
        <h2 className="h2_headings desk_hide mb-0">
          <span>Amenities</span>
        </h2>
        <div className="row">
          {amenities?.map((amenity) => (
            <div
              className="col-md-2 col-6 text-center amenity"
              key={amenity?.name}
            >
              <div>
                <img src={amenity?.icon} alt={amenity?.name} />
              </div>
              <h6>{amenity?.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
