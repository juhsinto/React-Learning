import React from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamCreate extends React.Component {

	renderInput({input, label}) {
		// console.log(formProps);
		// return <input onChange={formProps.input.onChange} 
		// 			value={formProps.input.value} />
		return (
			<div className="field">
				<label> {label} </label>
				<input {...input} />
			</div>);
	}

	render() { 
		
		return (
			<form className="ui form">
				<Field name="title" label="enter title" component={this.renderInput}/>
				<Field name="description" label="enter description" component={this.renderInput}/>
			</form>
		); 
	}
};

export default reduxForm({
	form: 'streamCreate'
})(StreamCreate);