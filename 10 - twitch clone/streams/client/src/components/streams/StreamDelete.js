import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';
import history from '../../history';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {

		const id = this.props.match.params.id;

		return (
			<React.Fragment>
				<button onClick={() => this.props.deleteStream(id) } 
					className="ui button negative">Delete</button>
				<Link to="/" className="ui button">Cancel</Link>
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

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);