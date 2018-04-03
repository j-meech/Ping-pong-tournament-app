import React, { Component } from 'react';

export class Input extends Component {
	render() {
		return (
			<form onSubmit={ onSubmit } className="form-group">
		    	<input className="form-control" type="text" value={value} onChange={onChange}/>
			</form>
		);
	}
}
