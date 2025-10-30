import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, Button, Alert } from 'react-native'
import { deleteSanPhamAction } from '../actions/sanPhamAction'
import { useDispatch } from 'react-redux'

const SanPhamItem = ({sanPham}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  // hàm sửa
  const btnEdit = ()=>{
    navigation.navigate("editSanPham", sanPham);
  }

  // hàm xóa
  const btnDelete = ()=>{
      Alert.alert(
        "xác nhận", "Bạn có muốn xóa không?",
        [
          {text: "Hủy"},
          {text: "xóa", onPress: ()=>dispatch(deleteSanPhamAction(sanPham.id))}
        ]
      )
  }
  return (
    <View>
        <Image source = {{uri: sanPham.image}} style={{width: 100, height: 100}}></Image>
        <Text>Tên sản phẩm: {sanPham.name}</Text>
        <Text>Giá sản phẩm: {sanPham.price}</Text>
        <Button title='edit' onPress={btnEdit}></Button>
        <Button title='delte' onPress={btnDelete}></Button>
        </View>
  )
}

export default SanPhamItem