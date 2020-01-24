import React from "react";
import "./SuccessPopUp.scss";
import PropTypes from 'prop-types';
import "../global-styles.scss";
import "../copy.scss";
import exit from "../../media/exit-mark.svg";

export const SuccessPopUp = ({popUpActive, closePopUp}) => {
    return(
        <div className={`success-pop-up ${popUpActive === true ? "active-pop-up" : ""}`}>
            <img onClick={() => closePopUp()} id="exit-button" src={exit}/>
            <p id='title' className="secondary-title center bold">Those Home Advisor Leads <span className="orange-highlight">Won't Know What Hit Them</span></p>
            <p className='body-text'>I’m working full time to get the service all set up. Your interest in the final product makes me ecstatic.</p><p className="body-text"> I’ll be following up to get some feedback from you. If you want to help shape the future of this product, please be on the lookout.</p>
            <p className='body-text'>Austin Pena | Founder</p>
        </div>
    )
};

SuccessPopUp.propTypes = {
    popUpActive: PropTypes.bool.isRequired,
    closePopUp: PropTypes.func.isRequired,
};