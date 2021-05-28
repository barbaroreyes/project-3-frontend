import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Trip = (props) => {
	const id = props.match.params.id
	const url = "https://travel-app-dg.herokuapp.com";
	const [trip, setTrip] = useState(null)

	const findOneTrip = () => {
		fetch(url + "/trip/" + id)
		.then((res) => res.json())
		.then((data) => {
			setTrip(data.data)
		})
	}

	useEffect(() => {
		findOneTrip()
	}, [])

	const loaded = () => {
		return (
			<div id="trip-div">
			<section id="travel-btns">
				<Link to="/">
					<h1 id="home-link">{`<-`}</h1>
				</Link>
				<Link to="/">
					<h1 id="share-link">S</h1>
				</Link>
			</section>
			<img src={trip.photos[0]} className="trip-pic"/>
			{/* <img src={trip.photos[1]} className="trip-pic"/>
			<img src={trip.photos[2]} className="trip-pic"/>
			<img src={trip.photos[3]} className="trip-pic"/>
			<img src={trip.photos[4]} className="trip-pic"/>
			<img src={trip.photos[5]} className="trip-pic"/>
			<img src={trip.photos[6]} className="trip-pic"/>
			<img src={trip.photos[7]} className="trip-pic"/> */}
			<section id="trip-page-card">
			<h1 id="trip-title">{trip.location.name}</h1>
			<p>{`Activities include ${trip.activities[0]}, ${trip.activities[1]}, ${trip.activities[2]}, and ${trip.activities[3]}`}</p>
			<hr />
			<h3>Hosted by<br/> {trip.agency} Agency</h3>
			<h3>{trip.agencies_ref.contact.address}</h3>
			<h3>{trip.agencies_ref.contact.phone}</h3>
			<h3>{trip.agencies_ref.contact.email}</h3>
			<h3>{trip.agencies_ref.contact.url}</h3>
			<hr />
			<h2>Reviews</h2>
			<h3>Name: {trip.reviews_ref[0].author}</h3>
			<h3>Rating: {trip.reviews_ref[0].stars}/5</h3>
			<h3>{trip.reviews_ref[0].body}</h3>
			</section>
			</div>
		)
	}

	const loading = () => {
		return <h1>Loading...</h1>
	}


	return trip ? loaded() : loading()
}
export default Trip