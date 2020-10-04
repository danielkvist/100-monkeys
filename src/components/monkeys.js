import React, { useState, useEffect, useContext } from 'react';
import copy from 'copy-to-clipboard';

import { Context, actions } from '../context';
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
	const { state, dispatch } = useContext(Context);

	useEffect(() => {
		if (!state.writing) return;

		const interval = setInterval(() => {
			setText((text) => (text += genRandomString()));
		}, 250);

		return () => clearInterval(interval);
	}, [state.writing]);

	useEffect(() => {
		if (state.searchTerm.length >= text || state.searchTerm === '') return;

		setMatch(text.includes(state.searchTerm));
	}, [text, state.searchTerm]);

	return (
		<div
			onClick={() => {
				dispatch({ type: actions.stopWriting });
				copy(text);
			}}
		>
			<MonekyMatch match={match} />
			<MonkeyBadge writing={state.writing} />
			<span className="monkey" role="img" aria-label="monkey"></span>
		</div>
	);
};

const Monkeys = () => {
	const [monkeys, setMonkeys] = useState([]);
	const { state } = useContext(Context);

	useEffect(() => {
		setMonkeys([<Monkey key={0} />]);
	}, []);

	useEffect(() => {
		if (monkeys.length === state.monkeys) return;

		if (monkeys.length < state.monkeys) {
			setMonkeys((monkeys) => [...monkeys, <Monkey key={monkeys.length} />]);
		} else {
			setMonkeys((monkeys) => [...monkeys].slice(0, monkeys.length - 1));
		}
	}, [state.monkeys, monkeys.length]);

	return <div className="monkeys">{monkeys.map((monkey) => monkey)}</div>;
};

export default Monkeys;
