import React from "react";
import "./headerOptions.css"
import { Avatar } from "@mui/material";


const HeaderOptions = ({avatar, Icon, title }) => {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && <Avatar alt='avatar' src={avatar}  className="headerOptions_icon"/>}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
