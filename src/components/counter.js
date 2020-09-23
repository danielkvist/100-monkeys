import React from 'react';
import { useRecoilState } from 'recoil';

import { counterState } from '../recoil/atoms';

const Counter = () => {
	const [counter, setCount] = useRecoilState(counterState);

	return (
		<div className="counter">
			<button
				className="btn counter__btn"
				disabled={counter >= 100}
				onClick={() => setCount(counter + 1)}
			>
				+
			</button>
			{counter}
			<button
				className="btn counter__btn"
				disabled={counter <= 1}
				onClick={() => setCount(counter - 1)}
			>
				-
			</button>
		</div>
	);
};

export default Counter;
