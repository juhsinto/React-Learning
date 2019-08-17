import _ from 'lodash';
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
	dispatch({type: 'FETCH_POSTS', payload: response.data});
};


export const fetchUser = (userId) => dispatch => {
	_fetchUser(userId, dispatch);
};


// _ means private
const _fetchUser = _.memoize(async (userId, dispatch) => {
	const response = await jsonPlaceholder.get('/users/' + userId);
	// const resonse = await jsonPlaceholder.get(`/users/${userId}`);
	dispatch({type: 'FETCH_USER', payload: response.data})
});

