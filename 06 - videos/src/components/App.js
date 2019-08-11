import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

	state = { videos: [], selectedVideo: null};

	componentDidMount() {
		this.onSearchTermSubmit('buildings');
	}

	onSearchTermSubmit = async (searchTerm) => {
		console.log("got from from the parent: " + searchTerm);
		const response = await youtube.get('/search', {
			params: {
				q: searchTerm
			}
		})

		// console.log(response);
		this.setState({videos : response.data.items, selectedVideo: response.data.items[0]});
	};

	onVideoSelect = (video) => {
		//console.log("from the app ", video);
		this.setState({selectedVideo: video});
	};

	render() {
		return (
			<div className="ui container"> 
				<SearchBar parent_child_interface={this.onSearchTermSubmit}/> 
					<div className="ui grid">
						<div className="ui row">
							<div className="eleven wide column">
								<VideoDetail video={this.state.selectedVideo} />
							</div>
							<div className="five wide column">
								<VideoList onVideoSelectFromChildItem={this.onVideoSelect} videos={this.state.videos} />
							</div>
						</div>
				</div>
			</div>);
	}
}

export default App;