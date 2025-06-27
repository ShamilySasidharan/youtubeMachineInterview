import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVECHAT } from "./constants";


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addChatMsg:(state,action)=>{
            state.message.splice(OFFSET_LIVECHAT,1)
            state.message.push(action.payload)
        }
    }

})

export const {addChatMsg}=chatSlice.actions
export default chatSlice.reducer