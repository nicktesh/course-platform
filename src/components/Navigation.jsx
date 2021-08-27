import React from "react";
import { Link, withRouter } from "react-router-dom";
import ProfileNav from "../components/ProfileNav";
import NotificationBubble from "../components/NotificationBubble";
import logo from "../assets/planet-frontend-alt.svg";
import dashboardIcon from "../assets/dashboard-icon.svg";
import coursesIcon from "../assets/courses-icon.svg";
import messagesIcon from "../assets/messages-icon.svg";
import manageIcon from "../assets/manage-icon.svg";
import settingsIcon from "../assets/settings-icon.svg";

function Navigation(props) {
  return (
    <div className="navigation">
      <div class="nav-container">
        <Link class="navbar-brand" to="/">
          <img src={logo} />
        </Link>
        <div>
          <ul class="navbar-nav">
            <li>
              <Link
                class={`nav-link ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                <img src={dashboardIcon} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                class={`nav-link ${
                  props.location.pathname === "/courses" ? "active" : ""
                }`}
                to="/courses"
              >
                <img src={coursesIcon} />
                Courses
              </Link>
            </li>
            <li>
              <Link
                class={`nav-link ${
                  props.location.pathname === "/messages" ? "active" : ""
                }`}
                to="/messages"
              >
                <img src={messagesIcon} />
                Messages
                <NotificationBubble />
              </Link>
            </li>
            <li>
              <Link
                class={`nav-link ${
                  props.location.pathname === "/manage" ? "active" : ""
                }`}
                to="/manage"
              >
                <img src={manageIcon} />
                Manage
              </Link>
            </li>
            <li>
              <Link
                class={`nav-link ${
                  props.location.pathname === "/settings" ? "active" : ""
                }`}
                to="/settings"
              >
                <img src={settingsIcon} />
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
