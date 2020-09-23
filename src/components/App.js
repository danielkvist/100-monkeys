import React from 'react';

import Counter from './counter';
import Control from './control';
import Length from './length';
import Monkeys from './monkeys';

function App() {
	return (
		<div className="app">
			<header className="app__header">
				<Counter />
				<h1 className="title">100 Monkeys</h1>
				<Control />
			</header>
			<main>
				<Length />
				<Monkeys />
			</main>
		</div>
	);
}

export default App;
