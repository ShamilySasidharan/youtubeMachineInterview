import React from "react";
const ButtonList = () => {

    const buttonList = ["All ", "Gaming", "BattleGround Moblie India", "Live", "Music", "Mixes", "Film Criticisms", "All ", "Gaming", "BattleGround Moblie India", "Live", "Music", "Mixes", "Film Criticisms","BattleGround Moblie India", "Live", "Music", "Mixes", "Film Criticisms", "All ", "Gaming", "BattleGround Moblie India", "Live", "Music", "Mixes", "Film Criticisms "]


    return (
       <div className="overflow-x-auto max-w-screen">
      <div className="flex gap-3 p-3 text-center items-center flex-nowrap w-96 scrollbar-hide">
        {buttonList.map((list, index) => (
          <button 
            key={index}
            className="border border-green-100 rounded-lg bg-gray-200 shadow text-sm px-3 py-1 whitespace-nowrap cursor-pointer"
          >
            {list}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList