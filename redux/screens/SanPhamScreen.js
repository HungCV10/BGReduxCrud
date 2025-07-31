import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListSanPham } from '../actions/sanPhamAction';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import SanPhamItem from "../screens/SanPhamItem"
import { useFocusEffect } from "@react-navigation/native";
const SanPhamScreen = ({navigation}) => {
    const lstSanPham = useSelector((state)=>state.sanPham.listSanPham);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getListSanPham());
    },[dispatch]);
 // load lại dữ liệu
    useFocusEffect(
        React.useCallback(() => {
            dispatch(getListSanPham());
        }, [dispatch])
    );

  return (
    <View>
        <Text>Danh sách sản phẩm</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("AddSanPham")}>
          <Text>Thêm sản phẩm</Text>
        </TouchableOpacity>
        <FlatList
            data={lstSanPham}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><SanPhamItem sanPham={item}></SanPhamItem>}
        ></FlatList>
    </View>
  )
}

export default SanPhamScreen