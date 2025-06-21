import { createSlice } from "@reduxjs/toolkit";

const searchSlice =  createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResultsSearch:(state,action)=>{
          Object.assign(state, action.payload);
        }
}


})

export const {cacheResultsSearch} =  searchSlice.actions
export default searchSlice.reducer