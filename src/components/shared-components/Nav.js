import React from "react";
import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";


export const Nav = ({ handleInputClass }) => {
  let location = useLocation();
  // console.log(location[path]);




  return (
    <div className={`nav-container home-page-grid ${location.pathname !== "/" ? 'unset-height' : ''}`}>
      <nav id='main-nav'
           className={location.pathname !== "/" ? 'unset-clippath' : ""}>
        {location.pathname === "/" ? (
          <a
              href='#sign-up'
            className="subtitle white cta link"
              onClick={() => handleInputClass()}
          >
            Sign Up For Beta
          </a>
        ) : (
          <Link
            to="/"
            className="subtitle white cta link"
            onClick={() => handleInputClass()}
          >
            Sign Up For Beta
          </Link>
        )}
      </nav>
    </div>
  );
};

Nav.propTypes = {
  handleInputClass: PropTypes.func.isRequired
};
