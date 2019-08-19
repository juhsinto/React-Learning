import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';



const PageOne = () => {
	return (<div> PageOne  <Link to="/pagetwo"> page two </Link> </div>);
};

const PageTwo = () => {
	return (<div> PageTwo  <Link to="/"> page one </Link></div> );
};

const App = () => {
	return (<div> 
		<BrowserRouter>
			<div>
				<Route path="/" exact component={StreamList} />
				<Route path="/streams/new" exact component={StreamCreate} />
				<Route path="/streams/edit" exact component={StreamEdit} />
				<Route path="/streams/delete" exact component={StreamDelete} />
				<Route path="/streams/show" exact component={StreamShow} />
			</div>
		</BrowserRouter> 
	</div>);
}

export default App;