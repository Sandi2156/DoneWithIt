import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import navigationTheme from "./app/nagivation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/nagivation/AppNavigator";
import AuthNavigator from "./app/nagivation/AuthNavigator";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";

export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false);

	const getUser = async () => {
		const token = await authStorage.getToken();
		if (!token) return;

		setUser(jwtDecode(token));
	};

	if (!isReady) {
		return (
			<AppLoading startAsync={getUser} onFinish={() => setIsReady(true)} />
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
