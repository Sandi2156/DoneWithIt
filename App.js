import AppText from "./app/components/AppText";
import Screen from "./app/components/Screen";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem("@storage_Key", value);
		} catch (e) {
			// saving error
		}
	};
	storeData();
	return (
		<Screen>
			<AppText>jlsjfljl</AppText>
		</Screen>
	);
}
