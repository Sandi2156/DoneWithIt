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
		height: 70,
		width: 70,
		borderRadius: 35,
		justifyContent: "center",
		alignItems: "center",
		bottom: 30,
		borderColor: colors.white,
		borderWidth: 10,
	},
});
