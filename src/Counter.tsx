type CounterProps<T> = {
	countValue: T;
	countHistory: T[];
};

const Counter = <T,>({ countValue, countHistory }: CounterProps<T>) => {
	return <div></div>;
};

export default Counter;
