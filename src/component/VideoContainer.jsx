import React, { useEffect } from "react";
import { YOUTUBE_API } from "./utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "./utils/videoSlice";
import { Link } from "react-router";
import { HOCAd } from "./VideoCard";
const VideoContainer = () => {
    const VideoCardWithAd = HOCAd(VideoCard)
    const dispatch = useDispatch()

    // 4. subscribing to the store to get  the data from the store
    const videosFromStore = useSelector((store) => store?.videos)
    

    //  1. fetch the data using the fetch/axios
    const getVideos = async () => {
        try {
            const res = await fetch(YOUTUBE_API);
            if (!res.ok) {
                throw new Error(`HTTP Error! Status: ${res.status}`);
            }
            const data = await res.json();
            // 2. check if we got the data 
            // console.log("The fetched data is:", data.items);

            // 3.dispatch an action to store the data in redux
            dispatch(addVideos(data.items))

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        getVideos()
    }, [])

    if (!videosFromStore) return <h1>Loading</h1>

    return (
       
        <div className="h-full overflow-y-auto px-4 justify-center flex flex-wrap  ">
            {/* ADDING THE CONDITIONAL RENDERING TO SOLVE THE ERROR FOR UNDFINED DATA */}

            {/* HOC FOR LEARNING */}

            {videosFromStore[0]&& <VideoCardWithAd info={videosFromStore[0]} /> }  
 
            {videosFromStore.map((video, id) => {
                // This wraps each VideoCard in a React Router Link, which turns the entire video card into a clickable link.
                return <Link to={"/watch?v=" + video.id} key={id} ><VideoCard info={video} className=""/></Link>
            }

            )}
            {/* {videosFromStore[0]? <VideoCard  info={videosFromStore[0]}/> : 
            <p className="text-center justify-center flex items-center">Loading</p>} */}
        </div>
    )
}

export default VideoContainer