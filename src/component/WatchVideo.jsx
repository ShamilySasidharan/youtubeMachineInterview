import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from './utils/menuSlice'
import { useSearchParams } from 'react-router'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchVideo = () => {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  // const clip = searchParams.get("v")
  // console.log(clip)

  useEffect(() => {
    dispatch(closeMenu())
  })
  return (
    <div className="flex flex-col min-h-screen p-4 bg-white">
      {/* Container */}
      <div className="w-full max-w-7xl mx-auto">
  
        {/* Video + Live Chat */}
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Video Section */}
          <div className="w-full xl:w-[75%] bg-black rounded-md">
            <iframe
              className="w-full h-[250px] sm:h-[400px] xl:h-[70vh] rounded-md"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
  
          {/* Live Chat */}
          <div className="w-full xl:w-[25%]">
            <LiveChat />
          </div>
        </div>
  
        {/* Comments */}
        <div className="mt-4 bg-gray-100 rounded-md overflow-auto">
          <CommentsContainer />
        </div>
  
      </div>
    </div>
  );
  
}

export default WatchVideo