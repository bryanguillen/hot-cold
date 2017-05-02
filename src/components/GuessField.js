import React from 'react';

export default function GuessField (props) {
	return (
		<div>
			<input type="number" name="guess" placeholder="17" 
			onChange={props.onChange} />
			<button onClick={props.onClick}>Guess</button>
		</div>
	);
}