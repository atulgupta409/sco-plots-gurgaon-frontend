import React from "react";
import dummy from "../../assets/dummy.jpg";

const PageBanner = () => {
  return (
    <div className="container page_banner mob_hide">
      <div>
        <h1 className="h2_headings">Top Projects</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet
          earum qui similique, iusto ullam dolore ut! Distinctio vel repudiandae
          hic dolores, suscipit aliquam consequuntur exercitationem ipsa esse id
          natus delectus, labore et unde!
        </p>
        <button className="enquire_btn_white black_btn w-30">
          Enquire Now{" "}
        </button>
      </div>
      <div>
        <img src={dummy} alt="dummy" />
      </div>
    </div>
  );
};

export default PageBanner;
