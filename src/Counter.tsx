import { useEffect } from "react";
import { type Color } from "./lib/types";

type CounterProps<T> = {
	countValue: T;
	countHistory: T[];
};

const Counter = <T,>({ countValue, countHistory }: CounterProps<T>) => {
	const value = countValue;

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json: unknown) => console.log(json));
	}, []);
	return <div></div>;
};

export default Counter;
