import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import reducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// create a store from the reducer
const store = createStore(reducers);

ReactDOM.render(
	// pass the store as a 'state' to the App component
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
)
