import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}

	render() {
		const user = this.props.user;
		if (!user) {
			return null;
		}

		return <div className="header"> {user.name} </div>
	}
}

const mapStateToProps = (state, ownProps) => {
	// since we want to get that one user in this method
	// extract by doing computation on redux state from the 
	// props coming into the component to mapStatetoProps function
	return {user: state.users.find((user) => user.id === ownProps.userId)};
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(UserHeader);