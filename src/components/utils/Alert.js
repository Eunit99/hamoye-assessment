import React, { useState, useEffect } from 'react';

function Alert({ isAuthenticated }) {
	const [alertText, setAlertText] = useState("");
	const [alertClassName, setAlertClassName] = useState("");

	useEffect(() => {
		const successText = "Authentication success";
		const dangerText = "Authentication failed";
		const successClassName = "alert-success";
		const dangerClassName = "alert-danger";

		if (isAuthenticated ? setAlertText(successText) : setAlertText(dangerText));

		if (isAuthenticated ? setAlertClassName(successClassName) : setAlertClassName(dangerClassName));


	}, [isAuthenticated]);

	return (
		<>
			<div className={`alert ${alertClassName}`} role="alert">
				{alertText}
			</div>
		</>
	);
}

export default Alert;