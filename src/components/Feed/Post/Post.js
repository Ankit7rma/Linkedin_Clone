import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./post.css"
const Post = ({ name, description, avatar, message }) => {
  const [follow, setFollow] = useState(true);

  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={avatar} alt="user"/>
        <div className="post_info">
          <div className="user_nameInfo">
            <h2>{name}</h2>
            <p>{follow ? "":"Following"}</p>
          </div>
          <p>{description}</p>
        </div>
        <button onClick={()=>(setFollow(!follow))}>{follow ? "+ Follow":"Following"}</button>
      </div>
      <div className="post_body">
       <p>{message}</p> 
      </div>
    </div>
  );
};

export default Post;
