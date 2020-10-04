import React, { createContext, useReducer } from 'react';

const actions = {
	addMonkey: 'ADD_MONKEY',
	removeMonkey: 'REMOVE_MONKEY',
	startWriting: 'START_WRITING',
	stopWriting: 'STOP_WRITING',
	updateSearch: 'UPDATE_SEARCH',
};

const initialState = {
	monkeys: 5,
	writing: false,
	searchTerm: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.addMonkey:
			return {
				...state,
				monkeys: state.monkeys + 1,
			};
		case actions.removeMonkey:
			return {
				...state,
				monkeys: state.monkeys - 1,
			};
		case actions.startWriting:
			return {
				...state,
				writing: true,
			};
		case actions.stopWriting:
			return {
				...state,
				writing: false,
			};
		case actions.updateSearch:
			return {
				...state,
				searchTerm: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};

const Context = createContext(initialState);

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
	);
};

export default ContextProvider;
export { actions, Context, ContextProvider };
