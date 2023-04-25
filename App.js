import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/nagivation/AuthNavigator";
import navigationTheme from "./app/nagivation/navigationTheme";
import AppNavigator from "./app/nagivation/AppNavigator";

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	);
}
