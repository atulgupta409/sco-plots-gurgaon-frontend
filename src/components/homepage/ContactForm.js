import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import mob from "../../assets/contact-mob-img.png";
import { checkValidation } from "../../utils/validation";
import contBg from "../../assets/benifits-bg.png";

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const location = useRef(null);

  const submitFormHandler = () => {
    const message = checkValidation(
      name.current.value,
      email.current.value,
      phone.current.value,
      location.current.value
    );
    setErrorMessage(message);
  };
  return (
    <div className="contact_main mt100">
      <div className="container">
        <div className="row">
          <img src={contBg} alt="grid img" className="desk_hide" />
          <div className="col-md-6">
            <h2 className="h2_headings">
              <span className="text_shadow">Contact Us</span> For SCO Plots{" "}
              <br /> In Gurgaon
            </h2>
            <img
              src={mob}
              alt="sco plots gurgaon contact"
              className="mob_hide"
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    ref={name}
                    type="text"
                    placeholder="Name"
                    className="home_input"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    ref={email}
                    type="email"
                    placeholder="Email"
                    className="home_input"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    ref={phone}
                    type="phone"
                    placeholder="Phone No."
                    className="home_input"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    ref={location}
                    type="text"
                    placeholder="Location"
                    className="home_input"
                  />
                </div>
              </div>
              <p className="error_message">{errorMessage}</p>
              <button className="send_btn" onClick={submitFormHandler}>
                Submit
              </button>
            </form>
            <div className="contact_review_main mob_hide">
              <div className="review_box">
                <div>
                  <FaStar className="star" /> <p>Reviews</p>
                </div>
                <p className="review">4.8/5</p>
              </div>
              <div className="review_text">
                <p>
                  SCO Plots offers strong brand presence, outstanding value, and
                  prime visibility, making it an ideal investment opportunity
                  for real estate investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
