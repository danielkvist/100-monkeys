import React, { useContext } from 'react';

import { Context, actions } from '../context';

// TODO: Add styles when disabled
const Search = () => {
	const { state, dispatch } = useContext(Context);

	const handleChange = (e) => {
		dispatch({
			type: actions.updateSearch,
			payload: e.target.value.toLowerCase().split(' ').join(''),
		});
	};

	return (
		<div className="search">
			<input
				onChange={handleChange}
				value={state.searchTerm}
				className="search__input"
				type="text"
				placeholder="Write something to search"
				disabled={state.writing}
			/>
		</div>
	);
};

export default Search;
