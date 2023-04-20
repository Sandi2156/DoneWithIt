import { StyleSheet, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function Icon({
	name,
	size = 40,
	backgroundColor = "black",
	iconColor = "white",
}) {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor: defaultStyles.colors[backgroundColor],
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<MaterialCommunityIcons
				name={name}
				color={defaultStyles.colors[iconColor]}
				size={size * 0.5}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
