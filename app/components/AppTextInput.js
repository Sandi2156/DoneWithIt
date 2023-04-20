import { StyleSheet, Text, TextInput, View, Platform } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function AppTextInput({ iconName, ...otherProps }) {
	return (
		<View style={styles.container}>
			{iconName && (
				<MaterialCommunityIcons
					name={iconName}
					size={20}
					color={colors.medium}
					style={styles.icon}
				/>
			)}

			<TextInput style={styles.textInput} {...otherProps} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},

	icon: { marginRight: 10 },

	textInput: {
		fontSize: 10,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		color: colors.dark,
	},
});
