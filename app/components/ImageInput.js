import {
	StyleSheet,
	View,
	Image,
	TouchableWithoutFeedback,
	Alert,
} from "react-native";
import React from "react";

import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ImageInput({ imageUri, onChange }) {
	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert("Delete", "Are you sure you want to delete this image", [
				{ text: "Yes", onPress: () => onChange(null) },
				{ text: "No" },
			]);
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});

			if (!result.canceled) onChange(result.assets[0].uri);
		} catch (error) {
			console.log("error in image selection : ", error);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						name="camera"
						size={40}
						color={colors.medium}
					/>
				)}

				{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		height: 100,
		width: 100,
		overflow: "hidden",
	},

	image: { width: "100%", height: "100%" },
});
