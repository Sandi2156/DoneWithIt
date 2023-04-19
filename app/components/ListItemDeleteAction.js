import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ListItemDeleteAction() {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons name="trash-can" size={25} color={colors.white} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
	},
});
