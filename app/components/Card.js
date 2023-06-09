import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";

import defaultStyles from "../config/styles";

import AppText from "./AppText";

export default function Card({ title, subtitle, image, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				{/* you can add preview for progressive image: preview={{uri: thumbnailUrl}} tint="light"*/}
				<Image style={styles.image} uri={image} />

				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>{title}</AppText>

					<AppText style={styles.subtitle}>{subtitle}</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: defaultStyles.colors.white,
		marginBottom: 20,
		overflow: "hidden",
	},
	detailsContainer: { padding: 20 },
	image: { width: "100%", height: 200 },
	title: { marginBottom: 7 },
	subtitle: { color: defaultStyles.colors.secondary, fontWeight: "bold" },
});
