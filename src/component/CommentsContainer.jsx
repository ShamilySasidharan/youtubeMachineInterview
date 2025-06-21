import React from 'react';
import { FaUserCircle } from "react-icons/fa";

// structure of the basic comments ->   into nested comments
const commentsData = [
    {
        name:"sham",
        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
        replies:[]
    },
    {
        name:"sham",
        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
        replies:[
            {
                name:"sham",
                text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                replies:[
                    {
                        name:"sham",
                        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                        replies:[
                            {
                                name:"sham",
                                text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                                replies:[
                                    {
                                        name:"sham",
                                        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                                        replies:[
                                            {
                                                name:"sham",
                                                text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                                                replies:[]
                                            },
                                        ]
                                    },
                                ]
                            },
                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"sham",
        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
        replies:[
            {
                name:"sham",
                text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                replies:[]
            },
        ]
    },
 
    {
        name:"sham",
        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
        replies:[
            {
                name:"sham",
                text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                replies:[]
            },
        ]
    },
 
    {
        name:"sham",
        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
        replies:[
            {
                name:"sham",
                text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                replies:[]
            },
        ]
    },
 
    {
        name:"sham",
        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
        replies:[
            {
                name:"sham",
                text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                replies:[]
            },
        ]
    },
 
    {
        name:"sham",
        text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
        replies:[
            {
                name:"sham",
                text:"lLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi?",
                replies:[]
            },
        ]
    },
 
]


// building the comment component
const Comment = ({data})=>{
    const {name,text,replies}=data
    return (
        <div className='flex p-2 shadow-md gap-3 bg-white/10 rounded-md h-[14vh]'>
            <div>
            <FaUserCircle size={40} className="w-10 " />
            </div>
   
          <div className=' '>
            <p>{name}</p>
            <p>{text}</p>
          </div>
        </div>
    )
}


const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div className="p-2" key={index}>
        {/* Main Comment */}
        <Comment data={comment} />
  
        {/* If replies exist, render them recursively with left border */}
        {comment.replies.length > 0 && (
          <div className="border-l-2 border-l-gray-500 pl-4 ml-2 mt-2 bg-gray-50">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
  };
  


  const CommentsContainer = () => {
    return (
      <div className="w-full max-w-[1200px] mx-auto px-2 py-2 h-full overflow-y-auto ">
        <h1 className="text-lg md:text-xl font-bold mb-2">Comments</h1>
        <CommentList comments={commentsData} />
      </div>
    );
  };
  

export default CommentsContainer