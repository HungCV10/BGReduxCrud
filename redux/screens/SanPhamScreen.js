import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListSanPham } from '../actions/sanPhamAction';
import { View, Text, FlatList } from 'react-native';
import SanPhamItem from "../screens/SanPhamItem"

const SanPhamScreen = () => {
    const lstSanPham = useSelector((state)=>state.sanPham.listSanPham);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getListSanPham());
    },[dispatch]);

  return (
    <View>
        <Text>Danh sách sản phẩm</Text>
        <FlatList
            data={lstSanPham}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><SanPhamItem sanPham={item}></SanPhamItem>}
        ></FlatList>
    </View>
  )
}

export default SanPhamScreen