import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import {styles} from './styles.js'

export class HeaderHome extends Component{
render(){
return(
    <View style = {styles.container}>
        <ImageBackground
        style={styles.headerImg}
        source={{uri: 'https://salt.tikicdn.com/ts/upload/39/64/67/59989fd7c18e8afc9a54826cd09f3483.png'}}
        resizeMode= 'stretch'>
        </ImageBackground>

        <View style = {styles.headerCartContainer}>
            <TouchableOpacity onPress={() => alert('You tapped a button')}>
                <View style={{paddingTop: 10}}>
                    <View style = {styles.tripleSpan}/>
                    <View style = {styles.tripleSpan}/>
                    <View style = {styles.tripleSpan}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('You tapped a button')}>
                <Image
                style={styles.tiki}
                source={{uri: 'https://salt.tikicdn.com/ts/upload/d4/ca/89/28d85ed27396c1beebad8a3fec18bfe4.png'}}
                resizeMode= 'contain'
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('You tapped a button')}>
                <Image
                style={styles.cart}
                source={{uri: 'https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png'}}
                resizeMode= 'contain'
                />
            </TouchableOpacity>
        </View>

        <View style = {styles.inputSearch}>
            <TouchableOpacity onPress={() => alert('You tapped a button')}>
                <Image
                style={styles.searchIcon}
                source={{uri: 'https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png'}}
                resizeMode= 'contain'
                />
            </TouchableOpacity>

            <View style = {styles.inputTextContainer}>
                <TextInput
                style={styles.inputText}
                placeholder= 'Bạn tìm gì hôm nay?'
                editable
                maxLength={40}
                />
            </View>
        </View>

        <View style = {styles.advertisement}>
            <TouchableOpacity onPress={() => alert('You tapped a button')}>
                <Image
                style={styles.advertiseImg}
                source={{uri: 'https://salt.tikicdn.com/cache/w750/ts/banner/9f/5f/e4/4a87416396f0b5942add30160ea44a13.jpg'}}
                resizeMode= 'contain'
                />
            </TouchableOpacity>
        </View>

        <View style = {styles.quickLinks}>

            <View style = {styles.link}>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <Image
                    style={styles.linkImg}
                    source={{uri: 'https://salt.tikicdn.com/ts/banner/88/24/ee/c9177fed6bb37b2d982898db70495005.png'}}
                    resizeMode= 'contain'
                    />
                </TouchableOpacity>

                <Text numberOfLines={1} style = {styles.quickLinksText}>Danh mục</Text>

            </View>

            <View style = {styles.link}>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <Image
                    style={styles.linkImg}
                    source={{uri: 'https://salt.tikicdn.com/ts/banner/c8/21/10/f76d1eac2b0e471f70087f11d201e3cc.gif'}}
                    resizeMode= 'contain'
                    />
                </TouchableOpacity>

                <Text numberOfLines={1} style = {styles.quickLinksText}>TikiLive</Text>

            </View>

            <View style = {styles.link}>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <Image
                    style={styles.linkImg}
                    source={{uri: 'https://salt.tikicdn.com/ts/banner/5d/eb/a7/25d5d58cac16cdee7ea0e407efb2d1b4.png'}}
                    resizeMode= 'contain'
                    />
                </TouchableOpacity>

                <Text numberOfLines={1} style = {styles.quickLinksText}>Tiki Deal</Text>

            </View>

            <View style = {styles.link}>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <Image
                    style={styles.linkImg}
                    source={{uri: 'https://salt.tikicdn.com/ts/banner/71/4a/c5/e6b9a5c033afeedfa140850c1647fa6b.png'}}
                    resizeMode= 'contain'
                    />
                </TouchableOpacity>

                <Text numberOfLines={1} style = {styles.quickLinksText}>Vé phim</Text>

            </View>

            <View style = {styles.link}>
                <TouchableOpacity onPress={() => alert('You tapped a button')}>
                    <Image
                    style={styles.linkImg}
                    source={{uri: 'https://salt.tikicdn.com/ts/banner/90/ac/4a/44d0bc2683f131cd45fc8d767b794d21.gif'}}
                    resizeMode= 'contain'
                    />
                </TouchableOpacity>

                <Text numberOfLines={1} style = {styles.quickLinksText}>TikiNOW</Text>

            </View>
        </View>

    </View>
)
}
}

