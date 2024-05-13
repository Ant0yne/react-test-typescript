import "./App.css";
import Button from "./Button";

function App() {
	const onClick = () => {
		return 5;
	};

	return (
		<div>
			<Button
				style={{
					backgroundColor: "red",
					fontSize: 50,
					padding: "5px, 10px",
				}}
				borderRadius={{
					topLeft: 5,
					topRight: 5,
					bottomLeft: 10,
					bottomRight: 10,
				}}
				onClick={onClick}>
				I am a button
			</Button>
		</div>
	);
}

export default App;
