export default (state = {name: 'Test Name'}, action) => {

	if (action.type === 'CHANGE_NAME') {
		state.name = action.payload;
	}
	return { ...state };
};