import React, { useRef } from "react";
import HomeCard from "../card/HomeCard";
import ScrollBtn from "../scroll-button/ScrollBtn";
import useGetProjectsByType from "../../utils/useGetProjectByTypes";

const ProjectsByLocation = ({ location }) => {
  const scrollContainerRef = useRef(null);
  const cardRef = useRef(null);
  const [scoProjectsData, isLoading] = useGetProjectsByType(true);

  const actualSco = scoProjectsData?.filter((data) => {
    return (
      data?.name?.endsWith("sco plots") &&
      data?.location?.micro_location[0]?.name?.toLowerCase() ===
        location?.toLowerCase()
    );
  });
  console.log(actualSco);

  return (
    <>
      {actualSco?.length > 0 && (
        <div className="builder_main">
          <div className="container">
            <div className="heading_box">
              <div>
                <h2 className="h2_headings">SCO Plots In {location}</h2>
              </div>
              {actualSco?.length > 4 && (
                <div className="mob_hide">
                  <ScrollBtn
                    cardRef={cardRef}
                    scrollContainerRef={scrollContainerRef}
                  />
                </div>
              )}
            </div>
            <div className="overflow_row row mt40" ref={scrollContainerRef}>
              {actualSco?.map((data) => (
                <div className="col-md-3 col-8" ref={cardRef} key={data?._id}>
                  <HomeCard
                    img={data?.images[0]?.image?.s3_link}
                    name={data?.name?.substring(0, data?.name?.length - 10)}
                    tagline={data?.location?.address}
                    slug={data?.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsByLocation;
