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


// (4) before memoization
export const fetchUser = (userId) => async dispatch => {
	const response = await jsonPlaceholder.get('/users/' + userId);
	// const resonse = await jsonPlaceholder.get(`/users/${userId}`);
	dispatch({type: 'FETCH_USER', payload: response.data})
};

// (5) after memoization
// export const fetchUser = (userId) => dispatch => {
// 	_fetchUser(userId, dispatch);
// };


// // _ means private
// const _fetchUser = _.memoize(async (userId, dispatch) => {
// 	const response = await jsonPlaceholder.get('/users/' + userId);
// 	// const resonse = await jsonPlaceholder.get(`/users/${userId}`);
// 	dispatch({type: 'FETCH_USER', payload: response.data})
// });


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	
	await dispatch(fetchPosts());
	
	// // will get all the 'userId' keys from the state's posts
	// const userId_array = _.map(getState().posts, 'userId')

	// // will dedup, and only keep unique
	// const userIds_array_unique = _.uniq(userId_array);

	// userIds_array_unique.forEach(id => dispatch(fetchUser(id)));

	// after refactor using ._chain()
	const userIds_deduplicated = _.chain(getState().posts)
									.map('userId')
									.uniq()
									.forEach(id => dispatch(fetchUser(id)))
									.value()
	


};