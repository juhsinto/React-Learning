import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component {

	renderError({error, touched}) {
		if(touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
				);
		}
	}

	renderInput = ({input, label, meta}) => {
		// console.log(formProps);
		// return <input onChange={formProps.input.onChange} 
		// 			value={formProps.input.value} />

		// console.log(meta);
		const classNameWithError = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			<div className={classNameWithError} >
				<label> {label} </label>
				<input autoComplete="off" {...input} />
				{this.renderError(meta)}
			</div>);
	}

	onSubmit = (formValues) => {
		// console.log(formValues);
		this.props.createStream(formValues);
	}



	render() { 
		
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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
		errors.title = 'the title wasnt Entered';
	}

	// if description wasnt entered
	if (!formValues.description) {
		errors.description = 'the desc wasnt entered';
	}

	return errors;
};

const formWrapped = reduxForm({
	form: 'streamCreate',
	validate: validateValues
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);