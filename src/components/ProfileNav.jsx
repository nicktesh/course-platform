import React from "react";
import profilePic from "../assets/profile-pic.jpg";

function ProfileNav() {
  return (
    <div class="nav-profile">
      <img src={profilePic} />
      <div class="profile-content">
        <p class="profile-name">Nicholas Tesh</p>
        <p class="profile-email">info@nicktesh.com</p>
      </div>
    </div>
  );
}

export default ProfileNav;
