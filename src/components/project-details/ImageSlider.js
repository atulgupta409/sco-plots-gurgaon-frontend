import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <div className="col-12 desk_hide">
      <Carousel interval={null} controls={false}>
        {images?.map((image, i) => {
          return (
            <Carousel.Item key={i}>
              <div className="img_card">
                <img
                  src={images?.length !== 0 ? image?.image?.s3_link : ""}
                  alt={image?.alt}
                  className="img-fluid img_property_mob"
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
