import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { writingState } from '../recoil/atoms';

const Lenght = () => {
	const [writing] = useRecoilState(writingState);
	const [length, setLength] = useState(0);

	useEffect(() => {
		if (!writing) return;

		const interval = setInterval(() => {
			setLength((length) => length + 1);
		}, 250);

		return () => clearInterval(interval);
	}, [writing]);

	return (
		<>
			{writing || length !== 0 ? (
				<p className="length">{length} letters generated!</p>
			) : (
				<p className="length">
					Monkeys haven't written anything yet! When a monkey writes a text
					similar to the one you are looking for, an{' '}
					<span role="img" aria-label="fire emoji">
						🔥
					</span>
					will appear over it. Click on the monkey to copy the text it has
					generated!
				</p>
			)}
		</>
	);
};

export default Lenght;
