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

	renderContent() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream?';
		} else {
			return `Are you sure you want to delete the stream with title "${this.props.stream.title}" ?`;
		}
	}

	render() {
		return (
			 <Modal title="Delete Stream"
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
				content={this.renderContent()} 
			 />
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamDelete);