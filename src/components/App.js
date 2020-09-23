import React from 'react';

import Counter from './counter';
import Control from './control';
import Monkeys from './monkeys';

function App() {
	return (
		<div className="app">
			<header className="app__header">
				<Counter />
				<Control />
			</header>
			<main>
				<Monkeys />
			</main>
		</div>
	);
}

export default App;
