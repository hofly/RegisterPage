import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView } from 'react-native'
import {styles} from './styles.js'

//skew have bug on android
export class FlashDeal extends Component{
render(){
return(
    <View style = {styles.container}>

        <View style = {styles.headerContainer}>
            <View style = {[styles.timeContainer,
            {transform: [{skewX: '45deg'}]}
            ]}>
                <Image
                style={styles.flashDealImg}
                source={{uri: 'https://salt.tikicdn.com/ts/upload/ae/cd/db/1cbd45e92f603081c11203a923f9afce.png'}}
                resizeMode= 'contain'
                />

                <View style = {styles.time}>
                <Text style = {styles.timeText}>00</Text>
                </View>
                <Text style = {styles.colon}>:</Text>
                <View style = {styles.time}>
                <Text style = {styles.timeText}>00</Text>
                </View>
                <Text style = {styles.colon}>:</Text>
                <View style = {styles.time}>
                <Text style = {styles.timeText}>00</Text>
                </View>

            </View>

            <View style = {styles.watchMoreContainer}>
                <Text style= {styles.watchMore} onPress={() => alert('You tapped a button')}>XEM THÊM</Text>
            </View>
        </View>

        <View style = {styles.flashDealContent}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style = {{marginTop:10}}>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <View style = {styles.flashDealCategories}>
                        <Text numberOfLines={1} style = {styles.categoryText}>Tất cả</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <View style = {styles.flashDealCategories}>
                        <Text numberOfLines={1} style = {styles.categoryText}>Nhà Sách Tiki</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <View style = {styles.flashDealCategories}>
                        <Text numberOfLines={1} style = {styles.categoryText}>Thời Trang</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <View style = {styles.flashDealCategories}>
                        <Text numberOfLines={1} style = {styles.categoryText}>Làm Đẹp - Sức Khỏe</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <View style = {styles.flashDealCategories}>
                        <Text numberOfLines={1} style = {styles.categoryText}>Đồ Chơi - Mẹ & Bé</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style = {{marginTop:5 , height: 155}}>
                <View style = {styles.itemContainer}>
                    <TouchableOpacity onPress={() => alert('You tapped a button')}>
                        <Image
                        style={styles.itemImg}
                        source={{uri: 'https://salt.tikicdn.com/cache/280x280/ts/product/16/a2/24/c268ca735a6f82d7175025cd00eebf27.jpg'}}
                        resizeMode= 'contain'
                        />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style = {styles.price}>289.200đ</Text>
                    <View style = {{width: 100, height: 15, borderRadius: 5, backgroundColor: 'pink'}}/>
                </View>
                <View style = {styles.itemContainer}>
                    <TouchableOpacity onPress={() => alert('You tapped a button')}>
                        <Image
                        style={styles.itemImg}
                        source={{uri: 'https://salt.tikicdn.com/cache/280x280/media/catalog/product/6/2/62-women-in-science.u5168.d20170708.t133208.173113.jpg'}}
                        resizeMode= 'contain'
                        />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style = {styles.price}>239.400đ</Text>
                    <View style = {{width: 100, height: 15, borderRadius: 5, backgroundColor: 'pink'}}/>
                </View>
                <View style = {styles.itemContainer}>
                    <TouchableOpacity onPress={() => alert('You tapped a button')}>
                        <Image
                        style={styles.itemImg}
                        source={{uri: 'https://salt.tikicdn.com/cache/280x280/ts/product/6c/1e/78/a93fc37dc0ca58e4961bbc9e87cc38a7.jpg'}}
                        resizeMode= 'contain'
                        />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style = {styles.price}>2.466.750đ</Text>
                    <View style = {{width: 100, height: 15, borderRadius: 5, backgroundColor: 'pink'}}/>
                </View>
                <View style = {styles.itemContainer}>
                    <TouchableOpacity onPress={() => alert('You tapped a button')}>
                        <Image
                        style={styles.itemImg}
                        source={{uri: 'https://salt.tikicdn.com/cache/280x280/ts/product/a5/23/95/7e9bb189e51e1cfddecea59bd494da21.jpg'}}
                        resizeMode= 'contain'
                        />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style = {styles.price}>662.400đ</Text>
                    <View style = {{width: 100, height: 15, borderRadius: 5, backgroundColor: 'pink'}}/>
                </View>
                <View style = {styles.itemContainer}>
                    <TouchableOpacity onPress={() => alert('You tapped a button')}>
                        <Image
                        style={styles.itemImg}
                        source={{uri: 'https://salt.tikicdn.com/cache/280x280/ts/product/36/70/3d/04cebbb0eebf1ba70a7de64258bd860b.jpg'}}
                        resizeMode= 'contain'
                        />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style = {styles.price}>257.400đ</Text>
                    <View style = {{width: 100, height: 15, borderRadius: 5, backgroundColor: 'pink'}}/>
                </View>

            </ScrollView>
        </View>

    </View>

)
}
}