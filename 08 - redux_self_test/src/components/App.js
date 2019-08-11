import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';


const App = (props) => {
	return (<div className="ui container"> 
				<button onClick={props.increment} > Increment </button>
				<button onClick={props.decrement} > Decrement </button>
				Counter: {props.counter}
			</div>);
};

// get the state and then map it to the props of this component
const mapStateToProps = (state) => {
	return { counter: state.counter };
}

// connect the component to the state/props interface with the actions (in 2nd arg)
export default connect(mapStateToProps, {increment, decrement})(App);