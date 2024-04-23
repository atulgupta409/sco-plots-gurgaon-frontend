import React from "react";
import "./ProjectDetails.scss";
import Navbar from "../navbar/Navbar";
// import useNavScrollPosition from "../../utils/useNavScrollPosition";
// import goDown from "../../assets/go-down-arrow-animation.gif";
import arrow from "../../assets/enquire-arrow.svg";
import ProjectImages from "./ProjectImages";
import Price from "./Price";
import FloorPlan from "./FloorPlan";
import Amenities from "./Amenities";
import Highlights from "./Highlights";
import Advantages from "./Advantages";
import DownloadBrochure from "./DownloadBrochure";
import { Helmet } from "react-helmet-async";
import LocationMap from "./LocationMap";
import MiddleBanner from "./MiddleBanner";
import Builder from "../homepage/Builder";
import ContactForm from "../homepage/ContactForm";
import Footer from "../footer/Footer";
import ImageSlider from "./ImageSlider";
import { useGetProjectDetails } from "../../utils/useGetProjectDetails";
import { useParams } from "react-router-dom";
import BulletPoints from "./BulletPoints";
import AboutProject from "./AboutProject";

const ProjectDetails = () => {
  // const [isNavBgWhite] = useNavScrollPosition();
  const { slug } = useParams();
  const [projectsData, isLoading] = useGetProjectDetails(slug);
  console.log(projectsData);

  return (
    <>
      <Helmet></Helmet>
      <section className="bg-black position-relative">
        {/* <div className="mob_hide">
          <Navbar isNavBgWhite={isNavBgWhite} />
        </div> */}
        <div>
          <Navbar isNavBgWhite={true} />
        </div>
        <div className="clsfix mob_hide">
          <img
            src={projectsData?.images[0]?.image?.s3_link}
            alt={projectsData?.images[0]?.alt}
            className="w-100"
          />
        </div>
        <div className="cta2 mob_hide">
          <div className="container mob_hide">
            <BulletPoints
              isOnBanner={true}
              name={projectsData?.name}
              address={projectsData?.location?.address}
              banner_bullets={projectsData?.banner_bullets}
            />
            <button className="enquire_btn_white mt-3 font-weight-bold">
              ₹{projectsData?.starting_price} Onwards{" "}
              <img src={arrow} alt="enquire" />
            </button>
          </div>
        </div>
        <div className="desk_hide" style={{ marginTop: "55px" }}>
          <ImageSlider images={projectsData?.images} />
        </div>
      </section>
      <div className="desk_hide mt100" style={{ padding: "0 12px" }}>
        <AboutProject
          name={projectsData?.name}
          description={projectsData?.short_descrip}
        />
      </div>
      <ProjectImages
        name={projectsData?.name}
        description={projectsData?.short_descrip}
        images={projectsData?.images}
        project_area={projectsData?.project_size}
        project_status={projectsData?.project_status}
        builder_name={projectsData?.builder[0]?.name}
        bigImage={projectsData?.images[0]?.image?.s3_link}
      />
      <Price name={projectsData?.name} />
      <FloorPlan floorPlans={projectsData?.plans} name={projectsData?.name} />
      <Amenities
        name={projectsData?.name}
        amenities={projectsData?.allAmenities?.commercial}
      />
      <Highlights
        image={projectsData?.images[0]?.image?.s3_link}
        name={projectsData?.name}
        highlights={projectsData?.highlights}
      />
      <Advantages
        name={projectsData?.name}
        image={projectsData?.location_map?.s3_link}
        advantages={projectsData?.advantages}
      />
      <DownloadBrochure
        name={projectsData?.name}
        address={projectsData?.location?.address}
      />
      {projectsData && (
        <LocationMap
          name={projectsData?.name}
          lattitude={projectsData?.location?.latitude}
          longitude={projectsData?.location?.longitude}
        />
      )}
      <MiddleBanner />
      <Builder isDetailPage={true} />
      <div className="mb-5">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;
