import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-1 bg-slate-100 rounded-md shadow-sm mb-2'>
       <FaUserCircle size={40} className="w-5 flex-shrink-0 "  />
       <h1 className='text-lg p-2 font-extrabold-'>{name}</h1>
       <p className=''>{message}</p>
    </div>
  )
}

export default ChatMessage