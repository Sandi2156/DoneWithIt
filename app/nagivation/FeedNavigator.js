import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

export default FeedNavigator = () => {
	return (
		<Stack.Navigator
			mode="modal"
			screenOptions={{
				headerShown: false,
				gestureEnabled: true,
				...TransitionPresets.ModalSlideFromBottomIOS,
			}}
		>
			<Stack.Screen name="Listings" component={ListingsScreen} />

			<Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
		</Stack.Navigator>
	);
};
