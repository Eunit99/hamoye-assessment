import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import './App.css';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/admin/Dashboard';
import useAuth from './components/hooks/useAuth';

function App() {

	const isAuthenticated = useAuth("", "");

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<SignIn
						isAuthenticated={isAuthenticated} />} />

					<Route exact path='/signin' element={<SignIn
						isAuthenticated={isAuthenticated} />} />

					<Route exact path='/dashboard' element={<Dashboard
						isAuthenticated={isAuthenticated} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
