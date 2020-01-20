import React from "react";
import "./PreferTextEmail.scss";

export const PreferTextEmail = ({changeToNumber, changeToEmail, isChoice}) => {
  return (
    <div className="prefer-number-email">
      <p>I Prefer</p>
      <div>
        <button onClick={() => changeToEmail()}
        className={isChoice === "email" && "active-choice"}
        >Email
        </button>
        <button
            className={isChoice === "phone" && "active-choice"}
            onClick={() => changeToNumber()}>Texts</button>
      </div>
    </div>
  );
};
