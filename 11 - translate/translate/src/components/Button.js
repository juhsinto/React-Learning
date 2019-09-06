import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component {

	// only required when data should be assigned from Context's this.context property
	// static contextType = LanguageContext;

	
	render() {
		// const text = this.context === 'English' ? 'Submit' : 'Vorleggen';

		return (
			<ColorContext.Consumer>
				{(color) => 
					<button className={`ui button ${color}`}>
					<LanguageContext.Consumer>
						{(value) => value === 'English' ? 'Submit' : 'Vorleggen'}
					</LanguageContext.Consumer>

					</button>
				}
				
			</ColorContext.Consumer>
			);
	}
}

export default Button;