import {combineReducers} from 'redux'; 

//Reducer
const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05'},
		{ title: 'random song', duration: '2:40'},
		{ title: 'all star', duration: '5:30'},
		{ title: 'i dont want it that way', duration: '4:10'},
	];
};

const selectedSongReducer = (selectedSong=null, action) => { //initially selectedSong is null
	if (action.type === 'SONG_SELECTED') {
		return action.payload
	} 
	
	return selectedSong	
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});

