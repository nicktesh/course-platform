import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../assets/logo512.png";

function Navigation(props) {
  return (
    <div className="navigation">
      <div class="nav-container">
        <Link class="navbar-brand" to="/">
          <img src={logo} />
        </Link>
        <div>
          <ul class="navbar-nav">
            <li
              class={`nav-item ${
                props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/">
                <i class="fas fa-columns"></i>Dashboard
              </Link>
            </li>
            <li
              class={`nav-item ${
                props.location.pathname === "/courses" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/courses">
                <i class="fas fa-book"></i>Courses
              </Link>
            </li>
            <li
              class={`nav-item ${
                props.location.pathname === "/messages" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/messages">
                <i class="fas fa-inbox"></i>Messages
              </Link>
            </li>
            <li
              class={`nav-item ${
                props.location.pathname === "/manage" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/manage">
                <i class="fas fa-edit"></i>Manage
              </Link>
            </li>
            <li
              class={`nav-item ${
                props.location.pathname === "/settings" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/settings">
                <i class="fas fa-cog"></i>Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navigation);
