import React from "react";
import "./header.css"
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
