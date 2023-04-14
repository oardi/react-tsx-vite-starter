import { useState } from 'react';

export const App = (): JSX.Element => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>react tsx vite starter</h1>
			<button onClick={(): void => setCount(count => count + 1)}>count is {count}</button>
		</>
	);
};
