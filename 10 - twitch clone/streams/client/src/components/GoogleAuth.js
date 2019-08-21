import React from 'react';

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
				this.setState({isSignedIn: this.auth.isSignedIn.get()});
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	// arrow function so context is bound to component
	onAuthChange = () => {
		this.setState({isSignedIn: this.auth.isSignedIn.get()});
	};

	onSignIn = () => {
		this.auth.signIn();
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
			// NOT onClick={this.onSignOut()} because - then it would execute as soon as rendered
			return <button onClick={this.onSignOut} className="ui red google button"> <i className="google icon"> </i>Sign Out </button>;
		} else {
			return <button onClick={this.onSignIn} className="ui red google button"> <i className="google icon"> </i>Sign In with Google </button>;
		}
	};

	render() {
		return <div> {this.renderAuthButton()}</div>;
	};
}

export default GoogleAuth;