import './SeasonDisplay.css'; //webpack will do the css part
import React from 'react';


// after refactor (2)
const seasonConfig = {
	summer: {
		// text: 'Let\'s Hit the beach',
		text: 'sunny af',
		iconName: 'sun'
	},
	winter: {
		text: 'brr its cold',
		iconName: 'snowflake'
	}
}

const getSeason = (lat, month) => {

	// if month is between april and sept
	if(month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter'; // if lat is >0 (above equator) 

	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
}

const SeasonDisplay = (props) => {

	const season = getSeason(props.lat, new Date().getMonth());

	// after refactor (1)
	// const text = season === 'winter' ? 'Brr its chilly' : 'Hit the beach';
	// const icon = season === 'winter' ? 'snowflake' : 'sun';

	// after refactor (3)
	const {text, iconName} = seasonConfig[season];

	return (
		// <div> Lat: {props.lat} </div>
		// <div> Season: {season} </div>

		<div className={`season-display ${season}`}>
			<i className={`${iconName} icon-left massive icon`} />
			
			<h1> Message: {text} </h1>
			<i className={`${iconName} icon-right massive icon`} />
		</div>
	);
};

export default SeasonDisplay;