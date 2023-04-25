import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

import routes from "./routes";

const Stack = createStackNavigator();

export default AccountNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />

			<Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
		</Stack.Navigator>
	);
};
