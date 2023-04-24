import { ScrollView, StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

export default function ImageInputList({
	imageUris = [],
	addImage,
	removeImage,
}) {
	const scrollRef = useRef();

	return (
		<View>
			<ScrollView
				horizontal
				ref={scrollRef}
				onContentSizeChange={() =>
					scrollRef.current.scrollToEnd({ animated: true })
				}
			>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<View key={uri} style={styles.image}>
							<ImageInput imageUri={uri} onChange={() => removeImage(uri)} />
						</View>
					))}

					<ImageInput onChange={(uri) => addImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	image: { marginRight: 10 },
});
