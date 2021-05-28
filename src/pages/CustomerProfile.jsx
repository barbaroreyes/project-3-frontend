
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import TripCard from "../components/TripCard";
// import { Link } from "react-router-dom";
const CustomerProfile = (
	{ url, handleAddBooking },
	props
) => {
	console.log("user profile props:", props);
	const { _id } = useParams();
	console.log("thisId", _id);
	const [user, setUser] = useState({});
	const [bookedTrips, setBookedTrips] = useState([]);
	const history = useHistory()

	/// Get the trips ///
	// SHOW with _id
	const getActiveCustomer = (_id) => {
		if (_id) {
			fetch(url + "/customer/" + _id)
				.then((res) => res.json())
				.then((data) => {
					console.log("got user data:", data.data);
					const customer = data.data;
					setUser({
						...customer,
						firstName: customer.name.first,
						lastName: customer.name.last,
					});
					setBookedTrips([...customer.booked_trips_ref]);
				});
		}
	};


	const tripDisplay = bookedTrips.map((trip, i) => {
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
		history.goBack()
	}



	useEffect(() => {
		
		getActiveCustomer(_id);
	}, []);

	return (
		<main className="customer-profile">
			<header>
				<div className="back-button" onClick={handleBackButton}>{'<-'}</div>
				<h1>My Profile</h1>
				<div className="gear-button">set</div>
			</header>
			<section className="user-info">
				<img className="user-avi" alt={user.username} src={user.avatar ? user.avatar : "https://norrichs.com/img/ben_brownshirt800.jpg"} />
				<h2>{user.firstName + " " + user.lastName}</h2>
				<div className="user-socials">
					<div className="user-social">f</div>

					<div className="user-social">i</div>

					<div className="user-social">L</div>
				</div>

				<header className="user-tabs active">
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
				<section className="user-trips"></section>
			</section>
			<section className="user-trips">{tripDisplay}</section>
			{/* <section>{tripList.length > 0 ? loadedTrips() : loading()}</section> */}
		</main>
	);
};
export default CustomerProfile;
