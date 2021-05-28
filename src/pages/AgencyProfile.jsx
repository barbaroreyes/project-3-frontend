import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import TripCard from "../components/TripCard";
import Carousel from "../components/Carousel";


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
					console.log("fetch res", res);
					return res.json();
				})
				.then((data) => {
					console.log("got agency data:", data.data);
					const agency = data.data;
					setAgency({
						...agency,
						firstName: agency.name.first,
						lastName: agency.name.last,
					});
					// console.log("data offered trips",agency.trips_ref[0])
					setOfferedTrips(
						agency.trips_ref.map((trip, i) => {
							return (
								<TripCard
									addClasses={"condensed-card"}
									key={i}
									_id={trip._id}
									name={trip.name}
									locationName={trip.location.name}
									photo={trip.photos[0]}
									handleAddBooking={handleAddBooking}
								/>
							);
						})
					);
				});
		}
	};

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
					className="agency-logo"
					alt={agency.agencyname}
					src={
						agency.logo
							? agency.logo
							: "https://norrichs.com/img/ben_brownshirt800.jpg"
					}
				/>
				<h2>{agency.name}</h2>
				<div className="heading">
					<h2>Popular Trips</h2>
					<span className="light-link">
						<Link to="/trips">See all</Link>
					</span>
				</div>
				<Carousel id="trip-carousel">{offeredTrips}</Carousel>

				<section className="agency-trips"></section>
			</section>
		</main>
	);
};
export default AgencyProfile;
