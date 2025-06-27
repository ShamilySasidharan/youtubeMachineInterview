import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addChatMsg } from './utils/chatSlice'
import { RandomNameGenerate, generateRandomMsg } from './utils/constants'

const LiveChat = () => {

    const dispatch = useDispatch()

    const chatMessages = useSelector((store) => store.chat.message)
    const [myChat, setMyChat] = useState("")
    //  console.log(chatMessages)

    // // fetch the live comments for api polls
    // useEffect(()=>{
    // const i = setInterval(() => {
    //     //API POLLING
    //      const messages = async()=>{
    //         try{
    //             const res = await fetch('https://dummyjson.com/comments')
    //             const data = await res.json()
    //             console.log("the fetched message:",data)
    //         }catch(err){
    //             console.error("Error in fetching",err)
    //         }

    //         console.log("api polling")
    //         // calling the function

    //     }  

    //     messages()
    // }, 2000);
    // // always clear the setInterval using the clearTimeout
    // return ()=>clearTimeout(i)
    // },[])


    useEffect(() => {
        const i = setInterval(() => {
            // api polling
            console.log("the api polling test ...")
            dispatch(addChatMsg({
                name: RandomNameGenerate(),
                message: generateRandomMsg(15)
            }))
        }, 1500)


        return () => clearTimeout(i)

    }, [])

    return (
        <>
            <div className='xl:ml-2 p-4 border border-black w-full 
        h-[600px] shadow-md rounded-lg overflow-y-scroll '>

                <div className='flex flex-col-reverse overflow-y-auto h-[550px]'>
                    {chatMessages.map((chat, index) => {
                        return <ChatMessage key={index} name={chat.name} message={chat.message} />
                    })}
                </div>
            </div>

            <form className='p-2 border  xl:mx-2 w-full rounded-md flex justify-between items-center gap-1.5'
                onSubmit={(e) => {
                    e.preventDefault()

                    dispatch(addChatMsg({
                        name: "shamily",
                        message: myChat
                    }))

                    setMyChat("")
                }


                }


            >


                <input type="text" placeholder='type your messaage...' className='border border-black p-2 w-full rounded-sm'
                    value={myChat} onChange={(e) => setMyChat(e.target.value)}
                />
                <button className='bg-green-400 rounded-md p-2' >Send</button>
            </form>
        </>

    )
}

export default LiveChat