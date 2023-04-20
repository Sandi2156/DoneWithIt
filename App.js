import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

export default function App() {
	return (
		<Screen>
			<AppPicker iconName="apps" placeholder="Category" />
		</Screen>
	);
}
