import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar';
import NotificationsWork from '../Homepage-Notifications/NotificationsWork';
function HomePage() {
    return (

        <div id="main-div">
            <div id="navbar">
                <NavBar></NavBar>
            </div>
            <div>
                <NotificationsWork></NotificationsWork>
            </div>
        </div>
    )
}

export default HomePage;