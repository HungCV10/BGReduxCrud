import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listSanPham: [] // danh sách sản phẩm ban đầu
}

const sanPhamSlice = createSlice({
    name: "sanPham",
    initialState,
    reducers: { // chứa các actions
        setSanPham(state, action) {// hiển thị sản phẩm
            state.listSanPham = action.payload;
        },
        // thêm sản phẩm
        addSanPham(state, action) {
            state.listSanPham.push(action.payload);
        },
        // sửa sản phẩm
        editSanPham(state, action) {
            const { id, sanPham } = action.payload;
            state.listSanPham.forEach((sp, index) => {
                if (sp.id === id) {
                    state.listSanPham[index] = [...sp, ...sanPham];
                }
            })
        }, // xóa sản phẩm
        deleteSanPham(state, action) {
            state.listSanPham = state.listSanPham.filter((sp) => sp.id != action.payload)
        }
    }
})

export const { setSanPham, addSanPham, editSanPham, deleteSanPham } = sanPhamSlice.actions;

export default sanPhamSlice.reducer;