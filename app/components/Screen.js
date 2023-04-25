import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Constants from "expo-constants";

export default function Screen({ children, style }) {
	return <SafeAreaView style={[style, styles.screen]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	screen: { paddingTop: Constants.statusBarHeight, flex: 1 },
});
