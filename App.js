import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/nagivation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/nagivation/AppNavigator";
import AuthNavigator from "./app/nagivation/AuthNavigator";

import AuthContext from "./app/auth/context";

export default function App() {
	const [user, setUser] = useState();

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineNotice />

			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
