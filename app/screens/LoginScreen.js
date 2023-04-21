import { Image, StyleSheet } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";

import * as Yup from "yup";
import { Formik } from "formik";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
	return (
		<Screen style={styles.container}>
			<Image source={require("../assets/logo-red.png")} style={styles.logo} />

			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							iconName="email"
							keyboardType="email-address"
							onBlur={() => setFieldTouched("email")}
							onChangeText={handleChange("email")}
							placeholder="Email"
							textContentType="emailAddress"
						/>

						<ErrorMessage error={errors.email} visible={touched.email} />

						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							iconName="lock"
							onBlur={() => setFieldTouched("password")}
							onChangeText={handleChange("password")}
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>

						<ErrorMessage error={errors.password} visible={touched.password} />

						<AppButton title="Login" onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: { padding: 10 },

	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},

	errorText: { color: colors.danger },
});
