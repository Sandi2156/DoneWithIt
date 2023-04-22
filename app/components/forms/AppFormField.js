import React from "react";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

import { useFormikContext } from "formik";

export default function AppFormField({ name, ...rest }) {
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				{...rest}
			/>

			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
