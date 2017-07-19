
import React, { Component } from "react";
import './index.css';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            username: "", password: ""
        });
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onHandleChange(e) {
        var name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    onSubmit(e) {
        this.props.onSignupSubmit(this.state.username);
    }



    render() {
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
                                                            <h1>Registration Form</h1>
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
                                                             <input type="button" value="Submit" onClick={this.onSubmit} />
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
    }

    onHandleChange(e) {
        var name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    onLogin(e) {
        this.props.onHandleLogin(this.state.username, this.state.password);
    }

    onSignUp(e) {
        this.props.onHandleSignup(e);
    }
    render() {
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

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(e) {
        this.props.onHandleLogout(e);
    }

    render() {
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
                                                            <h1>Welcome ,{this.props.username}</h1>
                                                        </div>
                                                    </div>

                                                    <div className="form-group ">
                                                        <div className="input-group">
                                                             <input type="button" value="Logout" onClick={this.onLogout} />
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



class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogin: "showDiv",
            showSignup: "hideDiv",
            showWelcome: "hideDiv",
            username: ""
        }

        this.onHandleSignup = this.onHandleSignup.bind(this);
        this.onHandleLogin = this.onHandleLogin.bind(this);


        this.onSignupSubmit = this.onSignupSubmit.bind(this);

        this.onHandleLogout = this.onHandleLogout.bind(this);
    }

    onHandleSignup(e) {
        this.setState((prevState) => ({
            showSignup: prevState.showSignup == "hideDiv" ? "showDiv" : "hideDiv",
            showLogin: prevState.showLogin == "hideDiv" ? "showDiv" : "hideDiv",
            showWelcome: "hideDiv"
        }));
    }

    onHandleLogin(username, password) {
        this.setState((prevState) => ({
            username: username,
            showLogin: "hideDiv",
            showSignup: "hideDiv",
            showWelcome: prevState.showWelcome == "hideDiv" ? "showDiv" : "hideDiv"
        }));
    }

    onSignupSubmit(username) {
        this.setState((prevState) => ({
            username: username,
            showSignup: prevState.showSignup == "hideDiv" ? "showDiv" : "hideDiv",
            showWelcome: "showDiv"
        }));
    }

    onHandleLogout(e) {
        this.setState((prevState) => ({
            showWelcome: "hideDiv",
            showLogin: "showDiv",
            username: ""
        }));
    }
    render() {
        return (<div>
            <div className={this.state.showSignup}>
                <SignUp onSignupSubmit={this.onSignupSubmit} />
            </div>
            <div className={this.state.showLogin}>
                <Login onHandleSignup={this.onHandleSignup} onHandleLogin={this.onHandleLogin} />
            </div>

            <div className={this.state.showWelcome}>
                <Welcome username={this.state.username} onHandleLogout={this.onHandleLogout} />
            </div>
            <br />
        </div>);
    }
}

export default LoginComponent;
