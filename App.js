import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/nagivation/navigationTheme";
import AppNavigator from "./app/nagivation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
	return (
		<>
			<OfflineNotice />

			<NavigationContainer theme={navigationTheme}>
				<AppNavigator />
			</NavigationContainer>
		</>
	);
}
