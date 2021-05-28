import React, { useState } from 'react';

const PLACES_TO_VISIT = 'places to visit';
const ACTIVITY = 'activity';

export default function Products({ setCartItems, cartItems }) {
  const [trips] = useState([
    {
      category: PLACES_TO_VISIT,
      name: 'Pico Turquino',
      cost: 229.99,
      image:
      "https://source.unsplash.com/UDe7o0gtgJ4/640x959",
    },
    {
      category: PLACES_TO_VISIT,
      name: 'El Yunque',
      cost: 199.99,
      image:
      "https://source.unsplash.com/OPab9u8gywo/640x960",
    },
    {
      category: PLACES_TO_VISIT,
      name: 'Jaimanitas River',
      cost: 229.99,
      image:
      "https://source.unsplash.com/YvkH8R1zoQM/640x426",
    },
    {
      category: ACTIVITY,
      name: 'Sagua la Grande River',
      cost: 229.99,
      image:
      "https://source.unsplash.com/y3yv_NG1kYU/640x426",
    },
    {
      category: ACTIVITY,
      name: 'Maximo River',
      cost: 229.99,
      image:
      "https://source.unsplash.com/Kgj6PH1PVPM/640x425",
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
    <main>
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
    </main>
  );
}



  // const [trips] = useState([
    //can come from backend
    // {
    //   name: "Cuba1",
    //   cost: 2.99,
    //   image: "https://bn1304files.storage.live.com/y4mGc-ddj31qT21Y4-cD4qaq3n5l0pefkuNpHo73CiPbWjcrtVfLnNTHcDjHzgLcEgco5HiZasvrmt4aP0gtR2trIBBkRT6suaXhMd6jzSxntdboF_G1SHRIlOVczdo-2u_39h68UgNe4ofYCbgULr7Qj8OZGwrJTi9J-wOP3TYLyFYSkY9CIeG5RRa1NxbrERa?width=256&height=256&cropmode=none"
      
    // },
    // {
    //   name: "Cuba2",
    //   cost: 12.99,
    //   image: "https://bn1304files.storage.live.com/y4mi4uGKC_rU450rqLVq_MbnYKQTOTOIIoXeGe8rKN6DcsqKrSOS2FxDY82jR-_vmv-_-jJMN3tnUDhJCMkH0L-srbHPux73pUUb12dZGfhJiqXdH65P563J02aKqVh7faHILLoTKeusC3oojlKNyTEhiLl-dYb48bDdhlQsWayVDeIS8EFG1id81KhY1ZJ87AV?width=256&height=256&cropmode=none"
      
    // },
    // {
    //   name: "Cuba3",
    //   cost: 12.99,
    //   image: "https://bn1304files.storage.live.com/y4m8ujG1dm3sDKjjCNW9d1aNYru8n8Ovgxt7ysIWTRc_l6X3YHrMWe-viyDqig8Ycx9i4m9ArMZ2XvjhdCYBP_st_idpLe14QHZ01X03MsfTGzW3Gxrvjm358fPjEV5KTn3bVjFNaF2rCAcWC33YXMWNXb8Y92Rxy3KfZtHCN5Q1pK6tAJ4CPJ0TIZufcEgwmIk?width=256&height=256&cropmode=none"
      
    // }
  // ])