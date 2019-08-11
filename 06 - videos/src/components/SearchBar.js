import React from 'react';

class SearchBar extends React.Component {

	state = {searchTerm: 'asdfasd'};

	onInputChange = (e) => {
		this.setState({searchTerm: e.target.value});
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		// console.log("from the child");
		this.props.parent_child_interface(this.state.searchTerm);
	}

	render() {
		return (
			<div className="search-bar ui segment"> 
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Video Label</label>
						<input onChange={this.onInputChange} value={this.state.searchTerm} type="text" />
					</div>
				</form>
			</div>
			);
	}
}

export default SearchBar;