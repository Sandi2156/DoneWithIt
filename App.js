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
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
	const [imageUris, setImageUris] = useState([]);
	const askPermission = async () => {
		// const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
		// if (!result.granted) alert("You need to give permission");
	};

	const addImage = (uri) => {
		setImageUris([...imageUris, uri]);
		console.log(uri);
	};

	const removeImage = (uri) => {
		setImageUris((uris) => uris.filter((preUri) => preUri != uri));
	};

	useEffect(() => {
		askPermission();
	}, []);

	return (
		<ImageInputList
			imageUris={imageUris}
			addImage={addImage}
			removeImage={removeImage}
		/>
	);
}
