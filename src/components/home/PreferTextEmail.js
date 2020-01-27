import React from "react";
import "./PreferTextEmail.scss";
import PropTypes from "prop-types";

export const PreferTextEmail = ({changeToNumber, changeToEmail, isChoice}) => {
  return (
    <div className="prefer-number-email">
      <p>I Prefer</p>
      <div className="button-container">
        <button onClick={() => changeToEmail()}
        className={isChoice === "email" ? "active-choice" : ""}
        >Email
        </button>
        <button
            className={isChoice === "phone" ? "active-choice" : ""}
            onClick={() => changeToNumber()}>Texts</button>
      </div>
    </div>
  );
};

PreferTextEmail.propTypes = {
    changeToNumber: PropTypes.func.isRequired,
    changeToEmail: PropTypes.func.isRequired,
    isChoice: PropTypes.string.isRequired
};