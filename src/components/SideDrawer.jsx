import React from "react";
import "../styles/SideDrawer.css";


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
        if (props.show) {
            drawerClasses = 'side-drawer open';
        }

    return ( 
        <nav className={drawerClasses} >
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/agencies/:agencyName">Agency Profiles</a></li>
            <li><a href="/users/:userName">Customer Profiles</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="/trips">PopularTrips</a></li>
            <li><a href="/trips/:trip">Trip</a></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;