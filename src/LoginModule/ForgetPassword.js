import React, { Component } from "react";
import '../index.css';
import { Switch, Link, Route,Redirect,withRouter  } from 'react-router-dom';

class ForgetPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            showLogin:false
        }
        this.onHandleChange=this.onHandleChange.bind(this);
        this.onHandleSubmit=this.onHandleSubmit.bind(this);
    }

    onHandleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onHandleSubmit(e){
        this.setState((prevState)=>({
            showLogin:true
        }));
        // this.props.onHandleForgetPasswordSubmit(this.state.email);
    }

    render(){
        return (<div>
        Enter Email-Id:<input type="text" name="email" value={this.state.email} onChange={this.onHandleChange}/>
        <br/>
        <input type="button" value="Submit" onClick={this.onHandleSubmit}/>
        {this.state.showLogin==true?<Redirect to="/" />:""}
        </div>);
    }
}

export default ForgetPassword;