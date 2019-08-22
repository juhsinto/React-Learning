import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

	state = {isSignedIn: null}; //initialize the state variable

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init(
				{
			clientId: '272151565368-2lc7g4m6eojvhtbni7kriimjv5opdtcm.apps.googleusercontent.com', 
			scope: 'email'}
			).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				// this.setState({isSignedIn: this.auth.isSignedIn.get()});
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	// arrow function so context is bound to component
	onAuthChange = (isSignedIn) => {
		//this.setState({isSignedIn: this.auth.isSignedIn.get()});
		if (isSignedIn) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		// if (this.state.isSignedIn === null) {
		if	(this.props.isSignedIn === null) {
			return null;
		// } else if (this.state.isSignedIn) {
		} else if (this.props.isSignedIn) {
			// NOT onClick={this.onSignOut()} because - then it would execute as soon as rendered
			return <button onClick={this.onSignOutClick} className="ui red google button"> <i className="google icon"> </i>Sign Out </button>;
		} else {
			return <button onClick={this.onSignInClick} className="ui red google button"> <i className="google icon"> </i>Sign In with Google </button>;
		}
	};

	render() {
		return <div> {this.renderAuthButton()}</div>;
	};
}

const mapStateToProps = (state) => {
	return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);