import React from "react";
import "./Nav.scss";
import { Link, useParams, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

export const Nav = ({ handleInputClass }) => {
  let location = useLocation();
  console.log(location.pathname);
  // console.log(location[path]);

  return (
    <div className="nav-container home-page-grid">
      <nav id="main-nav">
        {location.pathname === "/" ? (
          <p
            className="subtitle white cta link"
            onClick={() => handleInputClass()}
          >
            Sign Up For Beta
          </p>
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
