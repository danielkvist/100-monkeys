import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import copy from 'copy-to-clipboard';

import { counterState, writingState, searchState } from '../recoil/atoms';
import genRandomString from '../utils/gen-random-string';

const MonekyMatch = ({ match }) => {
	return (
		<div className={`monkey__match ${match ? 'monkey__match--matched' : ''}`}>
			{match ? (
				<span role="img" aria-label="coffee">
					🔥
				</span>
			) : null}
		</div>
	);
};

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
	const [text, setText] = useState(genRandomString());
	const [match, setMatch] = useState(false);
	const [writing, setWriting] = useRecoilState(writingState);
	const searchTerm = useRecoilValue(searchState);

	useEffect(() => {
		if (!writing) return;

		const interval = setInterval(() => {
			setText((text) => (text += genRandomString()));
		}, 250);

		return () => clearInterval(interval);
	}, [writing]);

	useEffect(() => {
		if (searchTerm.length >= text || searchTerm === '') return;

		setMatch(text.includes(searchTerm));
	}, [text, searchTerm]);

	return (
		<div
			onClick={() => {
				setWriting(false);
				copy(text);
			}}
		>
			<MonekyMatch match={match} />
			<MonkeyBadge writing={writing} />
			<span className="monkey" role="img" aria-label="monkey"></span>
		</div>
	);
};

const Monkeys = () => {
	const [monkeys, setMonkeys] = useState([]);
	const [counter] = useRecoilState(counterState);

	useEffect(() => {
		setMonkeys([<Monkey key={0} />]);
	}, []);

	useEffect(() => {
		if (monkeys.length === counter) return;

		if (monkeys.length < counter) {
			setMonkeys((monkeys) => [...monkeys, <Monkey key={monkeys.length} />]);
		} else {
			setMonkeys((monkeys) => [...monkeys].slice(0, monkeys.length - 1));
		}
	}, [counter, monkeys.length]);

	return <div className="monkeys">{monkeys.map((monkey) => monkey)}</div>;
};

export default Monkeys;
