import React from "react";
import logo from "../assets/planet-frontend-alt.svg";
import profilePic from "../assets/profile-pic.jpg";

function HeaderMobile() {
  return (
    <div className="header-mobile">
      <img src={logo} />
      <div className="mobile-profile">
        <img src={profilePic} />
      </div>
    </div>
  );
}

export default HeaderMobile;
