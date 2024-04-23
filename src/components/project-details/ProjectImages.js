import React, { useRef } from "react";
import area from "../../assets/Area.svg";
import status from "../../assets/status.svg";
import developer from "../../assets/Developer.svg";
import ScrollBtn from "../scroll-button/ScrollBtn";
import ellipse from "../../assets/Ellipse 2802.svg";
import { Link } from "react-router-dom";
import AboutProject from "./AboutProject";

const ProjectImages = ({
  name,
  description,
  project_area,
  project_status,
  builder_name,
  images,
  bigImage,
}) => {
  const cardRef = useRef(null);
  const scrollContainerRef = useRef(null);

  return (
    <div className="position-relative overflow-hidden mob_hide">
      <img src={ellipse} alt="ellipse" className="ellipse_grad" />
      <div className="container mt100">
        <h2 className="h2_headings">
          <span>{name}</span>
        </h2>
        <div className="row">
          <div className="col-md-6">
            <AboutProject name={name} description={description} />
          </div>
          <div className="col-md-6">
            <div className="configurations">
              <div className="configuration">
                <img src={area} alt="project area" />
                <div>
                  <h4>Area</h4>
                  <p>{project_area}</p>
                </div>
              </div>
              <div className="configuration">
                <img src={status} alt="project area" />
                <div>
                  <h4>Status</h4>
                  <p>{project_status}</p>
                </div>
              </div>
              <div className="configuration">
                <img src={developer} alt="project area" />
                <div>
                  <h4>Developer</h4>
                  <p>{builder_name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt40">
          <div className="col-md-6">
            <img src={bigImage} alt={name} className="project_big_img" />
          </div>
          <div className="col-md-6">
            <div className="row overflow_row" ref={scrollContainerRef}>
              {images?.slice(1)?.map((image) => (
                <div
                  className="col-md-8"
                  ref={cardRef}
                  key={image?.image?.s3_link}
                >
                  <img
                    src={image?.image?.s3_link}
                    alt={image?.alt}
                    className="project_small_img"
                  />
                </div>
              ))}
            </div>
            <div className="below_images">
              <ScrollBtn
                cardRef={cardRef}
                scrollContainerRef={scrollContainerRef}
                isImgBtn={true}
              />
              <Link
                to={"/project-details/image-gallery"}
                className="view_all_img"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImages;
