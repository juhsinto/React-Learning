import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
	// replaceMe: () => 5 //placeholder reducer!
	auth: authReducer
});