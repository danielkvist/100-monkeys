import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { counterState, writingState } from '../recoil/atoms';

const genRandomString = () =>
	Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, '')
		.substr(0, 1);

const Monkey = () => {
	const [writing] = useRecoilState(writingState);
	const [text, setText] = useState(genRandomString());

	useEffect(() => {
		if (!writing) return;

		const interval = setInterval(() => {
			setText((text) => (text += genRandomString()));
		}, 250);

		return () => clearInterval(interval);
	}, [writing]);

	return <div>{text}</div>;
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

	return <div>{monkeys.map((monkey) => monkey)}</div>;
};

export default Monkeys;
