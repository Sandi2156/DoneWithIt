import { StyleSheet, Text } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

export default function AppText({ children, style, ...rest }) {
	return (
		<Text style={[styles.text, style]} {...rest}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: defaultStyles.text,
});
