import React, { useState } from 'react';
// import useFetch from "react-fetch-hook";


const PLACES_TO_VISIT = 'places to visit';
const ACTIVITY = 'activity';

export default function Trips({ setCartItems, cartItems }) {
    //useFetch react hook
    // const {isLoading, error, data} = useFetch("");
    //     if (isLoading) return "Loading...";
    //     if (error) return "Error!";

    const [trips] = useState([
    {
      category: ACTIVITY,
      name: 'Activity',
      cost: 2.99,
      image:
      "https://bn1304files.storage.live.com/y4mGc-ddj31qT21Y4-cD4qaq3n5l0pefkuNpHo73CiPbWjcrtVfLnNTHcDjHzgLcEgco5HiZasvrmt4aP0gtR2trIBBkRT6suaXhMd6jzSxntdboF_G1SHRIlOVczdo-2u_39h68UgNe4ofYCbgULr7Qj8OZGwrJTi9J-wOP3TYLyFYSkY9CIeG5RRa1NxbrERa?width=256&height=256&cropmode=none",
    },
    {
      category: PLACES_TO_VISIT,
      name: 'Cuba1',
      cost: 19.99,
      image:
      "https://bn1304files.storage.live.com/y4mi4uGKC_rU450rqLVq_MbnYKQTOTOIIoXeGe8rKN6DcsqKrSOS2FxDY82jR-_vmv-_-jJMN3tnUDhJCMkH0L-srbHPux73pUUb12dZGfhJiqXdH65P563J02aKqVh7faHILLoTKeusC3oojlKNyTEhiLl-dYb48bDdhlQsWayVDeIS8EFG1id81KhY1ZJ87AV?width=256&height=256&cropmode=none",
    },
  ]);

  const addToCart = (trip) => {
    let newCart = [...cartItems];
    let itemInCart = newCart.find(
      (item) => trip.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...trips,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCartItems(newCart);
  };

  const [category, setCategory] = useState(PLACES_TO_VISIT);

  const getItemsInCategory = () => {
    return trips.filter(
      (trip) => trip.category === category
    );
  };

  return (
    <>
      <h1>Trips</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={PLACES_TO_VISIT}>{PLACES_TO_VISIT}</option>
        <option value={ACTIVITY}>{ACTIVITY}</option>
      </select>
      <div className="trips">
        {getItemsInCategory().map((trips, index) => (
          <div className="trips" key={index}>
            <h3>{trips.name}</h3>
            <h4>${trips.cost}</h4>
            <img src={trips.image} alt={trips.name} />
            <div>
            <button onClick={() => addToCart(trips)}>
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}



  