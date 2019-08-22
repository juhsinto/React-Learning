import React from 'react';
import ReactDOM from 'react-dom';

// redux stuff
import {Provider } from 'react-redux';
import {createStore} from 'redux';

import {applyMiddleware, compose} from 'redux';


import App from './components/App';
import reducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
		composeEnhancers(applyMiddleware())
	);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);