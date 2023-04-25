import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingButton from "./ListingButton";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Feed"
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name="ListingEdit"
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<ListingButton onPress={() => navigation.navigate("ListingEdit")} />
					),
				})}
			/>

			<Tab.Screen
				name="Account"
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
