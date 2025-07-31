import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addSanPhamAction } from '../actions/sanPhamAction';

const AddPhamScreen = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const dispatch = useDispatch();

    // hàm thêm sản phẩm
    const handleAdd = ()=>{
        const objNewSP = {
            name, price, image
        }
        dispatch(addSanPhamAction(objNewSP));
        Alert.alert("Thêm sản phẩm thành công.");
    }
  return (
    <View>
        <Text>Màn hình thêm sản phẩm</Text>
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

        <TouchableOpacity onPress={handleAdd}>
            <Text>Thêm</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AddPhamScreen