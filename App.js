import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button
				title="Go to detail"
				onPress={() => navigation.navigate('DetailScreen')}
			/>
	  	</View>
	)
}

HomeScreen.navigationOptions = {
	drawerIcon: ({ tintColor }) => {
		return <Ionicons name='ios-information-circle' size={25} color={tintColor} />
	},
	headerTitle: 'Home',
	headerStyle: {
		backgroundColor: '#eee'
	}
}

const DetailScreen = ({ navigation }) => {

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
		title: navigation.getParam('title', 'Menu 2'),
		headerStyle: {
			backgroundColor: '#e76f51'
		},
		headerTintColor: '#fff'
	}
}

const AppNavigator = createSwitchNavigator({
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
	  marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
