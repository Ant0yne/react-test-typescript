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

// Seulement pour décrire des objets
// interface IButtonProps {
// 	text: string;
// 	count: number;
// }

type TButtonProps = {
	style: React.CSSProperties;
	borderRadius?: Record<string, number>;
	onClick?: () => number;
	// children: JSX.Element;
	children: React.ReactNode;
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({
	style,
	// borderRadius,
	// onClick,
	children,
	count,
	setCount,
}: TButtonProps) => {
	let url = "https://duckduckgo.com/";

	convertCurrency(100, "EUR");

	return (
		<div>
			<button
				onClick={() => setCount((prevState) => prevState + 1)}
				style={style}>
				{children}
			</button>
			<p>{count}</p>
		</div>
	);
};

export default Button;
