import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
   
    // DESTRUCTURING OF THE DATA BEST WAY
    const {snippet,statistics}= info
    const{commentCount,viewCount} = statistics
    const {thumbnails, channelTitle, publishedAt,title } = snippet

      return (
        <div className='flex cursor-pointer'>
        <div className="video-card mx-4 my-1 shadow-xl w-60 py-2 rounded-2xl xl:min-w-80 ">
          <img src={thumbnails.medium.url} alt="Thumbnail" className=' rounded-xl p-1' />
          <ul>
            <li  className='font-bold mx-2 p-1  text-sm'>
            {title}
            </li>
            <li className='text-sm mx-2 p-1'>{channelTitle}</li>
            <span className='flex items-center'>
            <li className='text-sm mx-3'>{viewCount} views</li>
            • 
            <li className='text-sm mx-1'>{new Date(publishedAt).toDateString()}</li>
            </span>
            
          </ul>
        </div>
        </div>
     
      );
    };

  
export default VideoCard

// export const  HOCAd = ({info})=>{
// return (
//   <div className='text-bold border border-amber-500'>
//     <VideoCard info={info}  />
//   </div>
// )
// }


export const HOCAd  =  (WrappedComponent)=>{
  return (props)=>(
    <div className='border border-amber-500'>
      <WrappedComponent {...props}/>
    </div>
  )
}
