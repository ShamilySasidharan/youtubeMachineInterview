import React from "react";
const ButtonList = () => {

    const buttonList = ["All ", "Gaming", "BattleGround Moblie India", "Live", "Music", "Mixes", "Film Criticisms", "All ", "Gaming", "BattleGround Moblie India", "Live", "Music", "Mixes", "Film Criticisms"]


    return (
        <div className="gap-4 p-3 text-center items-center justify-center flex mx-3 overflow-scroll">
            {buttonList.map((list,index) => (
                <div className="border border-green-100 rounded-lg  bg-gray-200 shadow">
                    <button key={index} className="text-sm p-1 gap-3 my-2 mx-0.5">{list}</button>
                </div>

            ))}

        </div>
    )
}

export default ButtonList