import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Feed" component={FeedNavigator} />

			<Tab.Screen name="ListingEdit" component={ListingEditScreen} />

			<Tab.Screen name="AccountTab" component={AccountNavigator} />
		</Tab.Navigator>
	);
};
