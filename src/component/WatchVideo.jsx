import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from './utils/menuSlice'
import { useSearchParams } from 'react-router'
import CommentsContainer from './CommentsContainer'

const WatchVideo = () => {
  
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  // const clip = searchParams.get("v")
  // console.log(clip)

  useEffect(()=>{
    dispatch(closeMenu())
  })
  return (
    <div className='flex flex-col p-1 min-h-screen   overflow-auto'>
      {/* watch video  */}
      <div className='rounded-md bg-black xl:w-[75%]  '>
      <iframe width="" height="" className='w-[500px] h-96 my-2 mx-auto xl:w-full xl:min-h-[70vh] rounded-md md:min-w-[798px]' src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    
     {/* comment section - nested comments */}
     <div className='p-5  xl:w-[75%] rounded-md   max-h-[500px] overflow-y-auto bg-white' >
     <CommentsContainer />
     </div>
    
    </div>
  )
}

export default WatchVideo