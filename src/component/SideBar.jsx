import React from "react";
import { useSelector } from "react-redux";

const SideBar=()=>{
  const isMenuOpen = useSelector((store)=>store.menu.isOpen)

//   early return pattern
if(!isMenuOpen) return null

    return(
       <div className="px-3  shadow-2xl w-1/5 py-6 ">
        <ul className="mx-3 items-center justify-center text-left">
            <li>Home </li>
            <li>Shorts </li>
            <li>Subscription</li>
            <li>Youtube music</li>
            <li></li>
        </ul>
        <hr className="h-px my-6 bg-gray-300 border-0"/>
        <ul className="m-3 ">
            <li className="text-bold text-lg">You </li>
            <li>History </li>
            <li>Playlist</li>
            <li>Your videos</li>
            <li>Your course</li>
        </ul>

        <hr className="h-px my-6 bg-gray-300 border-0"/>
        <ul className="m-3 "> 
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