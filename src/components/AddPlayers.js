import React, { Component } from 'react';
import { Button } from './Button';

export class AddPlayers extends Component {
	constructor(props) {
		super(props);
		// use local state to store input value so the input field can be dynamically updated, 
		// use also validate to validate players name
		this.state = { 
			value: "",
			nameExists: false,
			emptyName: true,
		};
		this.update = this.update.bind(this);
		this.submit = this.submit.bind(this);
	}

	// onChange update updates the input field displaying as the user types
	update(e) {
		const { players } = this.props;
		let nameExists = false;
		let emptyName = false;
		// check the players array to see if the inputed name already exists before it is allowed to be added,
		// there can only be unique player names
		for (let i = 0; i < players.size; i++) {
			if (e.target.value === players.get(i).get('name')) {
				nameExists = true;
			}
		}
		// check that the input field isn't empty or just spaces, don't allow empty field to be submitted
		if (!e.target.value.replace(/^\s+/g, '').length || !e.target.value.length) {
			emptyName = true;
		}
		// onChange update the value of the input field via local state
		this.setState({ value: e.target.value });
		this.setState({ nameExists: nameExists });
		this.setState({ emptyName: emptyName });
	}

	// on submit call onsubmit prop from container and send the players name as data
	submit(e) {
		e.preventDefault();
		const data = this.state.value;
		this.props.onSubmit(data);
		// reset the local state once a player has been submitted
		this.setState({
			value: "",
			emptyName: true,
		});
	}

	render() {
		// get the players list from the store as prop from container
		const { players } = this.props;
		// decide if players name can be submitted, disabled if name already exists in array or name is blank
		const disabled = players.size >= 8 || this.state.nameExists || this.state.emptyName;
		// class name for styling dependant on whether button is diabled or not
		const buttonClassName = disabled ? "btn btn-disabled add" : "btn add";
		return (
			<form 
				onSubmit={ this.submit } 
				disabled={disabled}>
        		<input 
        			onChange={ this.update } 
        			value={ this.state.value } 
        			type="text" 
        			placeholder="Player's name" 
        			disabled={ players.size >= 8 } 
        			maxLength="8"/>
        		<Button 
        			className={ buttonClassName } 
        			buttonName="Add Player" 
        			disabled={ disabled }/>
        		{ this.state.nameExists ? 
        			<p>*player already exists</p>
        			: null
        		}
      		</form>
		);
	}
}
