import React, { Component } from 'react';

export class RoundTwo extends Component {
	
	render() {
		
		return (
			<div className="grid-container round-two">
				<ul className="tournament-grid round-two">
					<li className="path-u one"></li>
					<li className="path-u two"></li>
					<li className="path-i one"></li>
					<li className="path-i two"></li>
					<li className="path-l one"></li>
					<li className="path-l two"></li>
				</ul>
			</div>
		);
	}
}
