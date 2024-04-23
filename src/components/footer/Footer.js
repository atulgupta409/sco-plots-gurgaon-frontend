import React from "react";
import "./Footer.scss";
import blackLogo from "../../assets/black-logo.svg";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { builders } from "../../utils/constants";
import useGetMicroLocations from "../../utils/useGetMicrolocations";

const Footer = () => {
  const year = new Date().getFullYear();
  const [microlocations, isLoading] = useGetMicroLocations();

  return (
    <div className="footer_main">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img
              src={blackLogo}
              alt="sco plots gurgaon logo"
              className="footer-logo"
            />
            <p className="text-justify">
              Explore unparalleled investment opportunities in Gurgaon's
              thriving commercial landscape with SCO (Shop Cum Office) plots.
              Strategically located in prime areas, these plots offer a dynamic
              blend of retail and office spaces, catering to diverse business
              needs. Designed to maximize visibility and accessibility, SCO
              plots boast modern infrastructure, essential amenities, and
              customizable options.
            </p>
            <h4>Contact Us</h4>
            <p className="address">
              <MdLocationPin className="location_icon" /> 7C, Level Ground,
              Omaxe Gurgaon Mall, Sohna Road, Gurgaon
            </p>
            <a href="tel:9999063322" className="mob">
              <IoIosCall className="icon" /> 9999063322
            </a>
          </div>
          <div className="col-md-2 mob_hide" style={{ paddingLeft: "40px" }}>
            <h4>Top Brands</h4>
            {builders?.map((builder) => (
              <Link
                className="footer_link"
                to={`/sco-plots/${builder.slug}`}
                key={builder.id}
              >
                {builder.name} sco plots
              </Link>
            ))}
          </div>
          <div className="col-md-3 mob_hide" style={{ paddingLeft: "90px" }}>
            <h4>SCO Plots in Gurgaon</h4>
            {microlocations?.map((micro) => (
              <Link
                className="footer_link"
                key={micro?._id}
                style={{ display: "block" }}
              >
                {micro?.name}
              </Link>
            ))}
          </div>
          <div className="col-md-2 mob_hide" style={{ paddingLeft: "90px" }}>
            <h4>Company</h4>
            <Link className="footer_link">Top projects</Link>
            <Link className="footer_link">New projects</Link>
            <Link className="footer_link">Contact Us</Link>
            <Link className="footer_link">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <p>
          Copyright &#169; {year} Dwarka Expressway | All rights reserved |
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
