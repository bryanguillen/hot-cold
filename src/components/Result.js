import React from 'react';

export default function Result (props) {
	return (
		<div className={`result-container ${props.resultClass}`}>
			<span>{props.result}</span>
		</div>	
	);
} 