import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer"

const SideBar=()=>{
  const isMenuOpen = useSelector((store)=>store.menu.isOpen)

//   early return pattern
if(!isMenuOpen) return null

    return(
       <div className="px-3  shadow-2xl w-60 py-6 h-screen">
        <ul className="mx-3 items-center justify-center text-left leading-relaxed text-gray-700">
            <li>Home </li>
            <li>Shorts </li>
            <li>Subscription</li>
            <li>Youtube music</li>
            <li></li>
        </ul>
        <hr className="h-px my-6 bg-gray-300 border-0"/>
        <ul className="m-3 items-center text-gray-700 leading-relaxed ">
            <li className="font-bold  text-gray-700">You </li>
            <li>History </li>
            <li>Playlist</li>
            <li>Your videos</li>
            <li>Your course</li>
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