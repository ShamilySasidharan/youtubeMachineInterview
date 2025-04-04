import React from "react";
import { useSelector } from "react-redux";

const SideBar=()=>{
  const isMenuOpen = useSelector((store)=>store.menu.isOpen)

//   early return pattern
if(!isMenuOpen) return null

    return(
       <div className="py-2 px-3  shadow-2xl ">
        <ul className="mx-3">
            <li>Home </li>
            <li>Shorts </li>
            <li>Subscription</li>
            <li>Youtube music</li>
            <li></li>
        </ul>
        <ul className="m-3">
            <li className="text-bold text-lg">You </li>
            <li>History </li>
            <li>Playlist</li>
            <li>Your videos</li>
            <li>Your course</li>
        </ul>
        <ul className="m-3"> 
            <li className="text-bold text-lg">Subscription </li>
            <li>History </li>
            <li>Playlist</li>
            <li>Your videos</li>
            <li>Your course</li>
        </ul>
       
       
       </div>
       
    )
}

export default SideBar