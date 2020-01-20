import React from "react";
import "./SuccessPopUp.scss";
import PropTypes from 'prop-types';

export const SuccessPopUp = ({popUpActive}) => {

    return(
        <div className={`success-pop-up ${popUpActive === true ? "active-pop-up" : ""}`}>
            <p>You rock!!!!</p>
        </div>
    )
};

SuccessPopUp.propTypes = {
    popUpActive: PropTypes.bool.isRequired
};