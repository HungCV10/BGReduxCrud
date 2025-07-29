import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    listSanPham : [] // danh sách sản phẩm ban đầu
}

const sanPhamSlice = createSlice({
    name: "sanPham",
    initialState,
    reducers:{ // chứa các actions
        setSanPham(state, action){
            state.listSanPham = action.payload;
        }
    }
})

export const {setSanPham} = sanPhamSlice.actions;

export default sanPhamSlice.reducer;