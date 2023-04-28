import { useContext } from "react";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

export default useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const logIn = (jwtToken) => {
		const user = jwtDecode(jwtToken);
		setUser(user);
		authStorage.storeToken(jwtToken);
	};

	const logOut = () => {
		setUser(undefined);
		authStorage.removeToken();
	};

	return { user, logOut, logIn };
};
