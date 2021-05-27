import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AgencyProfile from "./pages/AgencyProfile";
import Booking from "./pages/Booking";
import CustomerProfile from "./pages/CustomerProfile";
import Home from "./pages/Home";
import PopularTrips from "./pages/PopularTrips";
import Trip from "./pages/Trip";
import Login from "./pages/Login";

function App() {
	/// STATE VARIABLES ///
	const [activeCustomer, setActiveCustomer] = useState({});
	const [activeCustomerTrips, setActiveCustomerTrips] = useState([])

	/// DEV VARIABLES ///

	// const url = "https://travel-app-dg.herokuapp.com";
	// const devUserId = "60ae7f5a134d1a3ed0d5a818"; // set to a value valid for your dev environment

	const url = "http://localhost:4500";
	const devUserId = "60ae91414d47758f4f146474";   // ben's dev id.  Comment out


	/// OTHER VARIABLES ///
	// deployed url: "https://www.notion.so/Backend-8da8f6e67fef4c3ab9cd86d1327f903e"

	/// HANDLER FUNCTIONS ///

	/// OTHER FUNCTIONS ///
	const getActiveCustomer = (_id) => {
		console.log("get active user, id:", _id);
		fetch(url + "/customer/" + _id)
			.then((res) => res.json())
			.then((data) => {
				console.log("got user data:", data.data);
				const customer = data.data;
				setActiveCustomer({
					firstName: customer.name.first,
					lastName: customer.name.last,
					avatar: customer.avatar,
					_id: customer._id,
					booked_trips: [
						...customer.booked_trips
					],
					username: customer.username,
					password: customer.password
				});
			});
	};


	useEffect(() => {
		getActiveCustomer(devUserId); // TODO change this to get active user ID from login
	}, []);

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/agencies/:_id">
					<AgencyProfile />
				</Route>
				<Route path="/users/:_id">
					<CustomerProfile activeCustomer={activeCustomer} />
				</Route>
				<Route path="/trips">
					<PopularTrips />
				</Route>
				<Route path="/trips/:_id">
					<Trip />
				</Route>
				<Route path="/booking">
					<Booking />
				</Route>
				<Route path="/login">
					<Login/>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
