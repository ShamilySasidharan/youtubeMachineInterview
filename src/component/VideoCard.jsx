import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
   
    // DESTRUCTURING OF THE DATA BEST WAY
    const {snippet,statistics}= info
    const{commentCount,viewCount} = statistics
    const {thumbnails, channelTitle, publishedAt,title } = snippet

      return (
        <div className="video-card m-4 shadow w-80 py-2 rounded-lg">
          <img src={thumbnails.medium.url} alt="Thumbnail" className='border rounded-xl' />
          <h2 className='font-bold mx-2 p-1  text-sm'>{title}</h2>
          <h3 className='text-sm mx-2 p-1'>{channelTitle}</h3>
          <span className='flex items-center text-center'>
          <p className='text-sm mx-3'>{viewCount} views  </p>
          •
          <p className='text-sm '>{new Date(publishedAt).toDateString()}</p>
          </span>
          
        </div>
     
      );
    };

export default VideoCard