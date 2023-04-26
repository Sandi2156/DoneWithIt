import { FlatList, StyleSheet } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

import routes from "../nagivation/routes";
import ActivityIndicator from "../components/ActivityIndicator.js";

const listings = [
	{
		id: 1,
		title: "Red Jacket for Sale",
		price: 100,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Couch",
		price: 1000,
		image: require("../assets/couch.jpg"),
	},
	{
		id: 3,
		title: "Couch",
		price: 1000,
		image: require("../assets/couch.jpg"),
	},
	{
		id: 4,
		title: "Couch",
		price: 1000,
		image: require("../assets/couch.jpg"),
	},
];

export default function ListingsScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<ActivityIndicator visible={false} />
			<FlatList
				data={listings}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={`$${item.price}`}
						image={item.image}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: { padding: 20, backgroundColor: colors.light },
});
