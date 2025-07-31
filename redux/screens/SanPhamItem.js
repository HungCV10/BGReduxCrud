import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Image, Text, Button } from 'react-native'

const SanPhamItem = ({sanPham}) => {
  const navigation = useNavigation();
  const btnEdit = ()=>{
    navigation.navigate("editSanPham", sanPham);
  }
  return (
    <View>
        <Image source = {{uri: sanPham.image}} style={{width: 100, height: 100}}></Image>
        <Text>Tên sản phẩm: {sanPham.name}</Text>
        <Text>Giá sản phẩm: {sanPham.price}</Text>
        <Button title='edit' onPress={btnEdit}></Button>
        </View>
  )
}

export default SanPhamItem