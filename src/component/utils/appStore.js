
import {configureStore} from '@reduxjs/toolkit'
import menuSlice from "./menuSlice"
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const appStore = configureStore({
reducer:{
menu:menuSlice,
videos:videoSlice,
cachesearch:searchSlice,
chat:chatSlice
}
})

export default appStore