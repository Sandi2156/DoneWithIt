import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

export default AccountNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Account" component={AccountScreen} />

			<Stack.Screen name="Messages" component={MessagesScreen} />
		</Stack.Navigator>
	);
};
