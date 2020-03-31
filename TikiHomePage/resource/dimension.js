import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, FlatList, ScrollView, Dimensions } from 'react-native'

const dimensionStyles = StyleSheet.create({

	alignCenterVertical:{
		flexDirection: 'column',
		alignItems: 'center',


	},

	registerContainer:{
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		

	},

	inputTextContainer:{
		marginTop: 20,
		width: 350,
		height: 50,
		borderBottomWidth: 1,


	},

	registerHeader:{
		height: 40,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		width: Dimensions.get('window').width,
	},

	registerButton:{
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		width: 350,
		height: 50,

	},



})

export {dimensionStyles, }