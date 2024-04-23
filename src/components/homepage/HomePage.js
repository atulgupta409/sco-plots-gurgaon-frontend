import React from "react";
import Navbar from "../navbar/Navbar";
import "./HomePage.scss";
import arrow from "../../assets/enquire-arrow.svg";
import goDown from "../../assets/go-down-arrow-animation.gif";
import Builder from "./Builder";
import ScoBenifits from "./ScoBenifits";
import ProjectsByLocation from "./ProjectByLocation";
import WhyInvest from "./WhyInvest";
import Faq from "./Faq";
import Footer from "../footer/Footer";
import ContactForm from "./ContactForm";
import useNavScrollPosition from "../../utils/useNavScrollPosition";
import LocationTab from "./LocationTab";
import PopularProjects from "./PopularProjects";
import Banner from "./Banner";
import rightTick from "../../assets/right-tick.svg";
import banner1 from "../../assets/looking_commercial_banner.webp";
import banner2 from "../../assets/why_sco_banner.webp";

const HomePage = () => {
  const [isNavBgWhite] = useNavScrollPosition();
  const title = "Looking For Commercial Investment";
  const title2 = "Why Invest In SCO Plots";
  const points = ["Prime Location", "Shopping Paradise"];
  const points2 = ["2X Returns From Commercial", "Expert Opinions"];

  return (
    <>
      <div className="homepage_main">
        <Navbar isNavBgWhite={isNavBgWhite} />
        <div className={isNavBgWhite ? "container pt400" : "container"}>
          <h1>SCO Plots in Gurgaon</h1>
          <p>
            New <span>Opportunity</span> To Rise & Take Your{" "}
            <span>Business</span> To The Next Level
          </p>
          <button className="enquire_btn_white mt-md-3">
            Enquire Now <img src={arrow} alt="enquire" />
          </button>
        </div>
        <img src={goDown} alt="go down" />
      </div>
      <LocationTab />
      <PopularProjects />
      <Builder isDetailPage={false} />
      <ScoBenifits />
      <ProjectsByLocation location={"Dwarka Expressway"} />
      <ProjectsByLocation location={"NH8"} />
      <Banner banner={banner1} title={title} icon={rightTick} points={points} />
      <WhyInvest />
      <Banner
        banner={banner2}
        title={title2}
        icon={rightTick}
        points={points2}
      />
      <ContactForm />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
