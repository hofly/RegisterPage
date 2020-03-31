import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, FlatList } from 'react-native'
import {styles} from './styles.js'

const DATA=[
    {
        name: 'Đồ Chơi - Mẹ & Bé',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/66/15/4f/6282e8c6655cb87cb226e3b701bb9137.png',
        key: 'product1'
    },
    {
        name: 'Làm Đẹp - Sức Khỏe',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/85/13/02/d8e5cd75fd88862d0f5f647e054b2205.png',
        key: 'product2'
    },
    {
        name: 'Thời Trang',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/dd/51/92/e6bc22b5ec0d6d965a93f056b7776493.png',
        key: 'product3'
    },
    {
        name: 'Nhà Cửa - Đời Sống',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/12/29/a2/7409ff03cff5c0d3d695cb19f8f15896.png',
        key: 'product4'
    },
    {
        name: 'Bách Hóa Online',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/bd/9f/56/830a6a075c7cd78737a1d0c58e11926d.png',
        key: 'product5'
    },
    {
        name: 'Voucher - Dịch Vụ',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/18/65/3a/d723f46fc7a5908b8272492b4b0ac3a3.jpg',
        key: 'product6'
    },
    {
        name: 'Nhà Sách Tiki',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/88/a3/23/4025f0ccef53189c957bd6c2fc79cb58.png',
        key: 'product7'
    },
    {
        name: 'Thể Thao - Dã Ngoại',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/90/78/11/b8a67fe010361551e515fdcca7709f69.png',
        key: 'product8'
    },
    {
        name: 'Điện Thoại - Máy Tính Bảng',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/93/27/e3/192b0ebe1d4658c51f9931bda62489b2.png',
        key: 'product9'
    },
    {
        name: 'Điện Gia Dụng',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/b3/2b/72/8e7b4b703653050ffc79efc8ee017bd0.png',
        key: 'product10'
    },
    {
        name: 'Laptop - Máy Vi Tính',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/94/6a/42/3b262c87f2fd104b7cb50f38aef43e18.png',
        key: 'product11'
    },
    {
        name: 'Hàng Quốc Tế',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/9d/ba/6f/0c85993f0436f73cdfbababda1dc5595.png',
        key: 'product12'
    },
    {
        name: 'Thiết Bị Số - Phụ Kiện Số',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/85/b8/4e/bda4f4c039daa5bb8e6ecdccd7875b08.png',
        key: 'product13'
    },
    {
        name: 'Ô Tô - Xe Máy - Xe Đạp',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/be/93/fc/7cac338181abda436dd958f76f734825.png',
        key: 'product14'
    },
    {
        name: 'Điện Tử - Điện Lạnh',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/70/52/b1/31587960ac1eb915a86a5a8202da583a.png',
        key: 'product15'
    },
    {
        name: 'Máy Ảnh - Máy Quay Phim',
        img: 'https://salt.tikicdn.com/cache/w60/ts/category/c3/a4/87/4584c6298920124cb7da51de157ddac9.png',
        key: 'product16'
    },

]

function Product({name, img}){
    return(
        <View style = {styles.productContainer}>
            <TouchableOpacity onPress={() => alert('You tapped a button')}>
                <Image
                style={styles.productImg}
                source={{uri: img}}
                resizeMode= 'contain'
                />
            </TouchableOpacity>
            <Text numberOfLines={2} style = {styles.productName}>{name}</Text>
        </View>
    )

}


export class ProductList extends Component{
render(){
return(
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Text numberOfLines={1} style = {{fontSize:20, marginLeft: 10}}>Danh mục sản phẩm</Text>
            <Text numberOfLines={1} style = {{fontSize:16, color: 'blue', marginRight: 10}}
            onPress={() => alert('You tapped a button')}>XEM THÊM</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
            numColumns={DATA.length / 2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <Product name={item.name} img={item.img} />}
            />
        </ScrollView>
    </View>

)
}
}