
import {configureStore} from '@reduxjs/toolkit'
import menuSlice from "./menuSlice"
import videoSlice from "./videoSlice"
const appStore = configureStore({
reducer:{
menu:menuSlice,
videos:videoSlice
}
})

export default appStore