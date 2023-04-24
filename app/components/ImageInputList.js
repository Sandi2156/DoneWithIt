import { StyleSheet, View } from "react-native";
import React from "react";
import ImageInput from "./ImageInput";

export default function ImageInputList({
	imageUris = [],
	addImage,
	removeImage,
}) {
	return (
		<View style={styles.container}>
			{imageUris.map((uri) => (
				<View key={uri} style={styles.image}>
					<ImageInput imageUri={uri} onChange={() => removeImage(uri)} />
				</View>
			))}

			<ImageInput onChange={(uri) => addImage(uri)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	image: { marginRight: 10 },
});
