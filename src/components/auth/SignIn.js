import React, { useState, useEffect } from 'react';
import './SignIn.css';
import userIcon from '../../assets/user-icon.png';
import useAuth from '../hooks/useAuth';
import Alert from '../utils/Alert';
import { useNavigate } from 'react-router';

function SignIn() {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showDashboard, setShowDashboard] = useState(false);
	const isAuthenticated = useAuth({ username, password });
	const [showAlert, setShowAlert] = useState(false);
	const [showPassTips, setShowPassTips] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowAlert(true);

		if (isAuthenticated) {
			setTimeout(() => {
				navigate("/dashboard");
			}, 1000);
		}
	};

	useEffect(() => {
		if (isAuthenticated) {
			setShowDashboard(true);
		} else if (!isAuthenticated) {
			setShowDashboard(false);
		}
	}, [isAuthenticated]);

	const handleShowPassTips = () => {
		setShowPassTips(!showPassTips);
	};

	return (

		<div className="container">
			<div className="row"></div>
			<div className="wrapper fadeInDown mt-3">
				<div id="formContent">

					{showAlert &&
						<Alert
							isAuthenticated={isAuthenticated}
						/>
					}

					{/* <!-- Tabs Titles --> */}

					{/* <!-- Icon --> */}
					<div className="fadeIn first mt-3">
						<img
							src={userIcon}
							alt="User Icon"
							className="user-icon"
						/>
					</div>

					{/* <!-- Login Form --> */}
					<form
						onSubmit={handleSubmit}
					>
						<input
							type="text"
							id="login"
							className="fadeIn second"
							name="login"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>

						<input
							type="text"
							id="password"
							className="fadeIn third"
							name="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>

						<input
							type="submit"
							className="fadeIn fourth mt-3"
							value="Log In"
						/>

					</form>

					{/* <!-- Remind Password --> */}
					<div id="formFooter">
						<a
							onClick={handleShowPassTips}
							className="underlineHover text-decoration-none credentials-tips"
						>
							{showPassTips ? "Hide" : "Show"} login credentials
						</a>

						{showPassTips ?
							<div className="login-credentials mt-3">
								<p>
									Username: <b>Admin</b>
								</p>
								<p>
									Password: <b>Admin1234</b>
								</p>
							</div>
							:
							""
						}

					</div>


				</div>
			</div>

		</div>
	);
}

export default SignIn;