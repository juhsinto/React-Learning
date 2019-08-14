export default (state = [], action => {
	// return 'adfas'
	switch(state) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}			
};