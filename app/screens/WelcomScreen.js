import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import AppButton from "../components/AppButton";

export default function WelcomScreen({ navigation }) {
	return (
		<ImageBackground
			blurRadius={10}
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image source={require("../assets/logo-red.png")} style={styles.logo} />

				<Text style={styles.tagline}>Sell What you dorn't need</Text>
			</View>

			<View style={styles.buttonsContainer}>
				<AppButton title="login" onPress={() => navigation.navigate("Login")} />

				<AppButton
					title="register"
					color="secondary"
					onPress={() => navigation.navigate("Register")}
				/>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
	buttonsContainer: { width: "100%", padding: 20 },
	logo: { width: 100, height: 100 },
	logoContainer: { position: "absolute", top: 70, alignItems: "center" },
	tagline: { fontSize: 25, fontWeight: "600", paddingVertical: 20 },
});
