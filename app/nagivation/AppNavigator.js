import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Feed" component={FeedNavigator} />

			<Tab.Screen name="ListingEdit" component={ListingEditScreen} />

			<Tab.Screen name="Account" component={AccountScreen} />
		</Tab.Navigator>
	);
};