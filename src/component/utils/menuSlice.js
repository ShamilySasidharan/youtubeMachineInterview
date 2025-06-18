import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:'SideMenu',
    initialState:{
        isOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isOpen = !state.isOpen
        },
        closeMenu:(state,action)=>{
            state.isOpen = false
        }
    }

})
export const{toggleMenu,closeMenu}=menuSlice.actions
export default menuSlice.reducer