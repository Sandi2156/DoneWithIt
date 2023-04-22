import { Image, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

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
				{() => (
					<>
						<AppFormField
							autoCapitalize="none"
							autoCorrect={false}
							iconName="email"
							keyboardType="email-address"
							name="email"
							placeholder="Email"
							textContentType="emailAddress"
						/>

						<AppFormField
							autoCapitalize="none"
							autoCorrect={false}
							iconName="lock"
							name="password"
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>

						<SubmitButton title="Login" />
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
