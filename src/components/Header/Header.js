import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div className="header">
      <h1>This is header</h1>
      <div className="header__left">
        <img src="" alt="logo" />
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
