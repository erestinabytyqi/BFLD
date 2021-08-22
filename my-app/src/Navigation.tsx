import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './SignIn';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar';
import NotificationsWork from './Homepage-Notifications/NotificationsWork';
function Navigation() {
    return (
        < Router >
            <Switch>
                 <Route path='/signin' component={Signin} />
                  <Route path='/homepage' component={HomePage}/>
                  <Route path='/navbar' component={NavBar}/>
                    <Route path='/notificationswork' component={NotificationsWork}/>
                    </Switch>
        </Router >

)
    }
    export default  Navigation;