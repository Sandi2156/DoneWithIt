import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingButton from "./ListingButton";

import routes from "./routes";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name={routes.FEED}
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name={routes.LISTING_EDIT}
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<ListingButton
							onPress={() => navigation.navigate(routes.LISTING_EDIT)}
						/>
					),
				})}
			/>

			<Tab.Screen
				name={routes.ACCOUNT_TAB}
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					),
					tabBarLabel: "Account",
				}}
			/>
		</Tab.Navigator>
	);
};
