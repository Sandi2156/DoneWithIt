import { StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		setMessages((prevMessages) =>
			prevMessages.filter((elm) => elm.id !== message.id)
		);
	};

	const refreshHandler = () => {
		setMessages([
			...messages,
			{
				id: messages.length + 1,
				title: `T${messages.length + 1}`,
				description: "D5",
				image: require("../assets/mosh.jpg"),
			},
		]);
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subtitle={item.description}
						image={item.image}
						onPress={() => {}}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeperator}
				refreshing={refreshing}
				onRefresh={refreshHandler}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
