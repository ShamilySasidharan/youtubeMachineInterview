import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='w-4/5 items-center justify-center p-5 cursor-pointer'>
    <ButtonList/>
    <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer 
