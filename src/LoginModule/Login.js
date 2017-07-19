import React, { Component } from "react";
import '../index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.onShowForgetPassword=this.onShowForgetPassword.bind(this);
    }

    onHandleChange(e) {
        var name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    onLogin(e) {
         e.preventDefault();
        this.props.onHandleLogin(this.state.username, this.state.password);
    }

    onSignUp(e) {
        this.props.onHandleSignup(e);
    }

    onShowForgetPassword(e){
        this.props.onShowForgetPasswordHandle();
    }
    render() {
        if(this.props.requireForgotLink.toLowerCase()=="true"){
            this.forgetPassword= (<a href="javascript:void(0)" onClick={this.onShowForgetPassword}>Forgot Password?</a>);
        }
        return (
                <div>
                <div className="pmd-content pmd-content-custom" id="content">
                    <div className="container">
                        <section className="row component-section">
                            <div className="col-md-9">
                                <div className="component-box">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="pmd-card pmd-z-depth pmd-card-custom-form">
                                                <div className="pmd-card-body">
                                                <div className="form-group ">
                                                        <div className="input-group">
                                                            <h1>User Login</h1>
                                                        </div>
                                                    </div>

                                                    <div className="form-group pmd-textfield">
                                                        <label for="inputError1" className="control-label pmd-input-group-label">Username</label>
                                                        <div className="input-group">
                                                            <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">perm_identity</i></div>
                                                            <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onHandleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group pmd-textfield">
                                                        <label for="inputError1" className="control-label pmd-input-group-label">Password</label>
                                                        <div className="input-group">
                                                            <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">https</i></div>
                                                            <input type="password" name="password" className="form-control"  value={this.state.password} onChange={this.onHandleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group ">
                                                        <div className="input-group">
                                                            <input type="button" value="Login" onClick={this.onLogin} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                <input type="button" name="SignUp" value="Sign Up" onClick={this.onSignUp} />
                                                                 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                                                {this.forgetPassword}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;