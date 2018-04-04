import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/css/index.css';
import reducer from './data/reducer';
import initial from './data/initial';
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>,
	document.getElementById('root'),
);