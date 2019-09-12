import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {

	const [resources, setResources] = useState([]);
	
	const fetchResource = async (resource) => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
		// this.setState({resources: response.data});
		setResources(response.data);
	}

	// you can add an argument (prevProps) to this method - so it is aware of the previous props
	// to avoid a recurssive call
	// async componentDidUpdate(prevProps) {
	// 	if (prevProps.resource != this.props.resource) {
	// 		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
	// 		this.setState({resources: response.data});
	// 	}
	// }
	useEffect(() => {
		fetchResource(resource);
	}, [])

	
	return <div>{resources.length}</div>
	
}

export default ResourceList;