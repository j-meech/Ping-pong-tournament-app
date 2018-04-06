import React, { Component } from 'react';
import { Button } from './Button';

export class AddPlayers extends Component {
	constructor(props) {
	  super(props);
	this.state = { 
		value: "",
		nameExists: false,
	};
	this.update = this.update.bind(this);
	this.submit = this.submit.bind(this);
	}

	update(e) {
		const { players } = this.props;
		let nameExists = false;
		for (let i = 0; i < players.size; i++) {
			if (e.target.value === players.get(i).get('name')) {
				nameExists = true;
			}
		}
		this.setState({ value: e.target.value });
		this.setState({ nameExists: nameExists });
	}

	submit(e) {
		e.preventDefault();
		const data = this.state.value;
		this.props.onSubmit(data);
		this.setState({
			value: "",
		});
	}

	render() {
		const { players } = this.props;
		const disabled = players.size >= 8 || this.state.nameExists;
		const buttonClassName = disabled ? "btn btn-disabled" : "btn";
		return (
			<form onSubmit={ this.submit } disabled={disabled}>
        		<input onChange={ this.update } value={ this.state.value } type="text" placeholder="Player's name" disabled={this.props.disabled} maxLength="8" />
        		<Button className={buttonClassName} buttonName="Add Player" disabled={disabled}/>
        		{ this.state.nameExists ? 
        			<p>*player already exists</p>
        			: null
        		}
      		</form>
		);
	}
}
