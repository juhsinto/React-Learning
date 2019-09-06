import React from 'react';


// default value is set here
const Context = React.createContext('English');


export class LanguageStore extends React.Component {
	state = { language: 'English'};

	onLanguageChange = (language) => {
		this.setState({language});
	}

	render() {
		return (
				<Context.Provider value={{...this.state, onLanguageChange}} >
					{this.props.children}
				</Context.Provider>
			)
	}
}

