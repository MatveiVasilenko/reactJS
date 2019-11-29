export default (state = {
	links: [{
		path: '/',
		title: 'Main'
	},{
		path: '/posts',
		title: 'Posts'
	}, {
		path: '/signin',
		title: 'SignIn'
	}
	],
}, action) => {
	return { ...state };
};