import React from "react";

import SideBar from "./SideBar";
import { Outlet } from "react-router";

const Body = ()=>{
    return (
        // <div className="flex  bg-gray-200 justify-between mx-auto ">
        //     <SideBar />
        //     {/* <MainContainer /> */}
        //     <Outlet/>
        // </div>
    //     <div className="flex bg-gray-200 max-h-screen scroll-auto">
    //     <SideBar />
    //     <Outlet />
      
    // </div>
    <div className="flex bg-gray-200 h-screen overflow-hidden fixed w-full">
    <SideBar />
  
    <div className="flex-1  h-full min-h-screen overflow-y-auto  ">
      <div className="h-full ">
        <Outlet />
      </div>
    </div>
 
  </div>
  
    )
}

export default Body