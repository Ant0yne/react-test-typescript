const convertCurrency = (amount: number, currency: string): string => {
	return "test";
};

// type Color = "red" | "blue" | "green";

// type ButtonProps = {
// 	backGroundColor?: Color;
// 	textColor?: Color;
// 	fontSize?: number;
// 	pillShape?: boolean;
// 	padding: [number, number, number, number];
// };

type ButtonProps = {
	style: React.CSSProperties;
	borderRadius: Record<string, number>;
	onClick: () => number;
	children: React.ReactNode;
};

const Button = ({ style, borderRadius, onClick, children }: ButtonProps) => {
	let url = "https://duckduckgo.com/";

	convertCurrency(100, "EUR");

	return (
		<div>
			<button onClick={onClick} style={style}>
				{children}
			</button>
		</div>
	);
};

export default Button;
