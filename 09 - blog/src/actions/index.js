import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPosts = async () => {
	return async function(dispatch, getState) {
		const response = await jsonPlaceholder.get('/posts');

		// return {
		// 	type: 'FETCH_POSTS',
		// 	payload: response
		// };
		dispatch({type: 'FETCH_POSTS', payload: response});
	}
	
};