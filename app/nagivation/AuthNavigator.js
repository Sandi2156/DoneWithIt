import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import WelcomScreen from "../screens/WelcomScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

export default AuthNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={WelcomScreen}
				options={{ headerShown: false }}
			/>

			<Stack.Screen name="Login" component={LoginScreen} />

			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	);
};
