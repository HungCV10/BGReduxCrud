import React from 'react'
import { View, Image, Text } from 'react-native'

const SanPhamItem = ({sanPham}) => {
  return (
    <View>
        <Image source = {{uri: sanPham.image}} style={{width: 100, height: 100}}></Image>
        <Text>Tên sản phẩm: {sanPham.name}</Text>
        <Text>Giá sản phẩm: {sanPham.price}</Text>
        </View>
  )
}

export default SanPhamItem