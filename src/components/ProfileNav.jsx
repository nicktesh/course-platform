import React from "react";
import profilePic from "../assets/profile-pic.jpg";

function ProfileNav() {
  return (
    <div className="nav-profile">
      <img src={profilePic} alt="Nicholas Tesh" />
      <div className="profile-content">
        <p className="profile-name">Nicholas Tesh</p>
        <p className="profile-email">info@nicktesh.com</p>
      </div>
    </div>
  );
}

export default ProfileNav;
