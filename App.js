import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button
				title="Go to detail"
				// As second argument, recieves an object, the data
				onPress={() => navigation.navigate('Detail', { title: 'Dynamic title', user_id: 2 })}
			/>
	  	</View>
	)
}

HomeScreen.navigationOptions = {
	title: 'First page'
}

const DetailScreen = ({ navigation }) => {

	// And in the other screen, with the function getParam() we fetch the data, 
	// and optionally asigning a default value as second parameter
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
		title: navigation.getParam('title', 'Loading...')
	}
}

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
	Detail: {
		screen: DetailScreen
	}
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
