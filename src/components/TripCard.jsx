import React from "react";
import { Link } from "react-router-dom";


const TripCard = (props) => {

	console.log("tripcard props",props)
	const altImg = "https://source.unsplash.com/QVElk1sgzY4/640x426";
	let tripCardClasses = "trip-card"
	if(props.addClasses){
		tripCardClasses = "trip-card " + props.addClasses
		console.log("add classes", tripCardClasses)
	}
	return (
		<div className={tripCardClasses}>
			<div className="card-image-wrapper">
				<Link to={`/trips/${props._id}`}>
					<img alt={props.name} src={props.photo ? props.photo : altImg} />
				</Link>

				<div
					onClick={() => {
						props.handleAddBooking(props._id);
					}}
					className="book-button"
				>
					B
				</div>
			</div>

			<h2>{props.name}</h2>
			<div>
				<span>{props.locationName}</span>

			</div>
		</div>
	);
};
export default TripCard;
