import React from "react";
import searchIcon from "../assets/icons/search-icon.svg";

function MiniSearchbar() {
  return (
    <form autoComplete="off">
      <div className="searchbar">
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search messages"
        />
      </div>
    </form>
  );
}

export default MiniSearchbar;
