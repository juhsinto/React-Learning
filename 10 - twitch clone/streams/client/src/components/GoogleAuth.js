import React from 'react';

class GoogleAuth extends React.Component {

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({clientId: '272151565368-2lc7g4m6eojvhtbni7kriimjv5opdtcm.apps.googleusercontent.com', scope: 'email'});
		});
	}

	render() {
		return <div> Google Auth </div>;
	}
}

export default GoogleAuth;