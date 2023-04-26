import { StyleSheet, View, Modal } from "react-native";
import React from "react";

import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

export default function UploadScreen({
	onFinish,
	progress = 0,
	visible = false,
}) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						progress={progress}
						color={colors.primary}
						width={200}
					/>
				) : (
					<LottieView
						source={require("../assets/animations/done.json")}
						autoPlay
						loop={false}
						onAnimationFinish={onFinish}
						style={styles.lottie}
					/>
				)}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: "center", justifyContent: "center" },
	lottie: { width: 150, height: 150 },
});
