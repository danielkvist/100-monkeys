import React, { useContext } from 'react';

import { Context, actions } from '../context';

const Counter = () => {
	const { state, dispatch } = useContext(Context);

	return (
		<div className="counter">
			<button
				className="btn counter__btn"
				disabled={state.monkeys >= 99}
				onClick={() => dispatch({ type: actions.addMonkey })}
			>
				+
			</button>
			{`${state.monkeys}`.padStart(2, 0)}
			<button
				className="btn counter__btn"
				disabled={state.monkeys <= 1}
				onClick={() => dispatch({ type: actions.removeMonkey })}
			>
				-
			</button>
		</div>
	);
};

export default Counter;
