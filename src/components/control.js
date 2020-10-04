import React, { useContext } from 'react';

import { Context, actions } from '../context';

const Control = () => {
	const { state, dispatch } = useContext(Context);

	return (
		<div className="control">
			{state.writing ? (
				<button
					className="btn control__btn"
					onClick={() => dispatch({ type: actions.stopWriting })}
				>
					Stop
				</button>
			) : (
				<button
					className="btn control__btn"
					disabled={state.searchTerm === ''}
					onClick={() => dispatch({ type: actions.startWriting })}
				>
					Start
				</button>
			)}
		</div>
	);
};

export default Control;
