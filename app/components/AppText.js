import { StyleSheet, Text } from "react-native";
import React from "react";

export default function AppText(props) {
	return <Text style={[styles.text, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "Roboto",
		fontSize: 20,
	},
});
