import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer"
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { Link } from "react-router";

const SideBar=()=>{
  const isMenuOpen = useSelector((store)=>store.menu.isOpen)

//   early return pattern, If the menu is NOT open, 
// render nothing of sidemenu otherwise render the sidemenu in UI.
if(!isMenuOpen) return null

    return(
       <div className="px-3  shadow-2xl w-60 py-6 h-screen ">
        <ul className="mx-3 items-center justify-center text-left leading-relaxed text-gray-700 ">
            <div className="flex gap-2 mb-3 items-center">
            <IoMdHome  size={20}/>
            <Link to="/"><li > Home </li></Link> 
            </div>
            <div className="flex gap-2 mb-3 items-center ">
            <SiYoutubeshorts  size={20}/>
            <li>Shorts </li>
            </div>
            <div className="flex gap-2 mb-3 items-center">
            <MdSubscriptions size={20}/>
            <li>Subscription</li>
            </div>
            <div className="flex gap-2 items-center">
            <SiYoutubemusic size={20}/>
            <li>Youtube music</li>
            </div>

    
           
         
        
            <li></li>
        </ul>
        <hr className="h-px my-6 bg-gray-300 border-0"/>
        <ul className="m-3 items-center text-gray-700 leading-relaxed ">
        <li className="font-bold  text-gray-700 text-lg mb-3">You </li>
           
            <div className="flex gap-2 mb-3  items-center"> 
            <FaHistory size={18}/>
                <li>History </li></div>
            <div className="flex gap-2 mb-3 items-center"> 
            <MdOutlinePlaylistPlay size={20}/>
                <li>Playlist</li></div>
            <div className="flex gap-2 mb-3 items-center">
            <MdOutlineVideoLibrary size={20}/>
                 <li>Your videos</li></div>
            <div className="flex gap-2 mb-3 items-center"> 
            <RiGraduationCapFill size={20}/><li>Your course</li></div>

        </ul>

        <hr className="h-px my-6 bg-gray-300 border-0"/>
        <ul className="m-3 items-center text-gray-700 leading-relaxed "> 
            <li className="font-bold  text-gray-700">Subscription </li>
            <li>History </li>
            <li>Playlist</li>
            <li>Your videos</li>
            <li>Your course</li>
        </ul>
        <hr className="h-px my-6 bg-gray-300 border-0"/>
       <Footer/>
       </div>
       
    )
}

export default SideBar