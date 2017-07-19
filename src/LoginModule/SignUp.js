import React, { Component } from "react";
import '../index.css';

class SignUp extends Component {
    static contextTypes = { 
    router: React.PropTypes.object 
    } 
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
         this.context.router.history.push({
                            pathname: "/welcome",
                            state: {username: this.state.username}
                        })
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

export default SignUp;