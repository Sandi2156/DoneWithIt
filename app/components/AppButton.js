import { StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";

import colors from "../config/colors";

export default function AppButton({ title, onPress, color = "primary" }) {
	return (
		<TouchableHighlight
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		width: "100%",
		marginVertical: 10,
	},

	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
