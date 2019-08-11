import React from 'react';

class SearchBar extends React.Component {

	state = { term: 'cars'};

	onFormSubmit = event => {
		event.preventDefault();
		// console.log(this.state.term);

		this.props.onSubmitMe(this.state.term);
	}

// before refactor (1)
//	onInputChange(event) {
//		console.log(event.target.value);
//	}

	render() {
// before refactor (1)
// return (<div className="ui segment"> 
// 		<form className="ui form">
// 			<div className="field">
// 				<label>Image Search</label>
// 				<input type="text" onChange={this.onInputChange} />
// 			</div>
// 		</form>
// 	</div>);

			return (<div className="ui segment"> 
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
					</div>
				</form>
			</div>);
	}
};

export default SearchBar;