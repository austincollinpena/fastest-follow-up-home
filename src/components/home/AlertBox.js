import React, { useState } from "react";

import { EmailForm } from "../shared-components/EmailForm";
import { NumberForm } from "../shared-components/NumberForm";
import "./AlertBox.scss";
import { PreferTextEmail } from "./PreferTextEmail";
import "../global-styles.scss";
import { SuccessPopUp } from "../shared-components/SuccessPopUp";

export const AlertBox = () => {
  const [activeChoice, setActiveChoice] = useState("email");
  const [popUpActive, setpopUpActive] = useState("false");

  const changeToNumber = () => {
    setActiveChoice("phone");
  };

  const changeToEmail = () => {
    setActiveChoice("email");
  };

  const showPopUp = () => {
      setpopUpActive(true);
  };

  return (
    <div className="email-number-container">
      <EmailForm isActive={activeChoice === "email" && true}  />
      <NumberForm isActive={activeChoice === "phone" && true} showPopUp={showPopUp} />
      <PreferTextEmail
        changeToNumber={changeToNumber}
        changeToEmail={changeToEmail}
        isChoice={activeChoice}
      />
      <SuccessPopUp
      popUpActive={popUpActive}
      />
    </div>
  );
};
