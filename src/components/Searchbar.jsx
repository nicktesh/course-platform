import React from "react";
import searchIcon from "../assets/icons/search-icon.svg";

function Searchbar() {
  return (
    <form autoComplete="off">
      <div className="searchbar">
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search for courses, resources, and users"
        />
      </div>
    </form>
  );
}

export default Searchbar;
