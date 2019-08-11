// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = function() {

	const buttonText = "click me";

	function getText() {
		return "testing this";
	}

	return (
		<div>
			<label for="name">Enter name: </label>
			<input id="name" type="text" />
			<button style={{backgroundColor: 'blue', color: 'white'}}>
				{getText()}
			</button>
		</div>
	);
}

// take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector("#root")
);


