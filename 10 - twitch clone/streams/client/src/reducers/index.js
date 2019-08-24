import {combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
	// replaceMe: () => 5 //placeholder reducer!
	auth: authReducer,
	form: formReducer
});