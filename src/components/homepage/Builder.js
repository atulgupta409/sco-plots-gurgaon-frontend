import React, { useRef } from "react";
import builder_bg from "../../assets/builder-bg.png";
import HomeCard from "../card/HomeCard";
import ScrollBtn from "../scroll-button/ScrollBtn";
import { builders } from "../../utils/constants";

const Builder = ({ isDetailPage }) => {
  const scrollContainerRef = useRef(null);
  const cardRef = useRef(null);

  return (
    <div className="builder_main">
      {!isDetailPage && <img src={builder_bg} alt="bg" className="bg_img" />}
      <div className="container">
        <div className="heading_box">
          <div>
            {!isDetailPage ? (
              <h2 className="h2_headings">
                Unique And Vibrant <span>Shop-Cum-Office</span>
                <br />
                SCO For Ideal Investment <br />
                Opportunity
              </h2>
            ) : (
              <>
                <h2 className="h2_headings mob_hide">
                  Top Brands For <span>Shop-Cum-Office</span> SCO Plots
                </h2>
                <h2 className="h2_headings desk_hide">
                  <span>Top SCO Plots Brands</span>
                </h2>
              </>
            )}
          </div>
          {!isDetailPage && (
            <div className="mob_hide">
              <p>35+</p>
              <p>Authorized Channel Partner</p>
            </div>
          )}
        </div>
        <div className="overflow_row row mt40" ref={scrollContainerRef}>
          {builders?.map((builder) => (
            <div className="col-md-3 col-8" ref={cardRef} key={builder.id}>
              <HomeCard
                name={builder.name}
                img={builder.img}
                tagline={builder.tagline}
                slug={`/sco-plots/${builder.slug}`}
              />
            </div>
          ))}
        </div>
        <div className="mob_hide">
          <ScrollBtn
            cardRef={cardRef}
            scrollContainerRef={scrollContainerRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Builder;
