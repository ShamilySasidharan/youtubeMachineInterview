import React, { useState } from 'react'
import { findNthPrime } from "./utils/constants"
import { Outlet } from 'react-router'

const Demo = () => {
    // for input field
    const [num, setNum] = useState(0)
    console.log(num)
    // for toggle state
    const [isToggle, setIsToggle] = useState(true)

    // loading the function from constants file and using Number() to convert the valaue from the input which return as the "5"
    const nthPrime = findNthPrime(Number(num));

    return (

        <div className='flex'>
   <div 
            className={`border border-gray-600 px-2 py-3 m-4  shadow rounded-2xl  items-center justify-between w-96 + ${isToggle ? 'bg-black text-white border-white' : 'bg-white- text-black border-black'}`}>

            <div className='flex justify-between py-1'>
                <input type="number" placeholder="Type here"
                 className={`input border rounded-lg p-1 ` 
                 + (isToggle ? 'border-white text-white' : 'border-black text-black')} 
                 value={num} onChange={(e) => setNum(e.target.value)} />
                <button className='border border-gray-800 rounded-xl p-1 text-sm' onClick={() => setIsToggle(!isToggle)} >Toggle</button>
            </div>
            <h1>nth prime: {num > 0 ? nthPrime : 'Enter a valid number'}</h1>
            
          
           
            
            
        </div>
        <div> <Outlet /></div>
        </div>
     
    )
}

export default Demo