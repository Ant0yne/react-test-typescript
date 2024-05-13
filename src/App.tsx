import { useState } from "react";

import "./App.css";
import Button from "./Button";

function App() {
	const [count, setCount] = useState(0);

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
				// onClick={onClick}
				count={count}
				setCount={setCount}>
				<p>I am a button</p>
				{/* Text */}
			</Button>
		</div>
	);
}

export default App;
