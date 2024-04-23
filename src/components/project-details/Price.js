import React from "react";

const Price = ({ name }) => {
  return (
    <div className="price_main mt100">
      <div className="container">
        <h3 className="text-center">{name}</h3>
        <h2 className="h2_headings text-center">Price List & Payment Plans</h2>
      </div>
    </div>
  );
};

export default Price;
