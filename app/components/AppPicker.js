import {
	FlatList,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function AppPicker({
	iconName,
	placeholder,
	items,
	selectedItem,
	onSelectItem,
}) {
	const [modalVisible, setModalVisible] = useState(false);

	const onPressHandler = (item) => {
		setModalVisible(false);
		onSelectItem(item);
	};

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{iconName && (
						<MaterialCommunityIcons
							name={iconName}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}

					<AppText
						style={[styles.text, !selectedItem ? styles.placeholder : {}]}
					>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>

			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<FlatList
						data={items}
						keyExtractor={(item) => item.label}
						renderItem={({ item }) => (
							<PickerItem {...item} onPress={() => onPressHandler(item)} />
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},

	icon: { marginRight: 10 },

	text: { flex: 1, fontSize: 16 },

	placeholder: { color: defaultStyles.colors.medium },
});
