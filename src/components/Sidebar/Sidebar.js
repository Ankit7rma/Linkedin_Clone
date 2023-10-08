import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css"

const Sidebar = () => {
  const recentItems = (value)=>{
    return (
      <div className="sidebar_recentItems">
        <span className="recentItems_hash">#</span>
        <p>{value}</p>
      </div>
    )
  }
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://media.licdn.com/dms/image/D4D16AQFkF6U-fTBt7Q/profile-displaybackgroundimage-shrink_350_1400/0/1695575160006?e=1701907200&v=beta&t=GJy-aI7eAN0-rzqaamXx1ijFLf8hEubXrzCQnkKIiaE" alt="bg-img" />
        <Avatar src="https://lh3.googleusercontent.com/ogw/AKPQZvyGi0i3iu1xdM59zqDA1aiX9Ce0hn2A2OczqPTESw=s32-c-mo" alt="user" className="sidebar_avatar" />
        <h2>Ankit Sharma</h2>
        <h4>Ankitsharma290101@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewed You</p>
          <p className="sidebar_statsNumber">2,500</p>
        </div>
        <div className="sidebar_stat">
          <p >Post impressions</p>
          <p className="sidebar_statsNumber">3,521</p>
        </div>
      </div>

      <div className="sidebar_bottom">
      <p>Recent</p>
      {recentItems("reactjs")}
      {recentItems("programming")}
      {recentItems("developer")}
      {recentItems("redux")}
      {recentItems("frontend")}
      </div>
      
    </div>
  );
};

export default Sidebar;
