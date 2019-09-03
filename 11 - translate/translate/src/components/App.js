import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {

	state = {
		language: 'English'
	};

	onLanguageChange = (language) => {
		this.setState({language});
	}

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i className="flag us" onClick={() => this.onLanguageChange("English")}/>
					<i className="flag nl" onClick={() => this.onLanguageChange("Dutch")}/>
				</div>
				<UserCreate />
			</div>)
	}
}

export default App;