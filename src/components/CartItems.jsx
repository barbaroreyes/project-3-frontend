import React from 'react';
import Trips from "../components/Trips";

export default function CartItems({ cartItems, setCartItems }) {
  const getTotalSum = () => {
    return cartItems.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCartItems = () => {
    setCartItems([]);
  };

  const setQuantity = (trips, amount) => {
    const newCartItems = [...cartItems];
    newCartItems.find(
      (item) => item.name === trips.name
    ).quantity = amount;
    setCartItems(newCartItems);
  };

  const removeFromCartItems = (tripToRemove) => {
    setCartItems(
      cartItems.filter((trip) => trip !== tripToRemove)
    );
  };

  

  return (
    <>
      <h1>Cart</h1>
      {cartItems.length > 0 && (
        <button onClick={clearCartItems}>Clear Cart</button>
      )}
      <div className="trips">
        {cartItems.map((trip, index) => (
          <div className="trip" key={index}>
            <h3>{trip.name}</h3>
            <h4>${trip.cost}</h4>
            <input
              value={trip.quantity}
              onChange={(e) =>
                setQuantity(
                  trip,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={trip.image} alt={trip.name} />
            <button onClick={() => removeFromCartItems(trip)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}
