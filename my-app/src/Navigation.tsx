import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './SignIn';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar';
function Navigation() {
    return (
        < Router >
            <Switch>
                 <Route path='/signin' component={Signin} />
                  <Route path='/homepage' component={HomePage}/>
                  <Route path='/navbar' component={NavBar}/>
            </Switch>
        </Router >

)
    }
    export default  Navigation;