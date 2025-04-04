import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/menuSlice";



const Header = () => {
 const dispatch = useDispatch()
 const toggleSideMenu = ()=>{
  dispatch(toggleMenu())
 }


    return (
      <div className="grid grid-cols-[1fr_2fr_1fr] shadow-xl my-1 px-1  py-6 items-center  justify-between ">
        
        {/* Left section: Hamburger icon & YouTube logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img alt="menu"  onClick={()=>{toggleSideMenu()}} src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" className="w-10 h-10 "  />
          <img alt="youtube_icon" src="https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_media___youtube_logo_video_multimedia_stream_download_play_clip.png" className="w-10 h-10"/>
        </div>
  
        {/* Middle section: Search input & button */}
        <div className="flex items-center gap-0 justify-center">
          <input
            type="text"
            placeholder="Search here"
            className="border rounded-l-full p-2 w-3/4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm border-gray-500"
          />
          <button className="border rounded-r-full p-1.5 bg-gray-200 hover:bg-gray-300  border-gray-500 cursor-pointer w-20 "  >🔍</button>
        </div>
  
        {/* Right section: Create button, Notification, User icon */}
        <div className="flex items-center gap-1 justify-end">
          <button className=" text-black px-3 py-1 rounded-full border ">+ Create</button>
          <img className="w-10 h-10" alt="notification" src="https://www.citypng.com/public/uploads/preview/black-youtube-bell-notification-icon-701751695135877fkcswqnkez.png"/>
          <img className="w-10 h-10 object-cover" alt="user_logo" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"/>
        </div>
  
      </div>
    );
  }
  
  export default Header;
  