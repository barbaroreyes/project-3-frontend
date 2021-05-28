import React, { useState } from 'react';
// import styles from "../components/"
import Trips from '../components/Trips';

// import CartItems from '../components/CartItems';


const PAGE_TRIPS = 'trips';
const PAGE_CARTITEMS= 'cartItems';

function Booking() {
  const [cartItems, setCartItems] = useState([]);
  const [page, setPage] = useState(PAGE_TRIPS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  
  return (

    <div className="Booking">
      <header>
        <button onClick={() => navigateTo(PAGE_CARTITEMS)}>Go to Cart ({getCartTotal()})
        </button>

        <button onClick={() => navigateTo(PAGE_TRIPS)}>
          View Trips
        </button>
      </header>
 
      {page === PAGE_TRIPS && (
        <Trips cartItems={cartItems} setCartItems={setCartItems} />
      )}
      
      
      </div>
  );
}

export default Booking;

  
  
  