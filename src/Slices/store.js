import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from "./Slice/cartSlice"

export const store = configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
})