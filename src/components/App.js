import React from 'react';

import Counter from './counter';
import Control from './control';
import Search from './search';
import Length from './length';
import Monkeys from './monkeys';

function App() {
	return (
		<div className="app">
			<header className="app__header">
				<Counter />
				<h1 className="title">Monkey Writers</h1>
				<Control />
			</header>
			<main>
				<Search />
				<Length />
				<Monkeys />
			</main>
		</div>
	);
}

export default App;
