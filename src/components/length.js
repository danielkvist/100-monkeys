import React, { useState, useEffect, useContext } from 'react';

import { Context } from '../context';

const Lenght = () => {
	const { state } = useContext(Context);
	const [length, setLength] = useState(0);

	useEffect(() => {
		if (!state.writing) return;

		const interval = setInterval(() => {
			setLength((length) => length + 1);
		}, 250);

		return () => clearInterval(interval);
	}, [state.writing]);

	return (
		<>
			{state.writing || length !== 0 ? (
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
