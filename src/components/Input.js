import React from 'react';

export const Input = () => {	
		return (
			<form onSubmit={ onSubmit } className="form-group">
		    	<input className="form-control" type="text" value={value} onChange={onChange}/>
			</form>
		);
}
