import React from "react";
import { Component } from "react";
import './navbar.css';
import PeopleIcon from '@material-ui/icons/People';
import PublicIcon from '@material-ui/icons/Public';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default class NavBar extends Component {
    render(){
        return(
            <div id="main-div">
                    <svg width="81" height="36" viewBox="0 0 81 36" fill="none" xmlns="http://www.w3.org/2000/svg"id="svg-details">
                    <circle cx="8.5" cy="16.5" r="2.5" fill="white"/>
                    <circle cx="8.5" cy="19.5" r="2.5" fill="white"/>
                    <ellipse cx="11.5" cy="14" rx="2.5" ry="3" fill="white"/>
                    <circle cx="13.5" cy="11.5" r="2.5" fill="white"/>
                    <ellipse cx="16.5" cy="10" rx="2.5" ry="3" fill="white"/>
                    <ellipse cx="16.5" cy="10" rx="2.5" ry="3" fill="white"/>
                    <circle cx="13" cy="18" r="2" fill="white"/>
                    <ellipse cx="16" cy="17.5" rx="2" ry="2.5" fill="white"/>
                    <circle cx="17.5" cy="17.5" r="2.5" fill="white"/>
                    <ellipse cx="20" cy="17.5" rx="2" ry="2.5" fill="white"/>
                    <ellipse cx="22" cy="17.5" rx="2" ry="2.5" fill="white"/>
                    <ellipse cx="24" cy="17.5" rx="2" ry="2.5" fill="white"/>
                    <ellipse cx="26" cy="17.5" rx="2" ry="2.5" fill="white"/>
                    <ellipse cx="10.5" cy="17.5" rx="1.5" ry="2.5" fill="white"/>
                    <circle cx="11.5" cy="21.5" r="2.5" fill="white"/>
                    <ellipse cx="13.5" cy="24" rx="2.5" ry="3" fill="white"/>
                    <ellipse cx="16.5" cy="25.5" rx="2.5" ry="3.5" fill="white"/>
                    <path d="M30.5 18C30.5 27.7378 23.7167 35.5 15.5 35.5C7.28328 35.5 0.5 27.7378 0.5 18C0.5 8.26224 7.28328 0.5 15.5 0.5C23.7167 0.5 30.5 8.26224 30.5 18Z" stroke="white"/>
                    <path d="M33.8398 26V8.9375H38.7031C40.2578 8.9375 41.4258 9.31641 42.207 10.0742C42.9961 10.832 43.3906 11.9688 43.3906 13.4844C43.3906 14.2812 43.1914 14.9844 42.793 15.5938C42.3945 16.2031 41.8555 16.6758 41.1758 17.0117C41.957 17.2461 42.5742 17.7266 43.0273 18.4531C43.4883 19.1797 43.7188 20.0547 43.7188 21.0781C43.7188 22.6094 43.2969 23.8125 42.4531 24.6875C41.6172 25.5625 40.4219 26 38.8672 26H33.8398ZM35.9844 18.0195V24.1602H38.9141C39.7266 24.1602 40.3711 23.8945 40.8477 23.3633C41.3242 22.8242 41.5625 22.0703 41.5625 21.1016C41.5625 19.0469 40.6953 18.0195 38.9609 18.0195H35.9844ZM35.9844 16.2148H38.7383C39.4805 16.2148 40.0781 15.9648 40.5312 15.4648C40.9922 14.9648 41.2227 14.3008 41.2227 13.4727C41.2227 12.5352 41.0156 11.8555 40.6016 11.4336C40.1875 11.0039 39.5547 10.7891 38.7031 10.7891H35.9844V16.2148ZM46.9414 26V8.9375H51.0078C53 8.9375 54.5469 9.5625 55.6484 10.8125C56.75 12.0547 57.3008 13.8047 57.3008 16.0625V18.9219C57.3008 21.1797 56.7422 22.9258 55.625 24.1602C54.5078 25.3867 52.8867 26 50.7617 26H46.9414ZM49.0859 10.7891V24.1602H50.8086C52.3164 24.1602 53.418 23.7305 54.1133 22.8711C54.8086 22.0039 55.1641 20.7227 55.1797 19.0273V16.0039C55.1797 14.207 54.832 12.8906 54.1367 12.0547C53.4492 11.2109 52.4062 10.7891 51.0078 10.7891H49.0859ZM62.8086 24.1602H69.5V26H60.6523V8.9375H62.8086V24.1602ZM79.9766 18.4648H74.2109V26H72.0664V8.9375H80.9492V10.7891H74.2109V16.625H79.9766V18.4648Z" fill="white"/>
                    </svg>
                    <input type="text" id="Search-bar" placeholder="Search....." >
                    </input>
                    <PublicIcon id="public-icon"></PublicIcon>
                    <NotificationsIcon id="notification-icon"></NotificationsIcon>
                    <PeopleIcon id="people"></PeopleIcon>
                    <AccountCircleIcon id="profile-icon"></AccountCircleIcon>
                
                       </div>

        )
    }
}