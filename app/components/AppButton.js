import { StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

export default function AppButton({
	title,
	onPress,
	color = "primary",
	textColor = "white",
}) {
	return (
		<TouchableHighlight
			style={[styles.button, { backgroundColor: defaultStyles.colors[color] }]}
			onPress={onPress}
		>
			<Text style={[styles.text, { color: textColor }]}>{title}</Text>
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
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
