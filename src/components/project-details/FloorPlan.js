import React, { useRef } from "react";
import ScrollBtn from "../scroll-button/ScrollBtn";
import { NO_IMAGE } from "../../utils/constants";

const FloorPlan = ({ floorPlans, name }) => {
  const scrollContainerRef = useRef(null);
  const cardRef = useRef(null);
  return (
    <div className="container mt100">
      <div className="heading_box">
        <div>
          <h2 className="h2_headings mob_hide">
            {name} <span className="text_shadow">Floor Plans</span>
          </h2>
          <h2 className="h2_headings desk_hide">
            <span className="text_shadow">Floor Plans</span>
          </h2>
        </div>
        <div className="mob_hide">
          <ScrollBtn
            cardRef={cardRef}
            scrollContainerRef={scrollContainerRef}
          />
        </div>
      </div>
      <div className="row mt30 overflow_row" ref={scrollContainerRef}>
        {floorPlans?.map((plan) =>
          plan?.floor_plans?.map((floor, i) => (
            <div className="col-md-4 col-10" ref={cardRef} key={i}>
              <div className="floor_plan_card">
                <div className="floor_img">
                  <img
                    src={
                      floor?.image !== null ? floor?.image?.s3_link : NO_IMAGE
                    }
                    className="clickable_image"
                    alt="floor plan"
                  />
                  <div className="view_floor_plan_img">
                    <button
                      type="button"
                      className="btn view_img_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal-0"
                      fdprocessedid="mveb3j"
                    >
                      View Floor Plan
                    </button>
                  </div>
                </div>
                <div className="card_body">
                  <h5 className="card_title">{floor?.name} Floor Plan</h5>
                  <p className="mb-0">
                    {floor?.area} {plan?.size_sq}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FloorPlan;
