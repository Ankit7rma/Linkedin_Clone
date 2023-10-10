import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./post.css"
import "./popup.css"
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOptions from "../InputOptions";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
const Post = ({ name, description, avatar, message,likes,comments,shares }) => {
  const [follow, setFollow] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const user = useSelector(selectUser);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="post">
      <div className="post_header">
       {avatar&& <Avatar  alt="user">{user.email[0]}</Avatar>}
        <div className="post_info">
          <div className="user_nameInfo">
            <h2>{user.displayName}</h2>
            <p>{follow ? "":"Following"}</p>
          </div>
          <p>{description}</p>
        </div>
        <button onClick={()=>(setFollow(!follow))}>{follow ? "+ Follow":"Following"}</button>
      </div>
      <div className="post_body">
       <p>{message}</p> 
      </div>
      <div className="post_reach">
      {likes && <div className='likes'>
            Likes: {likes}
          </div>}
          {comments&& <div className="comments">
            Comments: {comments}
          </div>}
          {shares && <div className="shares">
            Shares: {shares}
          </div>}
        </div>
      <div className="post_buttons">
      <div className="popup-container">
      <button className="popup-button"onClick={togglePopup} style={{border:"none",background:"white"}}>
      <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
      </button>
      {isPopupVisible && (
        <div className="popup-content">
          <button className="popup-like-button">Celebrate</button>
          <button className="popup-like-button">Love</button>
          <button className="popup-like-button">Support</button>
          <button className="popup-like-button">Insightful</button>
        </div>
      )}</div>
      <InputOptions Icon={ChatIcon} title="Comment" color="gray"/>
      <InputOptions Icon={ShareIcon} title="Share" color="gray"/>
      <InputOptions Icon={SendIcon} title="Send" color="gray"/>
      </div>
    </div>
  );
};

export default Post;
