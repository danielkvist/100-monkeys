import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import copy from 'copy-to-clipboard';

import { counterState, writingState } from '../recoil/atoms';
import genRandomString from '../utils/gen-random-string';

const MonkeyBadge = ({ writing }) => {
	return (
		<div className={`monkey__badge ${writing ? 'monkey__badge--writing' : ''}`}>
			{writing ? (
				<span>...</span>
			) : (
				<span role="img" aria-label="coffee">
					☕
				</span>
			)}
		</div>
	);
};

const Monkey = () => {
	const [writing, setWriting] = useRecoilState(writingState);
	const [text, setText] = useState(genRandomString());

	useEffect(() => {
		if (!writing) return;

		const interval = setInterval(() => {
			setText((text) => (text += genRandomString()));
		}, 250);

		return () => clearInterval(interval);
	}, [writing]);

	return (
		<div
			onClick={() => {
				setWriting(false);
				copy(text);
			}}
		>
			<MonkeyBadge writing={writing} />
			<span className="monkey" role="img" aria-label="monkey"></span>
		</div>
	);
};

const Monkeys = () => {
	const [monkeys, setMonkeys] = useState([]);
	const [counter] = useRecoilState(counterState);

	useEffect(() => {
		setMonkeys([<Monkey key={1} />]);
	}, []);

	useEffect(() => {
		if (monkeys.length < counter) {
			setMonkeys([...monkeys, <Monkey key={monkeys.length} />]);
		} else {
			setMonkeys([...monkeys].slice(0, monkeys.length - 1));
		}
	}, [counter]);

	return <div className="monkeys">{monkeys.map((monkey) => monkey)}</div>;
};

export default Monkeys;
