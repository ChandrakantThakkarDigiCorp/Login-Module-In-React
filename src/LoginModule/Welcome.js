import React, { Component } from "react";
import '../index.css';
import { Switch, Link, Route,Redirect,withRouter  } from 'react-router-dom';


class Welcome extends Component {
    constructor(props) {
    
        super(props);
        this.onLogout = this.onLogout.bind(this);
        this.state={logout:false};
    }

    onLogout(e) {
        this.setState({logout:true});
    }

    render() {
        var username=this.props.location!=undefined?this.props.location.state.username:"";
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
                                                            <h1>Welcome ,{username}</h1>
                                                        </div>
                                                    </div>

                                                    <div className="form-group ">
                                                        <div className="input-group">
                                                             <input type="button" value="Logout" onClick={this.onLogout} />
                                                        </div>
                                                    </div>
                                                    {this.state.logout==false?"":<Redirect to="/"/>}
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

export default Welcome;