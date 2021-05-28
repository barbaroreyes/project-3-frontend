import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TripCard from "../components/UserTripCard";
// import { Link } from "react-router-dom";

const AgencyProfile = ({ url, handleAddBooking }, props) => {
	console.log("agency profile props:", props);
	const { _id } = useParams();
	console.log("agencyId", _id);

	const [agency, setAgency] = useState({});
	const [offeredTrips, setOfferedTrips] = useState([]);
	const history = useHistory();

	/// Get the trips ///
	// SHOW with _id
	const getActiveAgency = (_id) => {
		if (_id) {
			fetch(url + "/agency/" + _id)
				.then((res) => {
					console.log('fetch res', res)
					return res.json()})
				.then((data) => {
					console.log("got agency data:", data.data);
					const agency = data.data;
					setAgency({
						...agency,
						firstName: agency.name.first,
						lastName: agency.name.last,
					});
					setOfferedTrips([...agency.trips_ref]);
				});
		}
	};

	const tripDisplay = offeredTrips.map((trip, i) => {
		return (
			<TripCard
				key={i}
				_id={trip._id}
				name={trip.name}
				locationName={trip.location.name}
				photo={trip.photos[0]}
				handleAddBooking={handleAddBooking}
			/>
		);
	});

	///Handle functions///
	const handleBackButton = () => {
		history.goBack();
	};

	useEffect(() => {
		getActiveAgency(_id);
	}, []);

	return (
		<main className="agency-profile">
			<header>
				<div className="back-button" onClick={handleBackButton}>
					{"<-"}
				</div>
				<h1>Agency Profile</h1>
			</header>
			<section className="agency-info">
				<img
					className="agency-avi"
					alt={agency.agencyname}
					src={
						agency.avatar
							? agency.avatar
							: "https://norrichs.com/img/ben_brownshirt800.jpg"
					}
				/>
				<h2>{agency.firstName + " " + agency.lastName}</h2>
				<div className="agency-socials">
					<div className="agency-social">f</div>

					<div className="agency-social">i</div>

					<div className="agency-social">L</div>
				</div>

				<header className="agency-tabs active">
					<div className="tab">
						Favorites<div className="tab"></div>
					</div>
					<div className="tab">
						Wallet<div className="tab"></div>
					</div>
					<div className="tab">
						About<div className="tab"></div>
					</div>
				</header>
				<section className="agency-trips"></section>
			</section>
			<section className="agency-trips">{tripDisplay}</section>
			{/* <section>{tripList.length > 0 ? loadedTrips() : loading()}</section> */}
		</main>
	);
};
export default AgencyProfile;
