import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

	state = {
		images: []
	};

	onSearchSubmitConsoleLog = async (term) => {
		// console.log(term);
		const response = await unsplash.get('/search/photos',{
			params: {
				query: term
			}
		});

		// console.log(response.data.results);	
		// console.log(this);
		this.setState({images: response.data.results});
	}

	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}> 
				<SearchBar onSubmitMe={this.onSearchSubmitConsoleLog} /> 
				<ImageList imageResult = {this.state.images} />
			</div>);
	};

	
}

export default App;