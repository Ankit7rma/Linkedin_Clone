import React from "react";
import "./header.css"
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Header = () => {
  const user = useSelector(selectUser)
 
  return (
    <div className="header">
      <div className="header_left">
        {/* unlock<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" /> */}
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title={'Home'}/>
        <HeaderOptions Icon={SupervisorAccountIcon} title={'MyNetwork'}/>
        <HeaderOptions Icon={BusinessCenterIcon} title={'Jobs'}/>
        <HeaderOptions Icon={ChatIcon} title={'Messaging'}/>
        <HeaderOptions Icon={NotificationsIcon} title={'Notifications'}/>
        <HeaderOptions 
        avatar={true}
        // "https://lh3.googleusercontent.com/ogw/AKPQZvyGi0i3iu1xdM59zqDA1aiX9Ce0hn2A2OczqPTESw=s32-c-mo"
         title={'Me'}
          
         />
      </div>
    </div>
  );
};

export default Header;
