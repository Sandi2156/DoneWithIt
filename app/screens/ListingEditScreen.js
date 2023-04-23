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

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().nullable().required().label("Category"),
});

const categories = [
	{ label: "Furniture", value: 1, backgroundColor: "yellow", icon: "apps" },
	{ label: "Clothing", value: 2, backgroundColor: "yellow", icon: "close" },
	{
		label: "Camera",
		value: 3,
		backgroundColor: "yellow",
		icon: "chevron-right",
	},
];

const initialValues = { title: "", price: "", description: "", category: null };

export default function ListingEditScreen() {
	return (
		<Screen style={styles.screen}>
			<AppForm
				initialValues={initialValues}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
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

const styles = StyleSheet.create({ screen: { padding: 10 } });
