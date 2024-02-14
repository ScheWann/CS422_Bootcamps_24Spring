import React, { useState } from "react";

function Parent() {
	const [fName, setfName] = useState("firstName");
	const [lName, setlName] = useState("LastName");
	return (
		<>
			<div>This is a Parent component</div>
			<br />
			<ChildA fName={fName} lName={lName} />
		</>
	);
}

function ChildA({ fName, lName }) {
	return (
		<>
			This is ChildA Component.
			<br />
			<ChildB fName={fName} lName={lName} />
		</>
	);
}

function ChildB({ fName, lName }) {
	return (
		<>
			This is ChildB Component.
			<br />
			<ChildC fName={fName} lName={lName} />
		</>
	);
}

function ChildC({ fName, lName }) {
	return (
		<>
			This is ChildC component.
			<br />
			<h3> Data from Parent component is as follows:</h3>
			<h4>{fName}</h4>
			<h4>{lName}</h4>
		</>
	);
}

export default Parent;
