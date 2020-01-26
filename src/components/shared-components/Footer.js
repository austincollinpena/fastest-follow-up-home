import React from "react";
import "../copy.scss";
import "./Footer.scss";
import {Link} from "react-router-dom";

export const Footer = () => {
    return(
        <div className="footer">
            <p className="body-text white">Fastest Follow Up is a Work In Progress. For any Questions, Email Austin at austin@fastestfollowup.com</p>
            <p className="body-text orange"><Link to="/">Visit The Home Page</Link></p>
        </div>
    )
}