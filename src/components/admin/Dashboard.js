import React from 'react';
import './Dashboard.css';
import Card from '../card/Card';
import { useNavigate } from 'react-router';


function Dashboard({ isAuthenticated, setIsAuthenticated }) {
	const navigate = useNavigate();


	const handleSignOut = (e) => {
		
		e.preventDefault();
		console.log(`isAuthenticated: ${isAuthenticated}`);
		setTimeout(() => {
			navigate("/signin");
		}, 1000);
	};


	return (
		<>
			<nav className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
				<a className="navbar-brand col-sm-3 col-md-2 mr-0 p-3" href="#">Hamoye</a>
				<ul className="navbar-nav px-3">
					<li className="nav-item text-nowrap">
						<a onClick={handleSignOut} className="nav-link sign-out">Sign out</a>
					</li>
				</ul>
			</nav>
			<div className="container-fluid">
				<div className="row">
					<nav className="col-md-2 d-none d-md-block sidebar">
						<div className="sidebar-sticky">
							<ul className="nav flex-column">
								<li className="nav-item">
									<a className="nav-link active" href="#">
										<i className="zmdi zmdi-widgets"></i>
										Dashboard <span className="sr-only"></span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="zmdi zmdi-file-text"></i>
										Orders
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="zmdi zmdi-airplane"></i>
										Flights
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="zmdi zmdi-accounts"></i>
										Customers
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="zmdi zmdi-chart"></i>
										Reports
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="zmdi zmdi-face"></i>
										Passengers
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 my-3">
						<div className="projects">
							<div className="projects-inner">
								<header className="projects-header">
									<div className="title">All Airports</div>
									<div className="count">| 400+ Planes</div>
									<i className="zmdi zmdi-airplane"></i>
								</header>

								<div className="container">
									<div className="row">
										<Card />
									</div>
								</div>

							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Dashboard;