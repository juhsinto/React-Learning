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

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div> I dont know if we are signed in </div>;
		} else if (this.state.isSignedIn) {
			return <div> I am signed in. </div>;
		} else {
			return <div> I am not signed in </div>;
		}
	};

	render() {
		return <div> Google Auth {this.renderAuthButton()}</div>;
	};
}

export default GoogleAuth;