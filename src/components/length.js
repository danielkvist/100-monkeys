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
				<p className="length">
					{length} letters generated! To see what each monkey has written click
					on it to copy its content automatically!
				</p>
			) : (
				<p className="length">Monkeys haven't written anything yet! </p>
			)}
		</>
	);
};

export default Lenght;
