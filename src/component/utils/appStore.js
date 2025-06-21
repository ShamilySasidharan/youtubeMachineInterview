
import {configureStore} from '@reduxjs/toolkit'
import menuSlice from "./menuSlice"
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice"
const appStore = configureStore({
reducer:{
menu:menuSlice,
videos:videoSlice,
cachesearch:searchSlice
}
})

export default appStore