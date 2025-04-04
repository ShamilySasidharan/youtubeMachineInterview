import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:'videocard',
    initialState:"",
    reducers:{
        addVideos:(state,actions)=>{
            return actions.payload
        }
    }
})

export const {addVideos}=videoSlice.actions
export default videoSlice.reducer