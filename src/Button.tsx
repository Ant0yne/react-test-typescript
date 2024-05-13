const convertCurrency = (amount: number, currency: string): string => {
	return "test";
};

type Color = "red" | "blue" | "green";

type ButtonProps = {
	backGroundColor?: Color;
	textColor?: Color;
	fontSize?: number;
	pillShape?: boolean;
	padding: [number, number, number, number];
};

const Button = ({
	backGroundColor = "blue",
	fontSize = 20,
	pillShape = false,
	padding = [0, 0, 0, 0],
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
					padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
				}}>
				I am a button
			</button>
		</div>
	);
};

export default Button;
