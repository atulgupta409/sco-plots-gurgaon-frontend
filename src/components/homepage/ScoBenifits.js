import React, { useState } from "react";
import benifit1 from "../../assets/benifts1.png";
import benifit2 from "../../assets/benifits2.png";
import benifitBg from "../../assets/benifits-bg.png";

const ScoBenifits = () => {
  const [isOffice, setIsOffice] = useState(true);
  const [isShop, setIsShop] = useState(false);
  const showOffice = () => {
    setIsOffice(true);
    setIsShop(false);
  };
  const showShop = () => {
    setIsShop(true);
    setIsOffice(false);
  };

  return (
    <div className="container mt100">
      <h2 className="h2_headings text-center">
        The <span>Future</span> Is Moving Towards A<br className="desk_hide" />{" "}
        Flexible Working <br className="mob_hide" /> Culture, With
        <br className="desk_hide" /> Shopping, Entertainment, Dining Together
      </h2>
      <div className="nav_btn desk_hide">
        <button onClick={showOffice} className={isOffice && "active"}>
          Offices
        </button>
        <button onClick={showShop} className={isShop && "active"}>
          Shops
        </button>
      </div>
      <div className="row benifits_row mt100 mob_hide">
        <div className="col-md-6 benifit_bg_main">
          <img src={benifitBg} alt="sco benifits" className="benifit_rect_bg" />
          <p className="low_opacity_text low_opacity_text1">
            Flexible Office Space
          </p>
          <img src={benifit1} alt="sco benifits" className="benifit_img" />
        </div>
        <div className="col-md-6">
          <h2 className="h2_headings">
            Work On Hybrid <br className="mob_hide" />
            Model Of <span className="text_shadow">Offices</span>
          </h2>
          <p className="text-justify benifits_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            impedit incidunt illo. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eos iure dolorem, doloremque modi soluta tempore
            enim quam sunt minima, aut debitis natus maxime quidem.
          </p>
        </div>
      </div>
      <div className="row benifits_row mt100 mob_hide">
        <div className="col-md-6">
          <h2 className="h2_headings">
            Retail <span className="text_shadow">Shops</span> Has Better <br />
            Business And Huge Returns
          </h2>
          <p className="text-justify benifits_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            impedit incidunt illo. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eos iure dolorem, doloremque modi soluta tempore
            enim quam sunt minima, aut debitis natus maxime quidem.
          </p>
        </div>
        <div className="col-md-6 benifit_bg_main">
          <img src={benifitBg} alt="sco benifits" className="benifit_rect_bg" />
          <p className="low_opacity_text low_opacity_text2">
            Restaurants andddd Shops
          </p>
          <img src={benifit2} alt="sco benifits" className="benifit_img" />
        </div>
      </div>
      {isOffice && (
        <div className="row benifits_row mt100 desk_hide">
          <div className="col-md-6 benifit_bg_main">
            <img
              src={benifitBg}
              alt="sco benifits"
              className="benifit_rect_bg"
            />
            <p className="low_opacity_text low_opacity_text1">
              Flexible Office Space
            </p>
            <img src={benifit1} alt="sco benifits" className="benifit_img" />
          </div>
          <div className="col-md-6">
            <h2 className="h2_headings">
              Work On Hybrid <br className="mob_hide" />
              Model Of <span className="text_shadow">Offices</span>
            </h2>
            <p className="text-justify benifits_text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              impedit incidunt illo. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eos iure dolorem, doloremque modi soluta tempore
              enim quam sunt minima, aut debitis natus maxime quidem.
            </p>
          </div>
        </div>
      )}
      {isShop && (
        <div className="row benifits_row mt100 desk_hide">
          <div className="col-md-6 benifit_bg_main">
            <img
              src={benifitBg}
              alt="sco benifits"
              className="benifit_rect_bg"
            />
            <p className="low_opacity_text low_opacity_text1">
              Restaurants and Shops
            </p>
            <img src={benifit2} alt="sco benifits" className="benifit_img" />
          </div>
          <div className="col-md-6">
            <h2 className="h2_headings">
              Retail <span className="text_shadow">Shops</span> Has Better{" "}
              <br className="mob_hide" />
              Business And Huge Returns
            </h2>
            <p className="text-justify benifits_text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              impedit incidunt illo. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eos iure dolorem, doloremque modi soluta tempore
              enim quam sunt minima, aut debitis natus maxime quidem.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoBenifits;
