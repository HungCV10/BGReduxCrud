import axios from "axios";
import { setSanPham } from "../reducers/sanPhamReducer";

const apiUrl = "http://10.82.1.159:3000/sanpham";

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