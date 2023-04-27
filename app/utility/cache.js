import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryTime = 5;

const store = async (key, value) => {
	try {
		const item = { value, timestamp: Date.now() };

		await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
	} catch (error) {
		console.log("error while storing in cache :" + error);
	}
};

const isExpired = (item) => {
	const now = moment(Date.now());
	const storedTime = moment(item.timestamp);
	return now.diff(storedTime, "minutes") > expiryTime;
};

const get = async (key) => {
	try {
		const value = await AsyncStorage.getItem(prefix + key);
		const item = JSON.stringify(value);

		if (!item) return null;

		if (isExpired(item)) {
			await AsyncStorage.removeItem(prefix + key);
			return null;
		}

		return item;
	} catch (error) {
		console.log(error);
	}
};

export default { store, get };
