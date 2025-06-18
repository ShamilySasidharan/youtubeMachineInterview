import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/menuSlice'
import { useSearchParams } from 'react-router'

const WatchVideo = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  // const clip = searchParams.get("v")
  // console.log(clip)

  useEffect(()=>{
    dispatch(closeMenu())
  })
  return (
    <div className='px-2 my-3 bg-amber-900 '>
      <div className='rounded-2xl bg-amber-500'>
      <iframe width="1000" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    
    </div>
  )
}

export default WatchVideo