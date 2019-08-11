// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = function() {

	const buttonText = "click me";

	function getText() {
		const myText = "testing this";
		document.querySelector("#name").setAttribute("value", myText);
	}

	return (
		<div>
			<label for="name">Enter name: </label>
			<input id="name" type="text" />
			<button onClick={getText} style={{backgroundColor: 'blue', color: 'white'}}>
				{buttonText}
			</button>
		</div>
	);
}

// take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector("#root")
);


