import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import builder_bg from "../../assets/builder-bg.png";
import arrow from "../../assets/enquire-arrow.svg";

const Faq = () => {
  const [showAns, setShowAns] = useState(false);

  const handleShowAns = () => {
    setShowAns(!showAns);
  };
  return (
    <div className="faq_main mt100">
      <img src={builder_bg} alt="bg" className="bg_img" />
      <div className="container">
        <h2 className="h2_headings text-center">
          <span>Answers</span> To Our Most <br />
          Frequently Asked Questions
        </h2>
        <div className="faq_box">
          <div className="question" onClick={handleShowAns}>
            <h5>Why invest SCO plots in Gurgaon?</h5>
            {showAns ? (
              <FaMinus className="icon" />
            ) : (
              <FaPlus className="icon" />
            )}
          </div>
          {showAns && (
            <div className="ans">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nemo earum reiciendis nesciunt ea ipsam nulla voluptas magni
                animi, eius aliquid praesentium placeat minima.
              </p>
            </div>
          )}
        </div>
        <div className="faq_box">
          <div className="question" onClick={handleShowAns}>
            <h5>Why invest SCO plots in Gurgaon?</h5>
            {showAns ? <FaMinus /> : <FaPlus />}
          </div>
          {showAns && (
            <div className="ans">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nemo earum reiciendis nesciunt ea ipsam nulla voluptas magni
                animi, eius aliquid praesentium placeat minima.
              </p>
            </div>
          )}
        </div>
        <div className="faq_box">
          <div className="question" onClick={handleShowAns}>
            <h5>Why invest SCO plots in Gurgaon?</h5>
            {showAns ? <FaMinus /> : <FaPlus />}
          </div>
          {showAns && (
            <div className="ans">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                nemo earum reiciendis nesciunt ea ipsam nulla voluptas magni
                animi, eius aliquid praesentium placeat minima.
              </p>
            </div>
          )}
        </div>
        <div className="faq_box bg-black">
          <div className="question cursor-default">
            <div>
              <h5 className="text-white">Still Have Questions?</h5>
              <p className="text-white">
                Can't find the answer you're looking for. Please contact with
                our team
              </p>
            </div>
            <button className="enquire_btn_white mt-3">
              Contact Us{" "}
              <img src={arrow} alt="enquire" className="position-inherit" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
