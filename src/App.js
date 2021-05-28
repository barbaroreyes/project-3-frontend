import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AgencyProfile from "./pages/AgencyProfile";
import Booking from "./pages/Booking";
import CustomerProfile from "./pages/CustomerProfile";
import Home from "./pages/Home";
// import PopularTrips from "./pages/PopularTrips";
import Trip from "./pages/Trip";
import Login from "./pages/Login";

function App() {
	/// STATE VARIABLES ///
	const [activeCustomerId, setActiveCustomerId] = useState(null);
	const [bookingToAdd, setBookingToAdd] = useState(null);

	let history = useHistory();
	/// DEV VARIABLES ///

	const url = "https://travel-app-dg.herokuapp.com";
	// const devUserId = "60ae7f5a134d1a3ed0d5a818"; // set to a value valid for your dev environment

	// const url = "http://localhost:4500";
	const devUserId = "60afe19cad4ee50015cbce64"; // ben's dev id.  Comment out in other dev environment

	/// OTHER VARIABLES ///
	// deployed url: "https://www.notion.so/Backend-8da8f6e67fef4c3ab9cd86d1327f903e"

	/// HANDLER FUNCTIONS ///
	const handleSelectCustomer = (_id) => {
		setActiveCustomerId(_id);
		history.push("/users/" + _id);
	};

	const handleAddBooking = (_id) => {
		setBookingToAdd(_id);
		history.push("/booking");
	};

	/// OTHER FUNCTIONS ///


	useEffect(() => {
		setActiveCustomerId(devUserId); // TODO change this to get active user ID from login
	}, []);

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Home
						handleSelectCustomer={handleSelectCustomer}
						activeCustomerId={activeCustomerId}
					/>
				</Route>
				<Route path="/agency/:_id">
					<AgencyProfile url={url}
					activeCustomerId={activeCustomerId} />
				</Route>
				<Route path="/users/:_id">
					<CustomerProfile
						url={url}
						activeCustomerId={activeCustomerId}
						handleAddBooking={handleAddBooking}
					/>
				</Route>
				{/* <Route path="/trips">
					<PopularTrips activeCustomerId={activeCustomerId} />
				</Route> */}
				<Route path='/trips/:id'
					render={(routerProps)=> <Trip {...routerProps}/>}
				/>
				<Route path="/booking">
					<Booking
						bookingToAdd={bookingToAdd}
						activeCustomerId={activeCustomerId}
					/>
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;

// class App extends Component {
// 	state = {
// 		sideDrawerOpen: false
// 	};
// 	render(){
