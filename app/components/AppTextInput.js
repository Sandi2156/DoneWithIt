import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function AppTextInput({ iconName, ...otherProps }) {
	return (
		<View style={styles.container}>
			{iconName && (
				<MaterialCommunityIcons
					name={iconName}
					size={20}
					color={defaultStyles.colors.medium}
					style={styles.icon}
				/>
			)}

			<TextInput style={styles.textInput} {...otherProps} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},

	icon: { marginRight: 10 },

	textInput: defaultStyles.text,
	// textInput: { borderBottomColor: "red" },
});
