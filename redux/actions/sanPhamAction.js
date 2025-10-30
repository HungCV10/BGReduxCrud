import axios from "axios";
import { addSanPham, setSanPham, editSanPham, deleteSanPham } from "../reducers/sanPhamReducer";

const apiUrl = "http://10.82.1.61:3000/sanpham";

// hàm hiển thị sản phẩm
export const getListSanPham = () => async (dispatch) => {
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        dispatch(setSanPham(response.data));
    } catch (error) {
        console.log("lỗi: ", error);
    }
}

// thêm sản phẩm
export const addSanPhamAction = (sanPham) =>async(dispatch)=>{
    try {
        const response = await axios.post(apiUrl,sanPham);
        dispatch(addSanPham(response.data));       
    } catch (error) {
        console.log("lỗi thêm: ", error);
    }
}

// edit sản phẩm
export const editSanPhamAction = (id, sanPham) =>async(dispatch)=>{
    try {
        await axios.put(`${apiUrl}/${id}`,sanPham);
        dispatch(editSanPham(id, sanPham));       
    } catch (error) {
        console.log("lỗi sửa: ", error);
    }
}

// xóa sản phẩm
export const deleteSanPhamAction = (id) =>async(dispatch)=>{
    try {
        await axios.delete(`${apiUrl}/${id}`);
        dispatch(deleteSanPham(id));       
    } catch (error) {
        console.log("lỗi xóa: ", error);
    }
}