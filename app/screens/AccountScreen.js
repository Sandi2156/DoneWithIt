import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext } from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";

import routes from "../nagivation/routes";

import AuthContext from "../auth/context";

const menuItems = [
	{
		title: "My Listings",
		icon: { name: "format-list-bulleted", backgroundColor: "#fc5c65" },
	},
	{
		title: "My Messages",
		icon: { name: "email", backgroundColor: "#4ecdc4" },
		targetScreen: routes.MESSAGES,
	},
];

export default function AccountScreen({ navigation }) {
	const { user, setUser } = useContext(AuthContext);

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					subtitle={user.email}
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
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>

			<View style={styles.container}>
				<ListItem
					title="Log Out"
					IconComponent={<Icon name="logout" backgroundColor="red" />}
					onPress={() => setUser(undefined)}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: { marginVertical: 10, backgroundColor: colors.white },
	screen: { backgroundColor: colors.light },
});
