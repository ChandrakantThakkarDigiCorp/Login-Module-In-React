import React, { Component } from 'react';
import TextBox from "./TextBox";
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = ({ username: "", password: "" });
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onValueChange(value, name) {
        this.setState({ [name]: value });
    }

    onSubmitForm(event) {
        alert("username:"+this.state.password+"   Password:"+this.state.password);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                
                <div class="componant-title-bg"> 
                    <div class="container">
                        <div class="row">
                        
                            <div class="col-xs-12">
                                <h1>Custom TextBox</h1>
                                <p class="lead">This is a example of how to create custom component from existing component in REACT.</p>
                            </div> 
                            
                        </div>
                    </div>
                </div>
                <div className="pmd-content pmd-content-custom" id="content">
                    <div className="container">
                        <section className="row component-section">
                            <div className="col-md-9">
                                <div className="component-box">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="pmd-card pmd-z-depth pmd-card-custom-form">
                                                <div className="pmd-card-body">
                                                    <div className="form-group pmd-textfield">
                                                        <label for="inputError1" className="control-label pmd-input-group-label">Username</label>
                                                        <div className="input-group">
                                                            <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">perm_identity</i></div>
                                                            <TextBox type="text" className="form-control" name="username" value={this.state.username} onHandleChange={this.onValueChange} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group pmd-textfield">
                                                        <label for="inputError1" className="control-label pmd-input-group-label">Password</label>
                                                        <div className="input-group">
                                                            <div className="input-group-addon"><i className="material-icons md-dark pmd-sm">https</i></div>
                                                            <TextBox type="password" name="password" className="form-control" value={this.state.password} onHandleChange={this.onValueChange} />
                                                        </div>
                                                    </div>

                                                    <div className="form-group ">
                                                        <div className="input-group">
                                                            <input type="button" value="Submit" onClick={this.onSubmitForm}/>
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

export default Form;