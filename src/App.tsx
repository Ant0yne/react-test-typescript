import "./App.css";
import Button from "./Button";

function App() {
	return (
		<div>
			<Button
				backGroundColor="red"
				fontSize={50}
				pillShape={true}
				padding={[5, 10, 20, 15]}
			/>
		</div>
	);
}

export default App;
