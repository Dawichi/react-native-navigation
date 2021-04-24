import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button
				title="Go to detail"
				onPress={() => navigation.openDrawer()}
			/>
	  	</View>
	)
}

HomeScreen.navigationOptions = {
	title: 'Home page'
}

const DetailScreen = ({ navigation }) => {
	
	const user = navigation.getParam('user_name', 'defaultvalue')

	return (
		<View style={styles.container}>
			<Text>Detail</Text>
			<Button
				title="Back to home"
				onPress={() => navigation.goBack()}
			/>
	  	</View>
	)
}

DetailScreen.navigationOptions = ({ navigation }) => {
	return {
		title: navigation.getParam('title', 'Loading...'),
		headerStyle: {
			backgroundColor: '#e76f51'
		},
		headerTintColor: '#fff'
	}
}

const AppNavigator = createDrawerNavigator({
	Home: {
		screen: HomeScreen
	},
	Detail: {
		screen: DetailScreen
	}
}, {
	initialRouteName: 'Home',
})

const RootStack = createStackNavigator({
	Main: AppNavigator,
	Modal: () => <Text>lalala</Text>
}, {
	mode: 'modal',
	headerMode: 'none'
})

export default createAppContainer(RootStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
