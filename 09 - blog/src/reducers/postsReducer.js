export default (state = [], action) => {
	// return 'adfas'

	// if (action.type === 'FETCH_POSTS') {
	// 	return action.paylod;
	// } 

	// return state;

	switch(action.type) {
		case 'FETCH_POSTS':
			return action.payload;
		default:
			return state;
	}			
};