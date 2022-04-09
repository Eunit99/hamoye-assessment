import { useState, useEffect } from 'react';
import { constants } from '../constant/constants';
import { useHistory } from "react-router-dom";


function useAuth({ username, password }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { USERNAME, PASSWORD } = constants;

	useEffect(() => {
		if (username === USERNAME && password === PASSWORD) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, [username, password, USERNAME, PASSWORD]);

	return isAuthenticated;
}

export default useAuth;