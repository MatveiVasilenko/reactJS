import React from 'react';
//import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Menu from 'modules/Menu';
import Home from 'routes/Home';
import Posts from 'routes/Posts';
import SignIn from 'routes/SignIn';


export default React.memo(() => (
	<>
		<Menu />
		<Switch>
			<Route path="/posts">
				<Posts/>
			</Route>
			<Route path="/signin">
				<SignIn/>
			</Route>
			<Route path="/">
				<Home/>
			</Route>
		</Switch>
	</>
));

