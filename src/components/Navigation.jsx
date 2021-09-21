import React from "react";
import { Link, withRouter } from "react-router-dom";
import ProfileNav from "../components/ProfileNav";
import NotificationBubble from "../components/NotificationBubble";
import logo from "../assets/planet-frontend-alt.svg";
import coursesIcon from "../assets/courses-icon.svg";
import messagesIcon from "../assets/messages-icon.svg";
import manageIcon from "../assets/manage-icon.svg";
import settingsIcon from "../assets/settings-icon.svg"; 

function Navigation(props) {
  return (
    <div className="navigation">
      <div className="nav-container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Planet Frontend" />
        </Link>
        <div>
          <ul className="navbar-nav">
            <li>
              <Link
                className={`nav-link ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                <img src={coursesIcon} alt="" />
                Courses
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  props.location.pathname === "/messages" ? "active" : ""
                }`}
                to="/messages"
              >
                <img src={messagesIcon} alt="" />
                Messages
                <NotificationBubble />
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  props.location.pathname === "/manage" ? "active" : ""
                }`}
                to="/manage"
              >
                <img src={manageIcon} alt="" />
                Manage
              </Link>
            </li>
            <li>
              <Link
                className={`nav-link ${
                  props.location.pathname === "/settings" ? "active" : ""
                }`}
                to="/settings"
              >
                <img src={settingsIcon} alt="" />
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ProfileNav />
    </div>
  );
}

export default withRouter(Navigation);
