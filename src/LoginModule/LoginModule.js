import React, { Component } from "react";
import request from "../../node_modules/superagent/superagent";
import '../index.css';

import Login from "./Login";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import ForgetPassword from "./ForgetPassword";


import { Switch, Link, Route,Redirect,withRouter  } from 'react-router-dom';

class LoginModule extends Component {
    static contextTypes = { 
    router: React.PropTypes.object 
    } 
    constructor(props) {
        super(props);
        this.state = {
            showSignup: false,
            showForget: false,
            username: ""
        }

        this.onHandleSignup = this.onHandleSignup.bind(this);
        this.onHandleLogin = this.onHandleLogin.bind(this);
        this.onShowForgetPasswordHandle = this.onShowForgetPasswordHandle.bind(this);
    }

    onHandleSignup(e) {
        this.setState((prevState) => ({
            showSignup:true
        }));
    }

    onHandleLogin(username, password) {
        var self=this;
        request
            .post(this.props.loginURL)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ username: username, password: password })
            .end(function (err, res) {
                debugger;
                if(err){
                    alert("Error in login api call");
                }else{
                    let data=JSON.parse(res.text);
                    if(data.status==true){
                        self.context.router.history.push({
                            pathname: "/welcome",
                            state: {username: username}
                        })
                    }else{
                        alert("Invalid Login");
                    }
                }
            });
    }

    onShowForgetPasswordHandle(e) {

        this.setState((prevState) => ({
            showForget: true
        }));
    }

  
    render() {
        return (<div>
            <div>
                <Login onHandleSignup={this.onHandleSignup} onHandleLogin={this.onHandleLogin} onShowForgetPasswordHandle={this.onShowForgetPasswordHandle} requireForgotLink={this.props.requireForgotLink} />
            </div>
            <br />
            {this.state.showForget? <Redirect to={this.props.forgotPasswordURL}/>:""}
            {this.state.showSignup? <Redirect to={this.props.signupURL}/>:""}
        </div>);

        
    }
}


export default withRouter (LoginModule);