import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export default withRouter(connect((state, props) => {
	return {

	};
})(React.memo(({history}) => {
	return <b>Home page</b>
})));
