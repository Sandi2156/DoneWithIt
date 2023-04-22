import { View, Text } from "react-native";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

import { useFormikContext } from "formik";

export default function AppFormPicker({ items, name }) {
	const { errors, touched, setFieldValue, values } = useFormikContext();

	return (
		<View>
			<AppPicker
				placeholder={name}
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				selectedItem={values[name]}
			/>

			<ErrorMessage visible={touched[name]} error={errors[name]} />
		</View>
	);
}
