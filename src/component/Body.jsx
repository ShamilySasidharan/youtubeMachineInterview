import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
const Body = ()=>{
    return (
        <div className="flex  bg-gray-200 justify-between mx-auto">
            <SideBar />
            <MainContainer />
        </div>
    )
}

export default Body