import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Electronics", value: 3 },
];

export default function App() {
	const [category, setCategory] = useState();

	return (
		<Screen>
			<AppPicker
				iconName="apps"
				placeholder="Category"
				items={categories}
				selectedItem={category}
				onSelectItem={(item) => setCategory(item)}
			/>
		</Screen>
	);
}
