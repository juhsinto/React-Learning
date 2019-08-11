// Action creator
export const selectSong = (song) => {
	// return an action
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

// no export default - named export, see export keyword above