import _ from 'lodash';

import {
	FETCH_STREAM,
	FETCH_STREAMS,
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
	switch(action.type) {
		
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload};

		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload};

		// case FETCH_STREAMS:
		// 	return { ...state, [action.payload.id]: action.payload};

		case EDIT_STREAM:
			// traditional
			// const newState = { ...state };
			// newState[action.payload.id] = action.payload;
			// return newState;	

			// using ES2015 key interpolation
			return { ...state, [action.payload.id]: action.payload};

		case DELETE_STREAM:
			return _.omit( ...state, payload: action.payload);

		
		default:
			return state;
	}
}