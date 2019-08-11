import {combineReducers} from 'redux';

// the reducer takes an action, and if the action matchers the reducer - then it will do something (and return the value)
const count = (counter=0, action) => { // the default value is set here
	if (action.type === 'INCREMENT') {
		return counter + 1;
	}

	else if (action.type === 'DECREMENT') {
		return counter - 1;
	}

	else {
		return counter;
	}
}

// export the above reducer as 'counter'
export default combineReducers({
	counter: count
});