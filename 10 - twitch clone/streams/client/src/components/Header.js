import React from 'react';
import GoogleAuth from './GoogleAuth';
import {Link} from 'react-router-dom';
// CSS is from semantic ui -> header subsection

const Header = () => {
	return (
			<div className="ui secondary pointing menu">
				<Link to="/" className="item">Streamer</Link>

				<div className="right menu">
					<Link to="/" className="item">All Streams</Link>
					<Link to="/" className="item">Streamer</Link>
					<GoogleAuth />
				</div>
			</div>
		)
}

export default Header;