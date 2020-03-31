import 'react-native-gesture-handler'
import { createStackNavigator, createAppContainer } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, FlatList, ScrollView, Dimensions } from 'react-native'

import {styles} from './styleFolder/Styles.js'
import {HeaderHome} from './components/HeaderHome/HeaderHome.js'
import {FlashDeal} from './components/FlashDeal/FlashDeal.js'
import {ProductList} from './components/ProductList/ProductList.js'
import RegisterScreen from './screens/RegisterScreen.js'

/*
const h=Dimensions.get('window').height
const w=Dimensions.get('window').width
console.log(h, w)
*/
const Stack = createStackNavigator()

export default class App extends Component {
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Register'>
                    
                    <Stack.Screen name='Register' component={RegisterScreen} />
            		<Stack.Screen name='Home' component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
}
}

class HomeScreen extends Component{
render(){
return(
    <View style = {styles.container} >
        <ScrollView>
            <HeaderHome/>
            <FlashDeal/>
            <ProductList/>


        </ScrollView>

    </View>
)
}
}

/*
<View style = {{height: 100, backgroundColor: 'blue'}} />
<View style = {{height: 100, backgroundColor: 'green'}} />
<View style = {{height: 100, backgroundColor: 'blue'}} />
<View style = {{height: 100, backgroundColor: 'green'}} />
<View style = {{height: 100, backgroundColor: 'blue'}} />
<View style = {{height: 100, backgroundColor: 'green'}} />
<View style = {{height: 100, backgroundColor: 'blue'}} />
<View style = {{height: 100, backgroundColor: 'green'}} />
<View style = {{height: 100, backgroundColor: 'blue'}} />
<View style = {{height: 100, backgroundColor: 'green'}} />
<View style = {{height: 100, backgroundColor: 'blue'}} />
<View style = {{height: 100, backgroundColor: 'green'}} />
<View style = {{height: 100, backgroundColor: 'blue'}} />
<View style = {{height: 100, backgroundColor: 'green'}} />
*/