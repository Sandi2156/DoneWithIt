import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
	{
		title: "My Listings",
		icon: { name: "format-list-bulleted", backgroundColor: "primary" },
	},
	{
		title: "My Messages",
		icon: { name: "email", backgroundColor: "secondary" },
	},
];

export default function AccountScreen() {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="sandipan mahata"
					subtitle="sandipan@gmail.com"
					image={require("../assets/mosh.jpg")}
				/>
			</View>

			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(item) => item.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={<Icon {...item.icon} />}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>

			<View style={styles.container}>
				<ListItem
					title="Log Out"
					IconComponent={<Icon name="logout" backgroundColor="yellow" />}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: { marginVertical: 10, backgroundColor: colors.white },
	screen: { backgroundColor: colors.light },
});
