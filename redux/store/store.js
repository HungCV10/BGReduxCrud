import { configureStore } from "@reduxjs/toolkit";
import sanPhamReducer from "../reducers/sanPhamReducer";


const store = configureStore({
    reducer:{
        sanPham: sanPhamReducer
    }
})

export default store;