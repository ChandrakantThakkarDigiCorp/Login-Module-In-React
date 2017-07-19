import React, { Component } from "react";
import request from "../../node_modules/superagent/superagent";
import '../index.css';

import Login from "./Login";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import ForgetPassword from "./ForgetPassword";
import LoginModule from "./LoginModule";


import { Switch, Link, Route } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return ( <div>
         <Switch>
            <Route exact path="/" component={(props)=>(<LoginModule requireForgotLink="true" loginURL="http://192.168.0.88:5000/userLogin"
             forgotPasswordURL="/forgetPassword"  signupURL="/signUp"   />)}> </Route>
            <Route path="/welcome" component={Welcome}> </Route>
            <Route path="/forgetPassword" component={ForgetPassword}> </Route>
            <Route path="/signUp" component={SignUp}> </Route>
        </Switch>
         </div>);

        
    }
}





export default Main;