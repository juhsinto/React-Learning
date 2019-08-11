import React from 'react';
import SongList from './SongList.js';
import SongDetail from './SongDetail.js';
//import {selectSong} from '../actions/index.js'; // {} because named export
// or import actions from '../actions'; //since webpack by default imports index.js

const App = () => {
	return (<div className="ui container grid"> 
				<div className="ui row">
					<div className="column eight wide">
						<SongList />
					</div>
					<div className="column eight wide">
						<SongDetail />
					</div>
				</div>
		 	</div>);
};

export default App;