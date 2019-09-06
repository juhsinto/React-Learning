import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

	// only required when data should be assigned from Context's this.context property
	// static contextType = LanguageContext;

	
	render() {
		// const text = this.context === 'English' ? 'Submit' : 'Vorleggen';

		return (
			<button className="ui button primary">
			<LanguageContext.Consumer>
				{(value) => value === 'English' ? 'Submit' : 'Vorleggen'}
			</LanguageContext.Consumer>

			</button>
			);
	}
}

export default Button;