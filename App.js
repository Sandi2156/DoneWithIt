import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Electronics", value: 3 },
];

export default function App() {
	const [category, setCategory] = useState();

	return <ListingEditScreen />;
}
