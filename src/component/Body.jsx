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
    <div className="flex bg-gray-200 h-screen overflow-hidden ">
    <SideBar />
  
    <div className="flex-1 h-full overflow-hidden ">
      <div className="h-full overflow-y-auto ">
        <Outlet />
      </div>
    </div>
 
  </div>
  
    )
}

export default Body