import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { BLACK_LOGO, WHITE_LOGO } from "../../utils/constants";
import useGetMicroLocations from "../../utils/useGetMicrolocations";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = ({ isNavBgWhite }) => {
  const [microlocations, isLoading] = useGetMicroLocations();
  const slug = "slug";
  return (
    <nav
      className={
        isNavBgWhite
          ? "navbar_white navbar navbar-expand-lg"
          : "navbar navbar-expand-lg"
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {isNavBgWhite ? (
            <img src={BLACK_LOGO} alt="brand logo" />
          ) : (
            <img src={WHITE_LOGO} alt="brand logo" />
          )}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={
              isNavBgWhite ? "navbar-toggler-icon" : "navbar-toggler-icon-white"
            }
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={isNavBgWhite ? "navbar-nav text_black" : "navbar-nav"}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Top Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                New Projects
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Locations
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {microlocations?.map((micro) => (
                  <li key={micro?._id}>
                    <Link
                      className="dropdown-item"
                      to={`/gurgaon/${slug}/sco-plots`}
                    >
                      {micro?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          {isNavBgWhite ? (
            <a
              href="tel:9999063322"
              className="enquire_btn_white black_btn nav_contact_black"
            >
              <BiSolidPhoneCall className="call_icon_nav" /> 9999063322
            </a>
          ) : (
            <a href="tel:9999063322" className="enquire_btn_white nav_contact">
              <BiSolidPhoneCall className="call_icon_nav" /> 9999063322
            </a>
          )}
          {isNavBgWhite ? (
            <button className="enquire_btn_white black_btn">Contact Us</button>
          ) : (
            <button className="enquire_btn_white">Contact Us</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
