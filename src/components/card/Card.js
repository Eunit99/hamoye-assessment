import React, { useState, useEffect } from 'react';
import { allAirportData } from '../../data/data';



function Card(props) {

	const [currentTime, setCurrentTime] = useState(new Date());
	const [fetchData, setFetchData] = useState("");
	const timeStamp = currentTime.getTime() / 1000;

	useEffect(() => {
		// const fetchURL = "http://localhost:8888/flight";
		// const fetchURL = `https://opensky-network.org/api/flights/all?begin=${timeStamp}&end=${timeStamp}`;
		const fetchURL = "https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800";

		// console.log(fetchURL);


		fetch(fetchURL).then((res) => {
			if (!res.ok) {
				console.error("Error while trying to fetch");
				throw "Error occurred while trying to fetch result";
			}
			try {
				res.json()
					.then((data) => {
						console.log(data);
						setFetchData(data);
					});
			}
			catch (err) {
				console.error(err);
			}
		});
	}, [timeStamp]);

	useEffect(() => {
		setCurrentTime(currentTime);
	}, [currentTime]);



	return (
		<>
			{
				allAirportData.map((card, index) => (
					<div className="col col-12 col-md-3" key={index}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title title p-3">Airport: <b>{card.estDepartureAirport} </b> </h5>
								<p className="card-text">Time <b>{currentTime.toUTCString()} </b></p>
								<p className="center">Arriving <b>{card.arrivalAirportCandidatesCount} </b></p>
								<p className="center">Departing <b>{card.departureAirportCandidatesCount} </b></p>
							</div>
						</div>
					</div>
				))
			}
		</>
	);
}

export default Card;