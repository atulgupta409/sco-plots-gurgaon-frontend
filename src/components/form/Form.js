import React, { useRef, useState } from "react";
import { checkValidation } from "../../utils/validation";

const Form = () => {
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
  );
};

export default Form;
