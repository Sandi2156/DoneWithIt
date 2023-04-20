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
	IconComponent,
}) {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
					<View style={styles.continer}>
						{IconComponent}

						{image && <Image style={styles.image} source={image} />}

						<View style={styles.details}>
							<AppText style={styles.title}>{title}</AppText>

							{subtitle && (
								<AppText style={styles.subtitle}>{subtitle}</AppText>
							)}
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
	details: { marginLeft: 10, justifyContent: "center" },
	image: { width: 50, height: 50, borderRadius: 25 },
	subtitle: { color: colors.medium },
	title: { fontWeight: 600 },
});
