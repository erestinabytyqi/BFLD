import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './SignIn';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar';
import NotificationsWork from './Homepage-Notifications/NotificationsWork';
import PagesignComponent from './PageSignComponent/PagesignComponent';
import Signup from './Signup';
import BDLFComponent from './PageSignComponent/BDLFComponent';
import Profile from './Profile/Profile';
import ProfileName from './Profile/ProfileName';
import EventPage from './Profile/EventPage';
function Navigation() {
    return (
        < Router >
            <Switch>
                <Route path='/signin' component={Signin} />
                <Route path='/homepage' component={HomePage} />
                <Route path='/navbar' component={NavBar} />
                <Route path='/notificationswork' component={NotificationsWork} />
                <Route path='/pagesigncomponent' component={PagesignComponent} />
                <Route path='/signup' component={Signup} />
                <Route path='/bdlfcomponent' component={BDLFComponent} />
                <Route path='/profile' component={Profile} />
                <Route path='/profilename' component={ProfileName} />
                <Route path='/eventpage' component={EventPage} />



            </Switch>
        </Router >

    )
}
export default Navigation;