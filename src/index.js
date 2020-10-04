import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

import './index.css';
import ContextProvider from './context';
import App from './components/App';

render(
	<ContextProvider>
		<App />
	</ContextProvider>,
	document.getElementById('root')
);
