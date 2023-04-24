import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import { useEffect, useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Electronics", value: 3 },
];

import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
	const [imageUri, setImageUri] = useState();
	const askPermission = async () => {
		// const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
		// if (!result.granted) alert("You need to give permission");
	};

	const selectImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync();

		if (!result.canceled) setImageUri(result.assets[0].uri);
	};

	useEffect(() => {
		askPermission();
	}, []);

	return <ImageInput />;
}
