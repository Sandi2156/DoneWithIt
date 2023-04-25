import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

import routes from "./routes";

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
			<Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />

			<Stack.Screen
				name={routes.LISTING_DETAILS}
				component={ListingDetailsScreen}
			/>
		</Stack.Navigator>
	);
};
