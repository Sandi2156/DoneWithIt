import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";

const messages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 3,
		title: "T3",
		description: "D3",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 4,
		title: "T4",
		description: "D4",
		image: require("../assets/mosh.jpg"),
	},
];

export default function MessagesScreen() {
	return (
		<FlatList
			data={messages}
			keyExtractor={(message) => message.id.toString()}
			renderItem={({ item }) => (
				<ListItem
					title={item.title}
					subtitle={item.description}
					image={item.image}
				/>
			)}
		/>
	);
}

const styles = StyleSheet.create({});
