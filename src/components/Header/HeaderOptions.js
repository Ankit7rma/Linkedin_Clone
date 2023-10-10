import React from "react";
import "./headerOptions.css"
import { Avatar } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/userSlice";


const HeaderOptions = ({avatar, Icon, title ,onClick}) => {
  const auth = getAuth()
  const dispatch = useDispatch()
  const logOutApp=()=>{
    dispatch(logOut());
    auth.signOut()
  }
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && <Avatar alt='avatar' src={avatar} onClick={logOutApp} className="headerOptions_icon"/>}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
