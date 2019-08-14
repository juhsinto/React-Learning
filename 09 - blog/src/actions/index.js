import jsonPlaceholder from '../apis/jsonPlaceholder';

// (1)
// export const fetchPosts = () => {
		// return {
		// 	type: 'FETCH_POSTS',
		// 	payload: response
		// };

// (2)
// 	return async function(dispatch, getState) {
// 		const response = await jsonPlaceholder.get('/posts');
// 		dispatch({type: 'FETCH_POSTS', payload: response});
// 	}
	
// };

// (3) shortened
export const fetchPosts = () => async dispatch => { 
	const response = await jsonPlaceholder.get('/posts');
	dispatch({type: 'FETCH_POSTS', payload: response});
};