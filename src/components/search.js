import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { writingState, searchState } from '../recoil/atoms';

const Search = () => {
	const writing = useRecoilValue(writingState);
	const [search, setSearch] = useRecoilState(searchState);

	const handleChange = (e) => {
		setSearch(e.target.value.toLowerCase().split(' ').join(''));
	};

	return (
		<div className="search">
			<input
				onChange={handleChange}
				value={search}
				className="search__input"
				type="text"
				placeholder="Write something to search"
				disabled={writing}
			/>
		</div>
	);
};

export default Search;
