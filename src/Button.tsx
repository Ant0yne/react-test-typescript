const convertCurrency = (amount: number, currency: string): string => {
	return "test";
};

type ButtonProps = {
	backGroundColor?: "red" | "blue" | "green";
	fontSize?: number;
	pillShape?: boolean;
};

const Button = ({
	backGroundColor = "blue",
	fontSize = 20,
	pillShape = false,
}: ButtonProps) => {
	let url = "https://duckduckgo.com/";

	convertCurrency(100, "EUR");

	return (
		<div>
			<button
				style={{
					backgroundColor: backGroundColor,
					fontSize: fontSize,
					borderRadius: pillShape ? "10" : "0",
				}}>
				I am a button
			</button>
		</div>
	);
};

export default Button;
