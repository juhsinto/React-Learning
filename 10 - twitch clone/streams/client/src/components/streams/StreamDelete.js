import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		return (
			<React.Fragment>
				<button className="ui button negative">Delete</button>
				<button className="ui button">Cancel</button>
			</React.Fragment>
		);
	}

	render() {
		return (
		<div>
			StreamDelete <Modal title="Delete Stream"
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
				content="Are you sure you want to delete this stream?"/>
		</div>
		);
	}
}

export default connect(null, {fetchStream})(StreamDelete);