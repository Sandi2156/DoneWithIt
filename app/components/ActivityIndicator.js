import { StyleSheet, Text, View } from "react-native";
import React from "react";

import LottieView from "lottie-react-native";

export default function ActivityIndicator({ visible }) {
	if (!visible) return null;

	return (
		<View style={styles.container}>
			<LottieView
				source={require("../assets/animations/loading.json")}
				autoPlay
				loop
				style={styles.lottie}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		height: "100%",
		width: "100%",
		backgroundColor: "white",
		opacity: 0.8,
	},
	lottie: { width: 150, height: 150 },
});
