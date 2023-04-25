import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/nagivation/AuthNavigator";

export default function App() {
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
}
