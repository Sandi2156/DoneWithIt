import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import navigationTheme from "./app/nagivation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/nagivation/AppNavigator";
import AuthNavigator from "./app/nagivation/AuthNavigator";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (!user) return;

		setUser(user);
	};

	if (!isReady) {
		return (
			<AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
		);
	}

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<OfflineNotice />

			<NavigationContainer theme={navigationTheme}>
				{user ? <AppNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
