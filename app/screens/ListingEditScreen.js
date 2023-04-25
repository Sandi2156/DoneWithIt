import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
	AppForm,
	AppFormField,
	SubmitButton,
	AppFormPicker,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().nullable().required().label("Category"),
	images: Yup.array().min(1, "Please select atleast one image"),
});

const categories = [
	{
		label: "Furniture",
		value: 1,
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
	},
	{ label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car" },
	{
		label: "Cameras",
		value: 3,
		backgroundColor: "#fed330",
		icon: "camera",
	},
	{
		label: "Games",
		value: 4,
		backgroundColor: "#26de81",
		icon: "cards",
	},
	{
		label: "Clothing",
		value: 5,
		backgroundColor: "#2bcbba",
		icon: "shoe-heel",
	},
	{
		label: "Sports",
		value: 6,
		backgroundColor: "#45aaf2",
		icon: "basketball",
	},
	{
		label: "Movies & Music",
		value: 7,
		backgroundColor: "#4b7bec",
		icon: "headphones",
	},
	{
		label: "Books",
		value: 8,
		backgroundColor: "#a55eea",
		icon: "book-open-variant",
	},
	{
		label: "Other",
		value: 9,
		backgroundColor: "#778ca3",
		icon: "application",
	},
];

const initialValues = {
	title: "",
	price: "",
	description: "",
	category: null,
	images: [],
};

export default function ListingEditScreen() {
	const location = useLocation();

	return (
		<Screen style={styles.screen}>
			<AppForm
				initialValues={initialValues}
				onSubmit={(values) => console.log(location)}
				validationSchema={validationSchema}
			>
				<FormImagePicker name="images" />

				<AppFormField name="title" maxLength={255} placeholder="Title" />

				<AppFormField
					name="price"
					keyboardType="numeric"
					maxLength={8}
					placeholder="Price"
				/>

				<AppFormPicker
					items={categories}
					name="category"
					PickerItemComponent={CategoryPickerItem}
					numberOfColumns={3}
				/>

				<AppFormField
					name="description"
					multiline
					numberOfLines={3}
					placeholder="Description"
					maxLength={255}
				/>

				<SubmitButton title="post" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({ screen: { padding: 12 } });
