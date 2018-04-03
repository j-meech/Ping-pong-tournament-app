import React, { Component } from 'react';
import { Button } from './Button';

export class AddPlayers extends Component {
	constructor(props) {
	  super(props);
	this.state = { value: ""};
	this.update = this.update.bind(this);
	this.submit = this.submit.bind(this);
	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	submit(e) {
		e.preventDefault();
		let data = this.state.value;
		this.props.onSubmit(data);
		this.setState({
			value: "",
		});
	}

	render() {
		const { disabled } = this.props;
		
		return (
			<form onSubmit={ this.submit } disabled={disabled}>
        		<input onChange={ this.update } value={ this.state.value } type="text" placeholder="Player's name" disabled={this.props.disabled}/>
        		<Button className="btn" buttonName="Add Player" disabled={disabled}/>
      		</form>
		);
	}
}
