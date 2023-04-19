import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import React from "react";
import AppText from "./AppText";

import colors from "../config/colors";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ListItem({
	image,
	title,
	subtitle,
	onPress,
	renderRightActions,
}) {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
					<View style={styles.continer}>
						<Image style={styles.image} source={image} />

						<View>
							<AppText style={styles.title}>{title}</AppText>

							<AppText style={styles.subtitle}>{subtitle}</AppText>
						</View>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	continer: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 20,
		padding: 12,
	},
	image: { width: 70, height: 70, borderRadius: 35, marginRight: 10 },
	subtitle: { color: colors.medium },
	title: { fontWeight: 500 },
});
