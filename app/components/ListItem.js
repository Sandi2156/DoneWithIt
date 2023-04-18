import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";

import colors from "../config/colors";

export default function ListItem({ image, title, subtitle }) {
	return (
		<View style={styles.continer}>
			<Image style={styles.image} source={image} />

			<View>
				<AppText style={styles.title}>{title}</AppText>

				<AppText style={styles.subtitle}>{subtitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	continer: { flexDirection: "row", alignItems: "center", marginLeft: 20 },
	image: { width: 70, height: 70, borderRadius: 35, marginRight: 10 },
	subtitle: { color: colors.medium },
	title: { fontWeight: 500 },
});
