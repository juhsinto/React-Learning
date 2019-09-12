import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

	// state = {resource: 'posts'}
	// array destructuring, use 1st and 2nd element from the array and assign to variables
	const [resource, setResource] = useState('posts');
	
		return (
				<div> 
					<UserList />
					<div>
						<button onClick={() => setResource('posts')}>Posts</button>
						<button onClick={() => setResource('todos')}>Todos</button>
					</div>
					<ResourceList resource={resource} />
				</div>
			)
	
}

export default App;