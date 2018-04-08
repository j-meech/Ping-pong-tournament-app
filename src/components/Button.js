import React from 'react';

export const Button = ({className, buttonName, onClick, disabled}) => (
	<button 
		onClick={ onClick } 
		className={ className } 
		disabled={ disabled }>
		{ buttonName }
	</button>
);
