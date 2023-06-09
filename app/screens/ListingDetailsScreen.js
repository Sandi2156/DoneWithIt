import { StyleSheet, View } from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

import colors from "../config/colors";

export default function ListingDetailsScreen({ route }) {
	const listing = route.params;

	return (
		<View>
			<Image style={styles.image} uri={listing.image} />

			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>

				<AppText style={styles.price}>${listing.price}</AppText>
			</View>

			<ListItem
				image={require("../assets/mosh.jpg")}
				title="Mosh Hamedani"
				subtitle="5 Listings"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsContainer: { padding: 20 },
	image: { width: "100%", height: 300 },
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: { fontSize: 24, fontWeight: 500 },
});
