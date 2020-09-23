import React from 'react';
import { useRecoilState } from 'recoil';

import { writingState } from '../recoil/atoms';

const Control = () => {
	const [state, setState] = useRecoilState(writingState);

	return (
		<div className="control">
			{state ? (
				<button className="btn control__btn" onClick={() => setState(false)}>
					Pause
				</button>
			) : (
				<button className="btn control__btn" onClick={() => setState(true)}>
					Start
				</button>
			)}
		</div>
	);
};

export default Control;
