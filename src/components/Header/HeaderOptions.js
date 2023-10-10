import React from "react";
import "./headerOptions.css"
import { Avatar } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "../../features/userSlice";


const HeaderOptions = ({avatar, Icon, title ,onClick}) => {
  const user = useSelector(selectUser)
  const auth = getAuth()
  const dispatch = useDispatch()
  const logOutApp=()=>{
    dispatch(logOut());
    auth.signOut()
  }
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && <Avatar alt='avatar' onClick={()=>{logOutApp()}} className="headerOptions_icon">{user?.email[0]}</Avatar>}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
