import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ListingButton({ onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<MaterialCommunityIcons
				name="plus-circle"
				size={30}
				color={colors.white}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		height: 80,
		width: 80,
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
		bottom: 30,
		borderColor: colors.white,
		borderWidth: 10,
	},
});
