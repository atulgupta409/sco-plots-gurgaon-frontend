import React from "react";
import tick from "../../assets/right-tick.svg";
import builder_bg from "../../assets/builder-bg.png";

const WhyInvest = () => {
  return (
    <div className="why_invest_main position-relative mob_hide">
      <img
        src={builder_bg}
        alt="bg"
        className="bg_img mob_hide"
        style={{ transform: "rotateY(180deg)" }}
      />
      <div className="container mt100">
        <div className="row">
          <h2 className="h2_headings desk_hide text-center">
            Why Invest SCO Plots <br />
            In <span className="text_shadow">Gurgaon?</span>
          </h2>
          <div className="col-6 desk_hide">
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Prime Location</span>
            </div>
          </div>
          <div className="col-6 desk_hide">
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Shopping Paradise</span>
            </div>
          </div>
          <div className="col-6 desk_hide">
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Branding And Visibility</span>
            </div>
          </div>
          <div className="col-6 desk_hide">
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Investment Potential</span>
            </div>
          </div>
          <div className="col-6 desk_hide">
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Tax Benifits</span>
            </div>
          </div>
          <div className="col-md-4 mob_hide">
            <h2 className="h2_headings mob_hide">
              Why Invest SCO Plots <br />
              In <span className="text_shadow">Gurgaon?</span>
            </h2>
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Prime Location</span>
            </div>
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Shopping Paradise</span>
            </div>
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Branding And Visibility</span>
            </div>
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Investment Potential</span>
            </div>
            <div className="why_invest_point">
              <img src={tick} alt="tick" />
              <span>Tax Benifits</span>
            </div>
          </div>
          <div className="col-md-8 mob_hide">
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              earum perspiciatis reprehenderit dolorem aperiam expedita quisquam
              ad deleniti cum, nobis ullam necessitatibus neque nemo, reiciendis
              voluptatibus nostrum assumenda amet molestias error! Ab, aut
              libero.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              dolorum mollitia atque ut corporis, et officiis sunt officia
              suscipit tenetur necessitatibus quasi blanditiis vel error
              adipisci ratione voluptate nobis placeat quaerat expedita non nemo
              nisi deleniti. Eum similique vero, natus iste ab odit culpa.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              exercitationem esse neque natus autem ducimus, rem, rerum eius vel
              qui doloribus dolor tempora sint veritatis laboriosam delectus
              quisquam hic fugiat sapiente accusamus optio! Quod, nam quos!
              Expedita minima ratione commodi pariatur atque quaerat corrupti
              facere, sed, iure earum vitae id asperiores necessitatibus
              exercitationem porro.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              exercitationem esse neque natus autem ducimus, rem, rerum eius vel
              qui doloribus dolor tempora sint veritatis laboriosam delectus
              quisquam hic fugiat sapiente accusamus optio! Quod, nam quos!
              Expedita minima ratione commodi pariatur atque quaerat corrupti
              facere, sed, iure earum vitae id asperiores necessitatibus
              exercitationem porro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInvest;
