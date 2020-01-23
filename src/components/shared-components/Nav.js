import React from "react";
import "./Nav.scss";

export const Nav = ({handleInputClass}) => {


  return (
    <>
      <nav id="main-nav">

          <a className="subtitle white link">Blog</a>
          <a className="subtitle white link">About</a>
          <a className="subtitle white cta link" onClick={() => handleInputClass()}>
            Sign Up For Beta
          </a>

      </nav>
    </>
  );
};
