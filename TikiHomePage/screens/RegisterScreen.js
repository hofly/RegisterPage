import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, FlatList, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native'

import {dimensionStyles} from '../resource/dimension.js'
import {colorStyles} from '../resource/color.js'
import {textStyles} from '../resource/textStyles.js'
import {string} from '../resource/string.js'

registerHeader = StyleSheet.compose(dimensionStyles.registerHeader, colorStyles.registerHeader)
registerButton = StyleSheet.compose(dimensionStyles.registerButton, colorStyles.registerButton)

export default class RegisterScreen extends Component{
	render(){
		return(
			<View style = {dimensionStyles.registerContainer}>
				<View style = {registerHeader}>
					<Text style = {textStyles.registerText}>{string.login}</Text>
					<Text style = {textStyles.registerText}>{string.register}</Text>
				</View>	
				<View style = {dimensionStyles.inputTextContainer}>
	                <TextInput
	                style = {textStyles.inputText}
	                placeholder= {string.userName}
	                editable
	                maxLength={40}
	                />
            	</View>
            	<View style = {dimensionStyles.inputTextContainer}>
	                <TextInput
	                style = {textStyles.inputText}
	                placeholder= {string.phoneNumber}
	                editable
	                maxLength={40}
	                />
            	</View>
            	<View style = {dimensionStyles.inputTextContainer}>
	                <TextInput
	                style = {textStyles.inputText}
	                placeholder= {string.email}
	                editable
	                maxLength={40}
	                />
            	</View>
            	<View style = {dimensionStyles.inputTextContainer}>
	                <TextInput
	                style = {textStyles.inputText}
	                placeholder= {string.password}
	                editable
	                maxLength={40}
	                />
            	</View>
            	<View style = {dimensionStyles.inputTextContainer}>
	                <TextInput
	                style = {textStyles.inputText}
	                placeholder= {string.dateOfBirth}
	                editable
	                maxLength={40}
	                />
            	</View>
            	<TouchableOpacity style = {registerButton}
	                onPress={() => alert('You tapped a button')}>
	                <Text style={textStyles.registerText}>{string.register}</Text>       
            	</TouchableOpacity>
            </View>
		)
	}

}