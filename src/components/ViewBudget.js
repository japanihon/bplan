import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: € 💶 {props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit Budget
			</button>
		</>
	);
};

export default ViewBudget;
