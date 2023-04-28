import { Image, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import {
	AppForm,
	AppFormField,
	SubmitButton,
	ErrorMessage,
} from "../components/forms";

import colors from "../config/colors";
import auth from "../api/auth";

import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const initialValues = { email: "", password: "" };

export default function LoginScreen() {
	const [loginFailed, setLoginFailed] = useState(false);
	const authContext = useContext(AuthContext);

	const handleSubmit = async ({ email, password }) => {
		const result = await auth.login(email, password);

		if (!result.ok) return setLoginFailed(true);

		setLoginFailed(false);
		const user = jwtDecode(result.data);
		authContext.setUser(user);
		authStorage.storeToken(result.data);
	};

	return (
		<Screen style={styles.container}>
			<Image source={require("../assets/logo-red.png")} style={styles.logo} />

			<AppForm
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage
					error="Invalid email and/or password."
					visible={loginFailed}
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

				<SubmitButton title="Login" />
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
