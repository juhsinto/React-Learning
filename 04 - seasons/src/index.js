import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = props => {
	
// 	return (<div> 
// 		<SeasonDisplay />
// 	 </div>);
// };


class App extends React.Component {

	// initiatlizing the state in the constructor
	constructor(props) {
		console.log("1 -> from constructor")
		super(props);

		//the only time you do 'this.state' directly is in the constructor after super
		this.state = {
			lat: null,
			errorMessage: ''
		};

		
	}

	componentDidMount() {

		console.log("3 -> from componentDidMount()")
		window.navigator.geolocation.getCurrentPosition(
			// after refactor
			position => this.setState({lat : position.coords.latitude}),
			error => this.setState({errorMessage: error.message})


			// before refactor
			// (position) => {
			// 	//set state to update the state
			// 	this.setState({lat : position.coords.latitude});
			// },
			// (error) => {
			// 	this.setState({errorMessage: error.message});
			// }
		);
	}

	// helper function to avoid having multiple returns in the render method
	renderContent() {
		console.log("2 -> from render()")
		// return (
		// 	<div> 
		// 		Latitude: {this.state.lat}
		// 		<br />
		// 		Error: {this.state.errorMessage}
		// 	</div>
		// );

		// refactoring with conditional rendering
		if (this.state.errorMessage && !this.state.lat) {
			return <div> Error: {this.state.errorMessage} </div>
		} 

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat}/>
		}

		return <Spinner message="Please accept location request"/>;
	}

	// to use a react class, you must use this method
	render() {
	
		return (
				<div className="border red">
					{this.renderContent()}
				</div>
			);
	}
}

ReactDOM.render(<App/>, document.querySelector('#root') );