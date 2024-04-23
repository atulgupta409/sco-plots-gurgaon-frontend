import React from "react";
import brochureBg from "../../assets/browchure-bg.png";
import { GoDownload } from "react-icons/go";

const DownloadBrochure = ({ name, address }) => {
  return (
    <div className="price_main mt100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="h2_headings">
              <span className="mob_hide" style={{ fontWeight: "400" }}>
                {name} SCO Plots In {address}. Dive Into Luxary Living -{" "}
              </span>
              <span>Download The E-Brochure</span>{" "}
              <span className="mob_hide">Now!</span>
            </h2>
            <button className="enquire_btn_white black_btn mt-3 mob_hide">
              DOWNLOAD NOW <GoDownload />
            </button>
          </div>
          <div className="col-md-4">
            <img
              src={brochureBg}
              alt="brochure bg"
              className="img-fluid brochure_img"
            />
          </div>
          <div className="col-6">
            <button className="enquire_btn_white black_btn mt-3 desk_hide">
              DOWNLOAD NOW <GoDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBrochure;
