import React from "react";
import { Link, withRouter } from "react-router-dom";
import NotificationBubble from "./NotificationBubble";
import dashboardIcon from "../assets/dashboard-icon.svg";
import coursesIcon from "../assets/courses-icon.svg";
import messagesIcon from "../assets/messages-icon.svg";
import manageIcon from "../assets/manage-icon.svg";
import settingsIcon from "../assets/settings-icon.svg";

function NavMobile(props) {
  return (
    <div className="nav-mobile">
      <div class="nav-container">
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
                <NotificationBubble />
                Messages
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
    </div>
  );
}

export default withRouter(NavMobile);
