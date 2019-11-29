import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {
	newStore,
	posts,
	nav,
	menu,
	StoreProvider,

} from 'Services/Store';
import App from './App.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import GlobalStyles from './GlobalStyles.js';

newStore({
	posts,
	nav,
	menu
});


//console.log(getState());
ReactDOM.render(
	<StoreProvider>
	<BrowserRouter>
		<App />
		<GlobalStyles />
	</BrowserRouter>
	</StoreProvider>, document.getElementById('root'));
