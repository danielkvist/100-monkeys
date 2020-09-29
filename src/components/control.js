import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { writingState, searchState } from '../recoil/atoms';

const Control = () => {
	const [state, setState] = useRecoilState(writingState);
	const searchTerm = useRecoilValue(searchState);

	return (
		<div className="control">
			{state ? (
				<button className="btn control__btn" onClick={() => setState(false)}>
					Stop
				</button>
			) : (
				<button
					className="btn control__btn"
					disabled={searchTerm === ''}
					onClick={() => setState(true)}
				>
					Start
				</button>
			)}
		</div>
	);
};

export default Control;
