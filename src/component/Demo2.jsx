import React, { useRef, useState } from 'react'

const Demo2 = () => {

// differnce of normal,state,ref variable in react 
// normal
let JS = 0 


// state 
const [state,setState] = useState(0)
// ref
const ref =  useRef(0)

  return (
    <div className='w-70 px border border-gray-400 p-2 h-70 rounded-2xl my-5 text-center mx-2 '  >Demo2
    {/* normal js variable */}
    <div className='flex justify-between items-center mx-3 my-2'>
        <button className='border border-black p-1 rounded-lg ' onClick={()=>{JS = JS + 1;
    console.log("JS = ",JS)}}> + JS count</button>
        <p>JS={JS}</p>
    </div>
    {/* state variable */}
    <div className='flex justify-between items-center mx-3 my-2'>
        <button className='border border-black p-1 rounded-lg ' onClick={()=>{
            setState(state+1);
            console.log("Rendering ....")
            console.log("state=",state)
        }}> + State variable count</button>
        <p>STATE={state}</p>
    </div>
    {/* ref variable */}

      <div className='flex justify-between items-center mx-3 my-2'>
        <button className='border border-black p-1 rounded-lg ' onClick={()=>{ref.current=ref.current+1;
            console.log("ref:",ref.current)
        }}> + JS count</button>
        <p>Ref={ref.current}</p>
    </div>
    
    </div>
  )
}

export default Demo2