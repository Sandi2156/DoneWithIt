import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/nagivation/AuthNavigator";
import navigationTheme from "./app/nagivation/navigationTheme";

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AuthNavigator />
		</NavigationContainer>
	);
}
