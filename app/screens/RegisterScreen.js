import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
	AppForm,
	AppFormField,
	ErrorMessage,
	SubmitButton,
} from "../components/forms";

import colors from "../config/colors";

import usersApi from "../api/users";
import authApi from "../api/auth";
import authStorage from "../auth/storage";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const initialValues = { name: "", email: "", password: "" };

export default function RegisterScreen() {
	const [error, setError] = useState(null);
	const auth = useAuth();

	const handleSubmit = async (userInfo) => {
		const result = await usersApi.register(userInfo);

		if (!result.ok) {
			if (result.data) setError(result.data.error);
			else {
				setError("An unexpected error occured");
				console.log(result);
			}
			return;
		}

		setError(null);
		const { data: authToken } = await authApi.login(
			userInfo.email,
			userInfo.password
		);
		auth.logIn(authToken);
	};

	return (
		<Screen style={styles.container}>
			<Image source={require("../assets/logo-red.png")} style={styles.logo} />

			<AppForm
				initialValues={initialValues}
				onSubmit={(values) => handleSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage error={error} visible={error} />

				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					iconName="face-man"
					name="name"
					placeholder="Name"
				/>

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

				<SubmitButton title="Register" />
			</AppForm>
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
