import React from "react";

import ImageInputList from "../ImageInputList";
import { ErrorMessage } from ".";

import { useFormikContext } from "formik";

export default function FormImagePicker({ name }) {
	const { errors, values, setFieldValue, touched } = useFormikContext();
	const imageUris = values[name];

	const handleAdd = (uri) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setFieldValue(
			name,
			imageUris.filter((preUri) => preUri != uri)
		);
	};

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				addImage={handleAdd}
				removeImage={handleRemove}
			/>

			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
