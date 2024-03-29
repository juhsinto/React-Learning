import React from 'react';
import flv from 'flv.js';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

// const StreamShow = () => {
// 	return <div>StreamShow</div>;
// };

class StreamShow extends React.Component {

	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
	}

	componentDidMount() {

		
		const {id} = this.props.match.params;
		this.props.fetchStream(id);
		this.buildPlayer();
		// console.log(this.props.match.params.id);
	}

	componentDidUpdate() {
		this.buildPlayer();
	}

	// when the user navigates away from the component
	componentWillUnmount() {
		this.player.destroy();
	}

	buildPlayer() {
		if(this.player || !this.props.stream) {
			return;
		} else {
			const {id} = this.props.match.params;
			this.player = flv.createPlayer({
				type: 'flv',
				url: `http://localhost:8000/live/${id}.flv`
			});
			// console.log(this.videoRef);
			this.player.attachMediaElement(this.videoRef.current);
			this.player.load();
		}
	}

	render() {
		if(!this.props.stream) {
			return <div> Loading </div>
		} else {
			const { title, description } = this.props.stream;


		return (
			<div>
				<video ref={this.videoRef} style={{width: '100%'}} controls={true} />
				<h1> {title}</h1>
				<h5> {description}</h5>
			</div>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream})(StreamShow);