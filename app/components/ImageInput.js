import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri }) {
	return (
		<View style={styles.container}>
			{!imageUri && (
				<MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
			)}

			{imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
		</View>
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
