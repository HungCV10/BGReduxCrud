import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { editSanPhamAction } from '../actions/sanPhamAction';

const EditSanPhamScreen = ({route, navigation}) => {

    const sanPham = route.params;
    console.log("abc",sanPham);

    const [name, setName] = useState(sanPham.name);
    const [price, setPrice] = useState(sanPham.price);
    const [image, setImage] = useState(sanPham.image);

    const dispatch = useDispatch();

    //hàm sửa sản phẩm
    const handleEdit = ()=>{
        const objEditSP = {
            name: name, 
            price: price, 
            image: image
        }
        dispatch(editSanPhamAction(sanPham.id, objEditSP));
        Alert.alert("Sửa sản phẩm thành công.");
        navigation.goBack();
    }
  return (
    <View>
        <Text>Màn hình sửa sản phẩm</Text>
        <TextInput
            placeholder='Tên sản phẩm: '
            value={name}
            onChangeText={setName}
        ></TextInput>
                <TextInput
            placeholder='Giá sản phẩm: '
            value={price}
            onChangeText={setPrice}
        ></TextInput>
                <TextInput
            placeholder='Hình ảnh sản phẩm: '
            value={image}
            onChangeText={setImage}
        ></TextInput>

        <TouchableOpacity onPress={handleEdit}>
            <Text>Sửa</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EditSanPhamScreen