import React from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import 'normalize.css';

import './index.css';
import App from './components/App';

render(
	<React.StrictMode>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);
