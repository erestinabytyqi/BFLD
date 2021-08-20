import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './SignIn';
import HomePage from './HomePage/HomePage';

function Navigation() {
    return (
        < Router >
            <Switch>
                 <Route path='/signin' component={Signin} />
                  <Route path='/homepage' component={HomePage}/>
            </Switch>
        </Router >

)
    }
    export default  Navigation;