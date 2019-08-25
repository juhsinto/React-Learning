import React from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamCreate extends React.Component {

	renderInput({input, label, meta}) {
		// console.log(formProps);
		// return <input onChange={formProps.input.onChange} 
		// 			value={formProps.input.value} />

		console.log(meta);

		return (
			<div className="field">
				<label> {label} </label>
				<input {...input} />
				<div>{meta.error}</div>
			</div>);
	}

	onSubmit(formValues) {
		console.log(formValues);
	}



	render() { 
		
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
				<Field name="title" label="enter title" component={this.renderInput}/>
				<Field name="description" label="enter description" component={this.renderInput}/>
				<button className="ui button primary"> Submit </button>
			</form>
		); 
	}
};

const validateValues = (formValues) => {
	const errors = {};

	// if title wasnt entered
	if (!formValues.title) {
		errors.title = 'the title wasnt enetered';
	}

	// if description wasnt entered
	if (!formValues.description) {
		errors.description = 'the title wasnt enetered';
	}

	return errors;
};

export default reduxForm({
	form: 'streamCreate',
	validate: validateValues
})(StreamCreate);